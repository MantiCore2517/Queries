import { useEffect, useState } from "react";

export const useRequestGetTodos = () => {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		fetch("https://jsonplaceholder.typicode.com/todos")
			.then((response) => response.json())
			.then((json) => setTodos(json))
			.finally(() => setLoading(false));
	}, []);

	return { todos, loading };
};
