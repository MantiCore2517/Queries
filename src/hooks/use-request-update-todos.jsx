import { useState } from "react";
import { ref, update } from "firebase/database";
import { db } from "../firebase";

export const useRequestUpdateTodos = () => {
	const [loading, setLoading] = useState(null);

	const updateTodo = async (id, todo) => {
		const todoDBRef = ref(db, `todos/${id}`);

		await update(todoDBRef, todo);
	};

	return { updateTodo };
};
