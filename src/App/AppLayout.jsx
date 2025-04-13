/* eslint-disable react/prop-types */
import { ToDoList } from "../components/ToDoList/ToDoList";

import { Title } from "../components/Title/Title";
import { SystemMessage } from "../components/SystemMessage/SystemMessage";
import { ControlPanel } from "../components/ControlPanel/ControlPanel";

export const AppLayout = () => {
	return (
		<>
			<Title />
			<SystemMessage />
			<ControlPanel />
			<ToDoList />
		</>
	);
};
