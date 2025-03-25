/* eslint-disable react/prop-types */

import { ToDoList } from "../components/ToDoList/ToDoList";
import { Routes, Route } from "react-router-dom";
import { ToDo } from "../components/ToDo/ToDo";
import { NotFound } from "../components/404/NotFound";
import { Switch } from "@mui/material";

export const AppLayout = (props) => {
	return (
		<>
			<div className="mt-5 w-[600px] flex h-10">
				<Switch
					className="fixed ml-auto"
					checked={props.isDarkTheme}
					onChange={props.handleThemeToggle} // Обработчик переключения
				/>
			</div>
			<h1 className="text-2xl font-bold place-self-center mb-1">TDL trainig app</h1>
			<Routes>
				<Route path="/" element={<ToDoList {...props.messageProps} />} />
				<Route path="/task/:id" element={<ToDo {...props.messageProps} />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};
