import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App/App.jsx";
import { BrowserRouter } from "react-router-dom";

const basename = "/tasks-list";

if (!window.location.pathname.includes(basename)) {
	window.history.replaceState("", "", basename + window.location.pathname);
}

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter basename={basename}>
			<App />
		</BrowserRouter>
	</StrictMode>,
);
