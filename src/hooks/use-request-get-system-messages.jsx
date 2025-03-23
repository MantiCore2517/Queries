import { useEffect, useState } from "react";

export const useRequestGetSystemMessages = () => {
	const [messages, setMessages] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3000/messages")
			.then((response) => response.json())
			.then((data) => {
				setMessages(data);
			});
	}, []);

	return { messages };
};
