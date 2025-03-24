import { ToDoLayout } from "./ToDoLayout";
import { useRequestGetTodo } from "../hooks";
import { useParams } from "react-router-dom";

export const ToDo = () => {
	const params = useParams();
	const { todo, loading } = useRequestGetTodo(params.id);
	return <ToDoLayout todo={todo} />;
};
