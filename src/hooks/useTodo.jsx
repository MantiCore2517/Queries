import { useEffect, useState } from "react";
import { todosAPI } from "../API/todosAPI";

export const useTodo = (id) => {
	const [todosList, setTodosList] = useState([]);
	const [todo, setTodo] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {}, []);

	const getTodosList = async () => {
		setIsLoading(true);
		try {
			const todos = await todosAPI.fetchALL();
			setTodosList(todos);
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	const getTodoById = async () => {
		setIsLoading(true);
		try {
			const todo = await todosAPI.getTodoByID(id);
			setTodo(todo);
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
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	const deleteTodoItem = async (id) => {
		setIsLoading(true);
		try {
			await todosAPI.delete(id);
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
		getTodoById,
		updateTodoItem,
		addTodoItem,
		deleteTodoItem,
	};
};
