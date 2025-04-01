import { AppLayout } from "./AppLayout";
import { useState, useEffect } from "react";
import config from "../config.json";
import { useMessage } from "../hooks";

export const App = () => {
	const [message, setMessage] = useState(null);
	const [status, setStatus] = useState(null);
	const { messagesList } = useMessage();
	const title = config.APP_TITLE;

	const messages = {};
	messagesList.forEach((message) => {
		messages[message.type] = message.message;
	});

	useEffect(() => {
		setStatus(null);
	}, [status]);

	const props = {
		message: message,
		status: status,
		messagesList: messages,
		setMessage: setMessage,
		title: title,
		setStatus: setStatus,
	};

	return <AppLayout {...props} />;
};
