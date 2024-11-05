import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	//remove strict mode down the line, causing API calls to fire twice
	<StrictMode>
		<App />
	</StrictMode>
);
