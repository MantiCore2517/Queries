import { useState } from "react";
import { todosAPI } from "../API/todosAPI";

export const useTodo = () => {
	const [todosList, setTodosList] = useState([]);
	const [todo, setTodo] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const getTodosList = async () => {
		setIsLoading(true);
		try {
			const todos = await todosAPI.fetchAllTodos();
			setTodosList(todos);
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	const updateTodoItem = async (updatingTodo) => {
		setIsLoading(true);
		try {
			const todo = await todosAPI.update(updatingTodo);
			setTodo(todo);
			await getTodosList();
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	const addTodoItem = async (newTodo) => {
		setIsLoading(true);
		try {
			const todo = await todosAPI.add(newTodo);
			setTodo(todo);
			await getTodosList();
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	const deleteTodoItem = async (todo) => {
		setIsLoading(true);
		try {
			await todosAPI.delete(todo.id);
			await getTodosList();
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		todo,
		todosList,
		isLoading,
		error,
		getTodosList,
		updateTodoItem,
		addTodoItem,
		deleteTodoItem,
	};
};
