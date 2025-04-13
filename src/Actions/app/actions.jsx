import * as config from "../../config.json";

const id = () => Math.random().toString(36).substring(2, 8);

export const appTitle = { type: "SET_TITLE", payload: config.APP_TITLE };
export const appStatusDelete = {
	type: "SET_STATUS",
	payload: { id: id(), type: "delete" },
};
export const appStatusUpdate = {
	type: "SET_STATUS",
	payload: { id: id(), type: "update" },
};
export const appStatusConfirm = {
	type: "SET_STATUS",
	payload: { id: id(), type: "confirm" },
};
export const appStatusCustom = (status) => ({
	type: "SET_STATUS",
	payload: { id: id(), type: status },
});
