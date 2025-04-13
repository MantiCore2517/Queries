import { initialState } from "../App/initial-state";

export const todosReducer = (state = initialState.todos, action) => {
	switch (action.type) {
		case "SET_TODOS_LIST":
			return {
				...state,
				todosList: action.payload,
			};

		case "SET_FILTERED_TODOS":
			return {
				...state,
				filteredTodos: action.payload,
			};
		case "UPDATE_TODO":
			return {
				...state,
				todosList: state.todosList.map((todo) =>
					todo.id === action.payload.id ? { ...todo, ...action.payload } : todo,
				),
			};
		case "ADD_TODO":
			return {
				...state,
				todosList: [...state.todosList, action.payload],
			};
		case "DELETE_TODO":
			return {
				...state,
				todosList: state.todosList.filter(
					(todo) => todo.id !== action.payload.id,
				),
			};
		case "SET_IS_LOADING":
			return {
				...state,
				isLoading: action.payload,
			};
		default:
			return state;
	}
};
