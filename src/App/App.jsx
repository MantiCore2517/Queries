import { AppLayout } from "./AppLayout";
import { useState } from "react";

const confirmMessage = {
	message: "Задача была успешно создана",
	type: "confirm",
};
const deleteMessage = {
	message: "Задача успешно удалена",
	type: "delete",
};
const updateMessage = {
	message: "Задача успешно обновлена",
	type: "update",
};

export const App = () => {
	const [message, setMessage] = useState(null);
	const [timeoutRef, setTimeoutRef] = useState(null);

	const messageHandler = (message) => {
		clearTimeout(timeoutRef);
		setMessage(message);
		setTimeoutRef(
			setTimeout(() => {
				setMessage(null);
			}, 2000),
		);
	};

	const props = {
		message: message,
		messages: {
			confirm: confirmMessage,
			delete: deleteMessage,
			update: updateMessage,
		},
		messageHandler: messageHandler,
	};

	return <AppLayout {...props} />;
};
