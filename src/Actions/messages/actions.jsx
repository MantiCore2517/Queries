import { todosAPI } from "../../API/todosAPI";

const mlist = async () => {
	const response = await todosAPI.fetchAllMessages();
	return response;
};

const transformMessageList = (list) => {
	const messages = {};
	list.forEach((message) => {
		messages[message.type] = message.message;
	});
	return messages;
};

export const setMessagesList = () => (dispatch) =>
	mlist().then((list) =>
		dispatch({
			type: "SET_MESSAGES_LIST",
			payload: transformMessageList(list),
		}),
	);

export const setMessageConfirm = () => (dispatch) =>
	mlist().then((list) =>
		dispatch({
			type: "SET_MESSAGE",
			payload: { type: "confirm", message: transformMessageList(list).confirm },
		}),
	);

export const setMessageUpdate = () => (dispatch) =>
	mlist().then((list) =>
		dispatch({
			type: "SET_MESSAGE",
			payload: { type: "update", message: transformMessageList(list).update },
		}),
	);

export const setMessageDelete = () => (dispatch) =>
	mlist().then((list) =>
		dispatch({
			type: "SET_MESSAGE",
			payload: { type: "delete", message: transformMessageList(list).delete },
		}),
	);
export const setMessageError = (message) => ({
	type: "SET_MESSAGE",
	payload: { type: "error", message },
});

export const clearMessageField = () => ({
	type: "SET_MESSAGE",
	payload: null,
});

const test = async (dispatch) => {
	const toref = setTimeout(() => {
		dispatch(clearMessageField());
		dispatch({ type: "SET_STATUS", payload: { type: null, id: null } });
	}, 2000);
	return toref;
};

export const setMessageTimeoutRef = (dispatch) => ({
	type: "SET_TIMEOUT_REF",
	payload: dispatch ? test(dispatch) : null,
});

export const setMessageTimeoutRef1 = () => (dispatch) =>
	test(dispatch).then((toref) =>
		dispatch({
			type: "SET_TIMEOUT_REF",
			payload: toref,
		}),
	);
