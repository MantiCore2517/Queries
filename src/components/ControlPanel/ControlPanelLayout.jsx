/* eslint-disable react/prop-types */
export const ControlPanelLayout = (props) => {
	const { onSubmit, search, onClick, onChange } = props;
	return (
		<div>
			<form onSubmit={onSubmit} onChange={onChange}>
				<input
					type="text"
					name="search"
					{...search}
					className="w-[470px] font-bold border-1 border-solid border-transparent rounded-md px-2 py-1 bg-darker-bg duration-500 ease-linear transition-colors hover:border-gray-300/70 focus:border-gray-300/70 justify-self-start"
					placeholder="Search..."
				></input>
				<button
					onClick={onClick}
					className="mx-2 border-1 w-[64px] border-solid border-transparent rounded-md px-2 py-1 bg-gray-300/90 text-dark-bg font-bold  cursor-pointer shadow-sm shadow-darker-bg duration-500 ease-linear transition-colors hover:border-gray-500 hover:text-darker-bg"
					type="submit"
				>
					Add
				</button>
			</form>
		</div>
	);
};
