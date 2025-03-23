import { useEffect, useState } from "react";

export const useRequestGetTodos = () => {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		setLoading(true);

		fetch("http://localhost:3000/todos")
			.then((response) => response.json())
			.then((data) => {
				setTodos(data);
				setLoading(false);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [refresh]);

	return { todos, loading, refresh, setRefresh };
};
