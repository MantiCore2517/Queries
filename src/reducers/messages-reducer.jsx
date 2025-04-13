import { initialState } from "../App/initial-state";

export const messagesReducer = (state = initialState.messages, action) => {
	switch (action.type) {
		case "ADD_MESSAGE":
			return {
				...state,
				messages: [...state, action.payload],
			};
		case "REMOVE_MESSAGE":
			return {
				...state,
				messages: state.filter((message) => message.id !== action.payload),
			};
		default:
			return state;
	}
};
