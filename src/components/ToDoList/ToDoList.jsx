import { useEffect } from "react";
import { ToDoListLayout } from "./ToDoListLayout";
import { useTodo } from "../../hooks";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { appStatusDelete, appStatusUpdate } from "../../actions/app/actions";
import { useDebounce } from "use-debounce";
import { searchInputValue } from "../../selectors/search/search-input-value";
import {
	setTodosList,
	setFilteredTodos,
	updateTodo,
	deleteTodo,
} from "../../Actions/todos/actions";
import { todosTList, todosFilteredList } from "../../selectors/todos";

export const ToDoList = () => {
	const dispatch = useDispatch();
	//const { isLoading } = useTodo();
	const inputValue = useSelector(searchInputValue);
	const todosList = useSelector(todosTList);
	const filteredTodos = useSelector(todosFilteredList);
	const [debouncedValue] = useDebounce(inputValue, 500);

	useEffect(() => {
		dispatch(setTodosList());
	}, []);

	useEffect(() => {
		dispatch(setFilteredTodos(todosList, debouncedValue));
	}, [debouncedValue, todosList]);

	const handleDelete = (todo) => {
		//deleteTodoItem(todo);
		dispatch(deleteTodo(todo));
		dispatch(appStatusDelete);
	};

	const handleUpdate = (todo, field, value) => {
		const currentTodo = todo;
		const updatedTodo = { ...currentTodo, [field]: value };
		dispatch(updateTodo(updatedTodo));
		dispatch(appStatusUpdate);
	};

	const props = {
		filteredTodos: filteredTodos,
		loading: false,
		onDelete: handleDelete,
		onUpdate: handleUpdate,
	};

	return <ToDoListLayout {...props} />;
};
