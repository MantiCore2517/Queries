/* eslint-disable react/prop-types */
import { ToDoList } from "../ToDoList/ToDoList";
import { AppContext } from "../AppContext";

export const AppLayout = (props) => {
	return (
		<AppContext value={props}>
			<ToDoList />
		</AppContext>
	);
};
