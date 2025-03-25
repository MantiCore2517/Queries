import { Link } from "react-router-dom";

export const NotFoundLayout = () => {
	return (
		<div className="grid place-items-center">
			<h1 className="text-2xl font-bold place-self-center mb-1">404 Not Found</h1>
			<div className="grid h-10 place-items-center ">
				<span className="text-red-400">
					Кажется такой страницы не существует...
				</span>
			</div>
			<Link to="/">
				<button className="mt-2 border-1 h-[32px] w-[64px] justify-content-center border-solid border-transparent rounded-md px-2 py-1 bg-gray-300/90 text-dark-bg font-bold  cursor-pointer shadow-sm shadow-darker-bg duration-500 ease-linear transition-colors hover:border-gray-500 hover:text-darker-bg">
					Main
				</button>
			</Link>
		</div>
	);
};
