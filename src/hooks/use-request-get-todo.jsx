import { useEffect, useState } from "react";

export const useRequestGetTodo = (id) => {
	const [todo, setTodos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		setLoading(true);

		fetch(`http://localhost:3000/todos/${id}`)
			.then((response) => response.json())
			.then((data) => {
				setTodos(data);
				setLoading(false);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [refresh]);

	return { todo, loading, refresh, setRefresh };
};
