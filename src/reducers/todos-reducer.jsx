import { initialState } from "../App/initial-state";

export const todosReducer = (state = initialState.todos, action) => {
	switch (action.type) {
		// case "ADD_TODO":
		// 	return {
		// 		...state,
		// 		todos: [...state.todos, action.payload],
		// 	};
		// case "REMOVE_TODO":
		// 	return {
		// 		...state,
		// 		todos: state.todos.filter((todo) => todo.id !== action.payload),
		// 	};
		// case "TOGGLE_TODO":
		// 	return {
		// 		...state,
		// 		todos: state.todos.map((todo) =>
		// 			todo.id === action.payload
		// 				? { ...todo, completed: !todo.completed }
		// 				: todo,
		// 		),
		// 	};
		// case "SET_TODOS":
		// 	return {
		// 		...state,
		// 		todos: action.payload,
		// 	};
		default:
			return state;
	}
};
