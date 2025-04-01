import { todosAPI } from "../API/todosAPI";
import { useEffect, useState } from "react";

export const useMessage = () => {
	const [messagesList, setMessagesList] = useState([]);

	const getMessagesList = async () => {
		try {
			const messages = await todosAPI.fetchAllMessages();
			setMessagesList(messages);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getMessagesList();
	}, []);

	return {
		messagesList,
	};
};
