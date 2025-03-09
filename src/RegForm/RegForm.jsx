import { RegFormLayout } from "./RegFormLayout";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";

const sendFormData = (formData) => {
	console.log(formData);
};

const formSchema = yup.object().shape({
	email: yup
		.string()
		.email("Email должен быть валидным!")
		.required("Email обязателен!"),
	password: yup
		.string()
		.required("Пароль обязателен!")
		.min(5, "Пароль должен быть длиннее 5 символов!")
		.max(8, "Пароль должен быть короче 8 символов!"),
	confirmPassword: yup
		.string()
		.required("Подтверждение пароля обязательно!")
		.oneOf([yup.ref("password")], "Пароли должны совпадать!"),
});

export const RegForm = () => {
	const [confirmMessage, setConfirmMessage] = useState(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
		mode: "onChange",
		resolver: yupResolver(formSchema),
	});

	const onSubmit = (formData) => {
		sendFormData(formData);
		reset();
		setConfirmMessage("Вы успешно зарегистрировались!");
	};

	const props = {
		email: { ...register("email") },
		password: { ...register("password") },
		confirmPassword: { ...register("confirmPassword") },
		onSubmit: handleSubmit(onSubmit),

		errors: {
			email: errors.email?.message,
			password: errors.password?.message,
			confirmPassword: errors.confirmPassword?.message,
		},

		confirmMessage: confirmMessage,
	};

	return <RegFormLayout {...props} />;
};
