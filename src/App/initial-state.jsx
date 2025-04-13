export const initialState = {
	todos: {
		todosList: [],
		isLoading: false,
		error: null,
		filteredTodos: [],
	},
	messages: {
		messagesList: {},
		message: null,
		error: null,
		timeoutRef: null,
	},
	search: {
		inputValue: "",
		debouncedValue: "",
	},
	app: {
		title: "",
		status: { type: null, id: null },
	},
};
