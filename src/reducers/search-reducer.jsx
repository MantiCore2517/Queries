import { initialState } from "../App/initial-state";
export const searchReducer = (state = initialState.search, action) => {
	switch (action.type) {
		case "SET_INPUT_VALUE":
			return {
				...state,
				inputValue: action.payload,
			};
		case "SET_DEBOUNCED_VALUE":
			return {
				...state,
				searchResults: action.payload,
			};
		case "SET_SEARCH_LOADING":
			return {
				...state,
				isLoading: action.payload,
			};
		default:
			return state;
	}
};
