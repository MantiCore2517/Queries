import { useState, useEffect } from "react";
import { ToDoListLayout } from "../../pages/ToDoListLayout";
import { useTodo } from "../../hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDebounce } from "use-debounce";
import { ToDo } from "../ToDo/ToDo";
import * as sysMessages from "../../constants";

const formSchema = yup.object().shape({
	search: yup
		.string()
		.required("Нельзя добавить пустую задачу!")
		.min(5, "Название задачи должно содержать минимум 5 символов!")
		.max(100, "Название задачи не может превышать 100 символов!"),
});

export const ToDoList = (messageProps) => {
	const [timeoutRef, setTimeoutRef] = useState(null);
	//const [message, setMessage] = useState(null);
	const [inputValue, setInputValue] = useState("");
	const [debouncedValue] = useDebounce(inputValue, 500);
	const [filteredTodos, setFilteredTodos] = useState([]);
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

	const { todosList, isLoading, error, getTodosList, addTodoItem } = useTodo();

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
		getTodosList();
		setInputValue("");
		error
			? messageHandler({
					message: error.message,
					type: "error",
					time: Date.now(),
				})
			: messageHandler(sysMessages.confirmMessage);
	};

	const messageHandler = (message) => {
		clearTimeout(timeoutRef);
		messageProps.setMessage(message);
		setTimeoutRef(
			setTimeout(() => {
				messageProps.setMessage(null);
			}, 2000),
		);
	};

	useEffect(() => {
		if (errors.search?.message) {
			messageHandler({
				message: errors.search?.message,
				type: "error",
				time: Date.now(),
			});
		}
	}, [errors.search?.message]);

	const onClick = () => {
		messageHandler({
			message: errors.search?.message,
			type: "error",
			time: Date.now(),
		});
	};

	const props = {
		todos: todosList,
		todo: <ToDo />,
		filteredTodos: filteredTodos,
		loading: isLoading,
		onSubmit: handleSubmit(onSubmit),
		search: { ...register("search") },
		onClick: onClick,
		onChange: onChange,
		message: messageProps.message,
	};

	return <ToDoListLayout {...props} />;
};
