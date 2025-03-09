import { ToDoListLayout } from "./ToDoListLayout";
import { useRequestGetTodos } from "../hooks";

export const ToDoList = () => {
	const { todos, loading } = useRequestGetTodos();

	const props = { todos, loading };

	return <ToDoListLayout {...props} />;
};
