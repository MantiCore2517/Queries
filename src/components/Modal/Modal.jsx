/* eslint-disable react/prop-types */
import { ModalLayout } from "./ModalLayout";

export const Modal = (props) => {
	const propsForLayout = {
		isOpen: props.isOpen,
		onClose: props.onClose,
		onDelete: props.onDelete,
		idToDel: props.idToDel,
	};
	return <ModalLayout {...propsForLayout} />;
};
