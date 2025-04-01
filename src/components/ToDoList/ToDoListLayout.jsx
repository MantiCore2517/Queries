/* eslint-disable react/prop-types */
import IMAGES from "../../img/Images";

export const ToDoListLayout = (props) => {
	const { loading, onDelete, onUpdate, filteredTodos } = props;

	return (
		<div className="grid place-items-center">
			<table className="table-fixed w-[600px] grid">
				<tbody className="mt-4">
					{loading ? (
						<tr>
							<td className="h-[32px] w-[32px] flex justify-center"></td>
							<td className="w-[450px]">
								<span className="pl-2">{"Loading..."}</span>
							</td>
						</tr>
					) : (
						filteredTodos.map((todo) => (
							<tr key={todo.id} className="m-2">
								<td className="h-[32px] w-[32px] flex justify-center">
									<input
										onChange={onUpdate.bind(
											this,
											todo,
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
											todo.completed ? "pl-2 line-through" : "pl-2"
										}
									>
										{todo.title}
									</div>
								</td>
								<td className="w-[64px] mx-2 flex justify-center">
									<button
										onClick={onDelete.bind(this, todo)}
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
