import { initialState } from "../App/initial-state";

export const messagesReducer = (state = initialState.messages, action) => {
	switch (action.type) {
		case "SET_MESSAGES_LIST":
			return {
				...state,
				messagesList: action.payload,
			};
		case "SET_MESSAGE":
			return {
				...state,
				message: action.payload,
			};
		case "SET_ERROR":
			return {
				...state,
				error: action.payload,
			};
		case "SET_TIMEOUT_REF":
			return {
				...state,
				timeoutRef: action.payload,
			};

		default:
			return state;
	}
};
