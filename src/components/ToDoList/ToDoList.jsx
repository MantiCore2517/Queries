import { useState, useEffect } from "react";
import { ToDoListLayout } from "./ToDoListLayout";
import { useTodo } from "../../hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDebounce } from "use-debounce";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

const formSchema = yup.object().shape({
	search: yup
		.string()
		.required("Нельзя добавить пустую задачу!")
		.min(5, "Название задачи должно содержать минимум 5 символов!")
		.max(100, "Название задачи не может превышать 100 символов!"),
});

export const ToDoList = () => {
	const { setStatus } = useContext(AppContext);
	const [inputValue, setInputValue] = useState("");
	const [debouncedValue] = useDebounce(inputValue, 500);
	const {
		todosList,
		isLoading,
		updateTodoItem,
		deleteTodoItem,
		getTodosList,
		addTodoItem,
		error,
	} = useTodo();
	const [filteredTodos, setFilteredTodos] = useState(todosList);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: { search: "" },
		resolver: yupResolver(formSchema),
		mode: "onSubmit",
	});

	useEffect(() => {
		getTodosList();
	}, []);

	useEffect(() => {
		setFilteredTodos(
			todosList.filter((todo) => {
				const search = debouncedValue.trim().toLowerCase();
				const title = todo.title.toLowerCase();
				return title.includes(search);
			}),
		);
	}, [debouncedValue, todosList]);

	const onChange = (event) => setInputValue(event.target.value || "");

	const onSubmit = (data) => {
		addTodoItem({
			title: data.search,
			completed: false,
		});
		reset();
		setInputValue("");
		error ? setStatus(errors.search?.message) : setStatus("confirm");
	};

	const handleDelete = (todo) => {
		deleteTodoItem(todo);
		setStatus("delete");
	};

	const handleUpdate = (todo, field, value) => {
		const currentTodo = todo;
		const updatedTodo = { ...currentTodo, [field]: value };
		updateTodoItem(updatedTodo);
		setStatus("update");
	};

	useEffect(() => {
		if (errors.search?.message) {
			setStatus(errors.search?.message);
		}
	}, [errors.search?.message]);

	const onClick = () => {
		setStatus(errors.search?.message);
	};

	const props = {
		todos: todosList,
		filteredTodos: filteredTodos,
		loading: isLoading,
		onSubmit: handleSubmit(onSubmit),
		search: { ...register("search") },
		onDelete: handleDelete,
		onUpdate: handleUpdate,
		onClick: onClick,
		onChange: onChange,
	};

	return <ToDoListLayout {...props} />;
};
