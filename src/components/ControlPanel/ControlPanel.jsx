/* eslint-disable react/prop-types */
import { ControlPanelLayout } from "./ControlPanelLayout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../utils/validation";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { useTodo } from "../../hooks";

export const ControlPanel = () => {
	const { setStatus, setInputValue } = useContext(AppContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: { search: "" },
		resolver: yupResolver(formSchema),
		mode: "onSubmit",
	});
	const { addTodoItem, error } = useTodo();

	const onChange = (event) => setInputValue(event.target.value || "");

	const onSubmit = (data) => {
		addTodoItem({
			title: data.search,
			completed: false,
		});
		reset();
		setInputValue("");
		error ? setStatus(errors.search?.message) : setStatus("confirm");
	};

	const onClick = () => {
		setStatus(errors.search?.message);
	};

	const props = {
		onSubmit: handleSubmit(onSubmit),
		search: { ...register("search") },
		onClick: onClick,
		onChange: onChange,
	};

	return <ControlPanelLayout {...props} />;
};
