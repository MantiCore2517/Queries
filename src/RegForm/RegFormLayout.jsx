/* eslint-disable react/prop-types */

export const RegFormLayout = (props) => {
	return (
		<>
			<div className="grid h-20 place-items-center ">
				{props.errors.email && (
					<div className=" text-red-400  ">{props.errors.email}</div>
				)}
				{props.errors.password && (
					<div className=" text-red-400 ">{props.errors.password}</div>
				)}
				{props.errors.confirmPassword && (
					<div className=" text-red-400 ">{props.errors.confirmPassword}</div>
				)}
				{props.confirmMessage && (
					<span className="text-green-400">{props.confirmMessage}</span>
				)}
			</div>
			<form
				className="grid gap-2 w-[200px] place-self-center"
				onSubmit={props.onSubmit}
			>
				<input
					autoFocus
					className="border-1 border-solid border-transparent rounded-md px-2 py-1 bg-darker-bg duration-500 ease-linear transition-colors hover:border-gray-300/70"
					name="email"
					type="text"
					placeholder="Почта"
					{...props.email}
				/>
				<input
					className="border-1 border-solid border-transparent rounded-md px-2 py-1 bg-darker-bg duration-500 ease-linear transition-colors hover:border-gray-300/70"
					name="password"
					type="password"
					placeholder="Пароль"
					{...props.password}
				/>
				<input
					className="border-1 border-solid border-transparent rounded-md px-2 py-1 bg-darker-bg duration-500 ease-linear transition-colors hover:border-gray-300/70"
					name="confirmPassword"
					type="password"
					placeholder="Повторите пароль"
					{...props.confirmPassword}
				/>
				<button
					className="border-1 border-solid border-transparent rounded-md px-2 py-1 bg-gray-300/90 text-dark-bg font-bold  cursor-pointer shadow-sm shadow-darker-bg duration-500 ease-linear transition-colors hover:border-gray-500 hover:text-darker-bg"
					type="submit"
				>
					Зарегистрироваться!
				</button>
			</form>
		</>
	);
};
