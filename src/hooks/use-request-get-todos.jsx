import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

export const useRequestGetTodos = () => {
	const [todos, setTodos] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const todoDBRef = ref(db, "todos");

		return onValue(todoDBRef, (snapshot) => {
			const data = snapshot.val() || {};
			setTodos(data);
			setLoading(false);
		});
	}, []);

	return { todos, loading };
};
