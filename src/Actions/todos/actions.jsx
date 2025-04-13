import { todosAPI } from "../../API/todosAPI";

const tlist = async () => {
	const response = await todosAPI.fetchAllTodos();
	return response;
};

const updTodo = async (updatingTodo) => {
	const response = await todosAPI.update(updatingTodo);
	return response;
};
const adTodo = async (addingTodo) => {
	const response = await todosAPI.add(addingTodo);
	return response;
};
const delTodo = async (id) => {
	const response = await todosAPI.delete(id);
	return response;
};
export const setTodosList = () => (dispatch) =>
	tlist().then((list) => {
		//console.log("list", list);
		return dispatch({
			type: "SET_TODOS_LIST",
			payload: list,
		});
	});

export const setFilteredTodos = (todosList, debouncedValue) => {
	const pl = todosList.filter((todo) => {
		const search = debouncedValue.trim().toLowerCase();
		const title = todo.title.toLowerCase();
		return title.includes(search);
	});
	return {
		type: "SET_FILTERED_TODOS",
		payload: pl,
	};
};
export const updateTodo = (updatingTodo) => (dispatch) =>
	updTodo(updatingTodo).then((todo) => {
		return dispatch({
			type: "UPDATE_TODO",
			payload: todo,
		});
	});
export const addTodo = (addingTodo) => (dispatch) =>
	adTodo({ title: addingTodo, completed: false }).then((todo) => {
		//console.log("todo", todo);
		return dispatch({
			type: "ADD_TODO",
			payload: todo,
		});
	});

export const deleteTodo = (deletingTodo) => (dispatch) =>
	delTodo(deletingTodo.id).then(() => {
		return dispatch({
			type: "DELETE_TODO",
			payload: deletingTodo,
		});
	});
export const setIsLoading = (payload) => {
	return {
		type: "SET_IS_LOADING",
		payload: payload,
	};
};
