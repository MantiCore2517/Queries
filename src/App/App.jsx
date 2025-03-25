import { AppLayout } from "./AppLayout";
import { useEffect, useState } from "react";

export const App = () => {
	const [isDarkTheme, setIsDarkTheme] = useState(true);
	const [message, setMessage] = useState(null);

	useEffect(() => {
		document.body.className = isDarkTheme ? "dark-theme" : "light-theme";
	}, [isDarkTheme]);

	const handleThemeToggle = () => {
		setIsDarkTheme((prev) => !prev);
		document.body.className = isDarkTheme ? "light-theme" : "dark-theme";
	};

	const props = {
		isDarkTheme: isDarkTheme,
		handleThemeToggle: handleThemeToggle,
		messageProps: { message: message, setMessage: setMessage },
	};

	return <AppLayout {...props} />;
};
