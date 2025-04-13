import { SystemMessageLayout } from "./SystemMessageLayout";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { appStatusSelector, appStatusIdSelector } from "../../selectors/app";
import { messagesGetMessage, messagesGetTimeoutRef } from "../../selectors/messages";
import { useDispatch } from "react-redux";
import {
	setMessageConfirm,
	setMessageDelete,
	setMessageUpdate,
	setMessageError,
	setMessageTimeoutRef,
} from "../../Actions/messages/actions";

export const SystemMessage = () => {
	const dispatch = useDispatch();
	const status = useSelector(appStatusSelector);
	const statusId = useSelector(appStatusIdSelector);
	const message = useSelector(messagesGetMessage);
	const timeoutRef = useSelector(messagesGetTimeoutRef);
	//console.log("SystemMessage", status, message, timeoutRef, statusId);

	useEffect(() => {
		if (timeoutRef !== null) {
			clearTimeout(timeoutRef);
			dispatch(setMessageTimeoutRef());
		}
	}, [timeoutRef, dispatch]);

	const messageHandler = () => {
		if (status) {
			if (timeoutRef !== null) {
				clearTimeout(timeoutRef);
				dispatch(setMessageTimeoutRef());
			}
			switch (status) {
				case "confirm":
					dispatch(setMessageConfirm());
					break;
				case "delete":
					dispatch(setMessageDelete());
					break;
				case "update":
					dispatch(setMessageUpdate());
					break;
				default:
					dispatch(setMessageError(status));
					break;
			}
			dispatch(setMessageTimeoutRef(dispatch));
		}
	};

	useEffect(() => {
		statusId && messageHandler();
	}, [statusId]);

	const props = {
		message: message,
	};
	return <SystemMessageLayout {...props} />;
};
