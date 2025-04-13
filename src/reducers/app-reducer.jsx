import { initialState } from "../App/initial-state";
export const appReducer = (state = initialState.app, action) => {
	switch (action.type) {
		case "SET_TITLE":
			return {
				...state,
				title: action.payload,
			};
		case "SET_STATUS":
			return {
				...state,
				status: action.payload,
			};
		default:
			return state;
	}
};
