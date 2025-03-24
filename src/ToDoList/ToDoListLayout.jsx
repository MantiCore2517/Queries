/* eslint-disable react/prop-types */
import IMAGES from "../img/Images";
import { Link } from "react-router-dom";

export const ToDoListLayout = (props) => {
	const { loading, onSubmit, search, onDelete, onUpdate } = props;
	return (
		<div className="grid place-items-center">
			<h1 className="text-2xl font-bold place-self-center mb-1">To Do List</h1>
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
			<table className="table-fixed w-[600px] grid">
				<thead className="mb-5">
					<tr>
						<th className="flex justify-center">
							<input
								className="w-4 h-4 m-2"
								type="checkbox"
								checked={false}
								readOnly
							/>
						</th>
						<th>
							<form onSubmit={onSubmit} onChange={props.onChange}>
								<input
									type="text"
									name="search"
									{...search}
									className="w-[450px] border-1 border-solid border-transparent rounded-md px-2 py-1 bg-darker-bg duration-500 ease-linear transition-colors hover:border-gray-300/70 focus:border-gray-300/70 justify-self-start"
									placeholder="Search..."
								></input>
								<button
									onClick={props.onClick}
									className="mx-2 border-1 w-[64px] border-solid border-transparent rounded-md px-2 py-1 bg-gray-300/90 text-dark-bg font-bold  cursor-pointer shadow-sm shadow-darker-bg duration-500 ease-linear transition-colors hover:border-gray-500 hover:text-darker-bg"
									type="submit"
								>
									Add
								</button>
							</form>
						</th>
					</tr>
				</thead>

				<tbody>
					{loading ? (
						<tr>
							<td className="h-[32px] w-[32px] flex justify-center"></td>
							<td className="w-[450px]">
								<span className="pl-2">{"Loading..."}</span>
							</td>
						</tr>
					) : (
						props.filteredTodos.map((todo) => (
							<tr key={todo.id} className="m-2">
								<td className="h-[32px] w-[32px] flex justify-center">
									<input
										onChange={onUpdate.bind(
											this,
											todo.id,
											"completed",
											!todo.completed,
										)}
										className="m-2"
										type="checkbox"
										checked={todo.completed}
									/>
								</td>
								<td className="w-[450px]">
									<div
										className={
											todo.completed
												? "pl-2 line-through w-[450px] block whitespace-nowrap overflow-hidden overflow-ellipsis"
												: "pl-2 w-[450px] block whitespace-nowrap overflow-hidden overflow-ellipsis"
										}
									>
										<Link
											to={`task/${todo.id}`}
											className="text-blue-400"
										>
											{todo.title}
										</Link>
									</div>
								</td>
								<td className="w-[64px] mx-2 flex justify-center">
									<button
										onClick={onDelete.bind(this, todo.id)}
										className="border-1 border-solid border-transparent rounded-md px-1 py-1 cursor-pointer duration-500 ease-linear transition-shadow hover:shadow-sm hover:shadow-red-800/80"
									>
										<img
											src={IMAGES.delIcon}
											alt="del"
											className="w-4 h-4"
										/>
									</button>
								</td>
							</tr>
						))
					)}
				</tbody>
			</table>
		</div>
	);
};
