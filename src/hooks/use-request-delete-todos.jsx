import { useState } from "react";

export const useRequestDeleteTodos = () => {
	const [deleteTodo, setDeleteTodo] = useState(null);

	const deleteTodoById = async (id) => {
		fetch(`http://localhost:3000/todos/${id}`, {
			method: "DELETE",
		});
	};

	return { deleteTodo, deleteTodoById };
};
