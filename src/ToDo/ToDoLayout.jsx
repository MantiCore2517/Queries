/* eslint-disable react/prop-types */
import IMAGES from "../img/Images";
import { Link } from "react-router-dom";

export const ToDoLayout = (props) => {
	const { onDelete, onUpdate } = props;
	return (
		<div className="block w-[512px]">
			<div className="grid">
				<h1 className="text-2xl font-bold place-self-center mb-1">
					To Do, id-{`${props.todo.id}`}
				</h1>
				<div className="grid h-10 place-items-center ">
					{props.message && props.message.type === "error" && (
						<div className=" text-red-400  ">{props.message.message}</div>
					)}
					{props.message && props.message.type === "confirm" && (
						<span className="text-green-400">{props.message.message}</span>
					)}
					{props.message && props.message.type === "delete" && (
						<span className="text-amber-600">{props.message.message}</span>
					)}
					{props.message && props.message.type === "update" && (
						<span className="text-amber-300">{props.message.message}</span>
					)}
				</div>
				<div className="w-full flex h-10">
					<input
						onChange={onUpdate.bind(
							this,
							props.todo.id,
							"completed",
							!props.todo.completed,
						)}
						className="w-4 h-4 place-self-center"
						type="checkbox"
						checked={props.todo.completed || false}
					/>
					<button
						onClick={onDelete.bind(this, props.todo.id)}
						className="ml-3 w-6 h-6 place-self-center border-1 border-solid border-transparent rounded-md  cursor-pointer duration-500 ease-linear transition-shadow hover:shadow-sm hover:shadow-red-800/80"
					>
						<img
							src={IMAGES.delIcon}
							alt="del"
							className="w-4 h-4 place-self-center"
						/>
					</button>
					<Link to="/" className="ml-auto ">
						<button
							className="border-1 h-[32px] w-[64px] justify-content-center border-solid border-transparent rounded-md px-2 py-1 bg-gray-300/90 text-dark-bg font-bold  cursor-pointer shadow-sm shadow-darker-bg duration-500 ease-linear transition-colors hover:border-gray-500 hover:text-darker-bg"
							type="submit"
						>
							back
						</button>
					</Link>
				</div>
			</div>
			<div className={props.todo.completed ? "pl-2 line-through" : "pl-2"}>
				{props.todo.title}
			</div>
		</div>
	);
};
