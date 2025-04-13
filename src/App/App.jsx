import { AppLayout } from "./AppLayout";
import { useState, useEffect } from "react";
import { useMessage } from "../hooks";
import { useDebounce } from "use-debounce";

export const App = () => {
	const [message, setMessage] = useState(null);
	const [status, setStatus] = useState(null);
	const [inputValue, setInputValue] = useState("");
	const [debouncedValue] = useDebounce(inputValue, 500);
	const { messagesList } = useMessage();

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
		setStatus: setStatus,
		setInputValue: setInputValue,
		debouncedValue: debouncedValue,
	};

	return <AppLayout {...props} />;
};
