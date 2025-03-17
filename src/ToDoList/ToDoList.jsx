import { useState, useEffect } from "react";
import { ToDoListLayout } from "./ToDoListLayout";
import {
	useRequestGetTodos,
	useRequestAddTodos,
	useRequestDeleteTodos,
	useRequestUpdateTodos,
} from "../hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDebounce } from "use-debounce";

const formSchema = yup.object().shape({
	search: yup
		.string()
		.required("Нельзя добавить пустую задачу!")
		.min(5, "Название задачи должно содержать минимум 5 символов!")
		.max(100, "Название задачи не может превышать 100 символов!"),
});

export const ToDoList = () => {
	const [message, setMessage] = useState(null);
	const [inputValue, setInputValue] = useState("");
	const { todos, loading } = useRequestGetTodos();
	const [debouncedValue] = useDebounce(inputValue, 500);
	const [filteredTodos, setFilteredTodos] = useState(Object.entries(todos));
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
	const { addTodo } = useRequestAddTodos();
	const { deleteTodoById } = useRequestDeleteTodos();
	const { updateTodo } = useRequestUpdateTodos();

	const confirmMessage = "Задача успешно создана!";
	const deleteMessage = "Задача успешно удалена!";
	const updateMessage = "Задача успешно обновлена!";

	useEffect(() => {
		setFilteredTodos(
			Object.entries(todos).filter(([id, todo]) => {
				!debouncedValue && true;
				message && message.type === "confirm" && true;
				const search = debouncedValue.trim().toLowerCase();
				const title = todo.title.toLowerCase();

				return title.includes(search);
			}),
		);
	}, [debouncedValue, todos, message]);

	const onChange = (event) => {
		setInputValue(event.target.value);
	};

	const onSubmit = (data) => {
		addTodo({
			title: data.search,
			completed: false,
		});

		reset();

		messageHandler({ message: confirmMessage, type: "confirm" });
	};

	const handleDelete = (id) => {
		deleteTodoById(id);
		messageHandler({ message: deleteMessage, type: "delete" });
	};

	const handleUpdate = (id, prev) => {
		updateTodo(id, { completed: !prev });
		messageHandler({ message: updateMessage, type: "update" });
	};

	const messageHandler = (message) => {
		setMessage(message);
		setTimeout(() => {
			setMessage(null);
		}, 1000);
	};

	useEffect(() => {
		if (errors.search?.message) {
			messageHandler({ message: errors.search?.message, type: "error" });
		}
	}, [errors.search?.message]);

	const onClick = () => {
		messageHandler({ message: errors.search?.message, type: "error" });
	};

	const props = {
		todos: todos,
		filteredTodos: filteredTodos,
		loading: loading,
		onSubmit: handleSubmit(onSubmit),
		search: { ...register("search") },
		onDelete: handleDelete,
		onUpdate: handleUpdate,
		onClick: onClick,
		onChange: onChange,
		message: message,
	};

	return <ToDoListLayout {...props} />;
};
