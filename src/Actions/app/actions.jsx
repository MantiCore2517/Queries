import * as config from "../../config.json";

export const appTitle = { type: "SET_TITLE", payload: config.APP_TITLE };
export const appStatusDelete = { type: "SET_STATUS", payload: "delete" };
export const appStatusUpdate = { type: "SET_STATUS", payload: "update" };
export const appStatusConfirm = { type: "SET_STATUS", payload: "confirm" };
export const appStatusCustom = (status) => ({
	type: "SET_STATUS",
	payload: status,
});
