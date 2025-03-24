/* eslint-disable react/prop-types */
import { ToDoList } from "../ToDoList/ToDoList";
import { Routes, Route, Link } from "react-router-dom";
import { ToDo } from "../ToDo/ToDo";

export const AppLayout = () => {
	return (
		<Routes>
			<Route path="/" element={<ToDoList />} />
			<Route path="/task/:id" element={<ToDo />} />
		</Routes>
	);
};
