import { useState } from "react";
import { ref, remove } from "firebase/database";
import { db } from "../firebase";

export const useRequestDeleteTodos = () => {
	const [deleteTodo, setDeleteTodo] = useState(null);

	const deleteTodoById = async (id) => {
		const todoDBRef = ref(db, `todos/${id}`);

		await remove(todoDBRef);
	};

	return { deleteTodo, deleteTodoById };
};
