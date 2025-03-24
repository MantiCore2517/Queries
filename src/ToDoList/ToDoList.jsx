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
import { ToDo } from "../ToDo/ToDo";
import * as sysMessages from "../constants";

const formSchema = yup.object().shape({
	search: yup
		.string()
		.required("Нельзя добавить пустую задачу!")
		.min(5, "Название задачи должно содержать минимум 5 символов!")
		.max(100, "Название задачи не может превышать 100 символов!"),
});

export const ToDoList = () => {
	const [timeoutRef, setTimeoutRef] = useState(null);
	const [message, setMessage] = useState(null);
	const [inputValue, setInputValue] = useState("");
	const { todos, loading, refresh, setRefresh } = useRequestGetTodos();
	const [debouncedValue] = useDebounce(inputValue, 500);
	const [filteredTodos, setFilteredTodos] = useState(todos);
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

	useEffect(() => {
		setFilteredTodos(
			!inputValue || inputValue === null
				? todos
				: todos.filter((todo) => {
						const search = debouncedValue.trim().toLowerCase();
						const title = todo.title.toLowerCase();
						return title.includes(search);
					}),
		);
	}, [debouncedValue, todos, inputValue]);

	const onChange = (event) => setInputValue(event.target.value || "");

	const onSubmit = (data) => {
		addTodo({
			title: data.search,
			completed: false,
		});
		reset();
		setInputValue("");
		setRefresh(!refresh);
		messageHandler(sysMessages.confirmMessage);
	};

	const handleDelete = (id) => {
		deleteTodoById(id);
		setRefresh(!refresh);
		messageHandler(sysMessages.deleteMessage);
	};

	const handleUpdate = (id, field, value) => {
		updateTodo(id, field, value);
		setRefresh(!refresh);
		messageHandler(sysMessages.updateMessage);
	};

	const messageHandler = (message) => {
		clearTimeout(timeoutRef);
		setMessage(message);
		setTimeoutRef(
			setTimeout(() => {
				setMessage(null);
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
		todos: todos,
		todo: <ToDo />,
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
