import { ToDoLayout } from "./ToDoLayout";
import {
	useRequestGetTodo,
	useRequestDeleteTodos,
	useRequestUpdateTodos,
} from "../hooks";
import { useParams, useNavigate } from "react-router-dom";
import * as sysMessages from "../constants";
import { useState } from "react";

export const ToDo = () => {
	const params = useParams();
	const { todo, loading, refresh, setRefresh } = useRequestGetTodo(params.id);
	const { updateTodo } = useRequestUpdateTodos();
	const { deleteTodoById } = useRequestDeleteTodos();
	const [message, setMessage] = useState(null);
	const [timeoutRef, setTimeoutRef] = useState(null);
	const navigate = useNavigate();

	const messageHandler = (message) => {
		clearTimeout(timeoutRef);
		setMessage(message);
		setTimeoutRef(
			setTimeout(() => {
				setMessage(null);
			}, 2000),
		);
	};

	const handleUpdate = (id, field, value) => {
		updateTodo(id, field, value);
		setRefresh(!refresh);
		messageHandler(sysMessages.updateMessage);
	};

	const handleDelete = (id) => {
		navigate("/");
		deleteTodoById(id);
		setRefresh(!refresh);
		messageHandler(sysMessages.deleteMessage);
	};

	const props = {
		todo: todo,
		loading: loading,
		onDelete: handleDelete,
		onUpdate: handleUpdate,
		message: message,
	};

	return <ToDoLayout {...props} />;
};
