import { useState, useEffect } from "react";
import { ToDoListLayout } from "./ToDoListLayout";
import { useTodo } from "../../hooks";
import { appStatusSelector } from "../../selectors/app";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { appStatusDelete, appStatusUpdate } from "../../actions/app/actions";
import { useDebounce } from "use-debounce";
import { searchInputValue } from "../../selectors/search/search-input-value";

export const ToDoList = () => {
	const { todosList, isLoading, updateTodoItem, deleteTodoItem, getTodosList } =
		useTodo();
	const [filteredTodos, setFilteredTodos] = useState(todosList);
	const dispatch = useDispatch();
	const status = useSelector(appStatusSelector);
	const inputValue = useSelector(searchInputValue);
	const [debouncedValue] = useDebounce(inputValue, 500);

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
		dispatch(appStatusDelete);
	};

	const handleUpdate = (todo, field, value) => {
		const currentTodo = todo;
		const updatedTodo = { ...currentTodo, [field]: value };
		updateTodoItem(updatedTodo);
		dispatch(appStatusUpdate);
	};

	const props = {
		filteredTodos: filteredTodos,
		loading: isLoading,
		onDelete: handleDelete,
		onUpdate: handleUpdate,
	};

	return <ToDoListLayout {...props} />;
};
