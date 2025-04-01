import { SystemMessageLayout } from "./SystemMessageLayout";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

export const SystemMessage = () => {
	const [timeoutRef, setTimeoutRef] = useState(null);
	const { messagesList, setMessage, message, status } = useContext(AppContext);

	const messageHandler = () => {
		if (status) {
			clearTimeout(timeoutRef);
			switch (status) {
				case "confirm":
					setMessage({
						type: "confirm",
						message: messagesList.confirm,
					});
					break;
				case "delete":
					setMessage({
						type: "delete",
						message: messagesList.delete,
					});
					break;
				case "update":
					setMessage({
						type: "update",
						message: messagesList.update,
					});
					break;
				default:
					setMessage({
						type: "error",
						message: status,
					});
					break;
			}
			setTimeoutRef(
				setTimeout(() => {
					setMessage(null);
				}, 2000),
			);
		}
	};
	useEffect(() => {
		messageHandler();
	}, [status]);

	const props = {
		message: message,
	};
	return <SystemMessageLayout {...props} />;
};
