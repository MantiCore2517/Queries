import { ToDoLayout } from "../../pages/ToDoLayout";
import { useTodo } from "../../hooks";
import { useParams, useNavigate } from "react-router-dom";
import * as sysMessages from "../../constants";
import { useEffect, useState } from "react";

export const ToDo = (messageProps) => {
	const { id } = useParams();
	const [isOpen, setIsOpen] = useState(false);
	const [timeoutRef, setTimeoutRef] = useState(null);
	const navigate = useNavigate();
	const { todo, isLoading, getTodoById, updateTodoItem, deleteTodoItem } = useTodo(id);

	useEffect(() => {
		getTodoById();
	}, []);

	const messageHandler = (message) => {
		clearTimeout(timeoutRef);
		messageProps.setMessage(message);
		setTimeoutRef(
			setTimeout(() => {
				messageProps.setMessage(null);
			}, 2000),
		);
	};

	const handleUpdate = (field, value) => {
		const currentTodo = todo;
		const updatedTodo = { ...currentTodo, [field]: value };
		updateTodoItem(updatedTodo);
		messageHandler(sysMessages.updateMessage);
	};

	const handleDelete = (id) => {
		deleteTodoItem(id);
		messageHandler(sysMessages.deleteMessage);
		navigate("/");
	};

	const props = {
		todo: todo,
		loading: isLoading,
		onDelete: handleDelete,
		onUpdate: handleUpdate,
		message: messageProps.message,
		isOpen: isOpen,
		setIsOpen: setIsOpen,
	};

	return <ToDoLayout {...props} />;
};
