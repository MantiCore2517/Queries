import { initialState } from "../App/initial-state";
export const searchReducer = (state = initialState.search, action) => {
	switch (action.type) {
		case "SET_INPUT_VALUE":
			return {
				...state,
				inputValue: action.payload,
			};

		default:
			return state;
	}
};
