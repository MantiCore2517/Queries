import { useState, useEffect } from "react";
import { ToDoListLayout } from "./ToDoListLayout";
import { useTodo } from "../../hooks";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

export const ToDoList = () => {
	const { status, setStatus, debouncedValue } = useContext(AppContext);
	const { todosList, isLoading, updateTodoItem, deleteTodoItem, getTodosList } =
		useTodo();
	const [filteredTodos, setFilteredTodos] = useState(todosList);

	useEffect(() => {
		getTodosList();
	}, [status]);

	useEffect(() => {
		setFilteredTodos(
			todosList.filter((todo) => {
				const search = debouncedValue.trim().toLowerCase();
				const title = todo.title.toLowerCase();
				return title.includes(search);
			}),
		);
	}, [debouncedValue, todosList]);

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

	const props = {
		filteredTodos: filteredTodos,
		loading: isLoading,
		onDelete: handleDelete,
		onUpdate: handleUpdate,
	};

	return <ToDoListLayout {...props} />;
};
