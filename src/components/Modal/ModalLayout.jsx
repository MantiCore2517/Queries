/* eslint-disable react/prop-types */
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 300,
	bgcolor: "#3a3939",
	boxShadow: 24,
	borderRadius: 3,
	paddingTop: 2,
	paddingX: 2,
};

export const ModalLayout = (props) => {
	const { isOpen, onClose, onDelete } = props;
	return (
		<Modal
			open={isOpen}
			onClose={onClose.bind(this, false)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<h2 className="justify-self-center font-semibold text-md mb-5">
					Do you really want delete this?
				</h2>
				<div className="flex justify-center my-4 mx-6">
					<button
						onClick={onClose.bind(this, false)}
						className="border-1 h-[32px] w-[64px] justify-content-center border-solid border-transparent rounded-md px-2 py-1 bg-gray-300/90 text-dark-bg font-bold  cursor-pointer shadow-sm shadow-darker-bg duration-500 ease-linear transition-colors hover:border-gray-500 hover:text-darker-bg"
					>
						No
					</button>
					<button
						onClick={onDelete.bind(this, props.idToDel)}
						className="ml-auto border-1 h-[32px] w-[64px] justify-content-center border-solid border-transparent rounded-md px-2 py-1 bg-gray-300/90 text-dark-bg font-bold  cursor-pointer shadow-sm shadow-darker-bg duration-500 ease-linear transition-colors hover:border-gray-500 hover:text-darker-bg"
					>
						Yes
					</button>
				</div>
			</Box>
		</Modal>
	);
};
