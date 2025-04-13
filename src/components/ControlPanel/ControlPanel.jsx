/* eslint-disable react/prop-types */
import { ControlPanelLayout } from "./ControlPanelLayout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../utils/validation";
import { useTodo } from "../../hooks";
import { useDispatch } from "react-redux";
import { appStatusConfirm, appStatusCustom } from "../../actions/app/actions";
import { searchInputValue } from "../../Actions/search/actions";

export const ControlPanel = () => {
	const dispatch = useDispatch();

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

	const onChange = (event) => dispatch(searchInputValue(event));

	const onSubmit = (data) => {
		addTodoItem({
			title: data.search,
			completed: false,
		});
		reset();
		dispatch(searchInputValue());
		error
			? dispatch(appStatusCustom(errors.search?.message))
			: dispatch(appStatusConfirm);
	};

	const onClick = () => {
		dispatch(appStatusCustom(errors.search?.message));
	};

	const props = {
		onSubmit: handleSubmit(onSubmit),
		search: { ...register("search") },
		onClick: onClick,
		onChange: onChange,
	};

	return <ControlPanelLayout {...props} />;
};
