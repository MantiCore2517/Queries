import { useState } from "react";
import { ref, push } from "firebase/database";
import { db } from "../firebase";

export const useRequestAddTodos = () => {
	const [addStatus, setAddStatus] = useState(false);
	const addTodo = async (todo) => {
		const todoDBRef = ref(db, "todos");

		await push(todoDBRef, todo);
	};

	return { addTodo };
};
