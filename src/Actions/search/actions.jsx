export const searchInputValue = (event) => ({
	type: "SET_INPUT_VALUE",
	payload: event ? event.target.value : "",
});
