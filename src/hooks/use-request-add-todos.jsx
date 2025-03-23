import { useState } from "react";

export const useRequestAddTodos = () => {
	const [addStatus, setAddStatus] = useState(false);

	const addTodo = async (todo) => {
		fetch("http://localhost:3000/todos", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(todo),
		});
		// .then((response) => response.json())
		// .then((data) => {
		// 	setAddStatus(data);
		// })
		// .finally(() => {s
		// 	setAddStatus(false);
		// });
	};

	return { addTodo };
};
