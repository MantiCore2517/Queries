import * as yup from "yup";

export const formSchema = yup.object().shape({
	search: yup
		.string()
		.required("Нельзя добавить пустую задачу!")
		.min(5, "Название задачи должно содержать минимум 5 символов!")
		.max(100, "Название задачи не может превышать 100 символов!"),
});
