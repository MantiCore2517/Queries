/* eslint-disable react/prop-types */
import IMAGES from "../img/Images";

export const ToDoLayout = (props) => {
	return (
		<div className="block w-[512px]">
			<div className="grid">
				<h1 className="text-2xl font-bold place-self-center mb-1">
					To Do, id-{`${props.todo.id}`}
				</h1>
				<div className="w-full flex h-10">
					<input
						//onChange={onUpdate.bind(this,todo.id,"completed",!todo.completed,)}
						className="w-4 h-4 place-self-center"
						type="checkbox"
						checked={props.todo.completed}
						readOnly
					/>
					<button
						//onClick={onDelete.bind(this, todo.id)}
						className="ml-3 w-6 h-6 place-self-center border-1 border-solid border-transparent rounded-md  cursor-pointer duration-500 ease-linear transition-shadow hover:shadow-sm hover:shadow-red-800/80"
					>
						<img
							src={IMAGES.delIcon}
							alt="del"
							className="w-4 h-4 place-self-center"
						/>
					</button>

					<button
						className="ml-auto border-1 h-[32px] w-[64px] justify-content-center border-solid border-transparent rounded-md px-2 py-1 bg-gray-300/90 text-dark-bg font-bold  cursor-pointer shadow-sm shadow-darker-bg duration-500 ease-linear transition-colors hover:border-gray-500 hover:text-darker-bg"
						type="submit"
					>
						back
					</button>
				</div>
			</div>
			<div>{props.todo.title}</div>
		</div>
	);
};
