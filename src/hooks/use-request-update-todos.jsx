import { useState } from "react";

export const useRequestUpdateTodos = () => {
	const [loading, setLoading] = useState(null);

	const updateTodo = async (id, field, value) => {
		fetch(`http://localhost:3000/todos/${id}`, {
			method: "PATCH",
			body: JSON.stringify({
				[field]: value,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		});
		// .then((response) => response.json())
		// .then((json) => {
		// 	setLoading(false);
		// 	console.log(json);
		// });
	};

	return { updateTodo };
};
