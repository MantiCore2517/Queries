/* eslint-disable react/prop-types */
import { ToDoList } from "../components/ToDoList/ToDoList";
import { AppContext } from "../AppContext";
import { Title } from "../components/Title/Title";
import { SystemMessage } from "../components/SystemMessage/SystemMessage";
import { ControlPanel } from "../components/ControlPanel/ControlPanel";

export const AppLayout = (props) => {
	return (
		<>
			<AppContext value={props}>
				<Title />
				<SystemMessage />
				<ControlPanel />
				<ToDoList />
			</AppContext>
		</>
	);
};
