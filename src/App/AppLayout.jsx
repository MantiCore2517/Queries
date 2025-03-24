/* eslint-disable react/prop-types */
import { ToDoList } from "../ToDoList/ToDoList";
import { Routes, Route } from "react-router-dom";
import { ToDo } from "../ToDo/ToDo";
import { NotFound } from "../404/NotFound";

export const AppLayout = () => {
	return (
		<Routes>
			<Route path="/" element={<ToDoList />} />
			<Route path="/task/:id" element={<ToDo />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
