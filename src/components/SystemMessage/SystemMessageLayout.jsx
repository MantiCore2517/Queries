/* eslint-disable react/prop-types */
export const SystemMessageLayout = (props) => {
	const { message } = props;
	return (
		<div className="grid h-10 place-items-center ">
			{message && message.type === "error" && (
				<div className=" text-red-400  ">{message.message}</div>
			)}
			{message && message.type === "confirm" && (
				<span className="text-green-400">{message.message}</span>
			)}
			{message && message.type === "delete" && (
				<span className="text-amber-600">{message.message}</span>
			)}
			{message && message.type === "update" && (
				<span className="text-amber-300">{message.message}</span>
			)}
		</div>
	);
};
