import React from "react";
import { Link as RouterLink } from "react-router-dom";

export const Navbar: React.FC = () => {
	const [theme, setTheme] = React.useState("dark");
	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	// initially set the theme and "listen" for changes to apply them to the HTML tag
	React.useEffect(() => {
		document.querySelector("html")?.setAttribute("data-theme", theme);
	}, [theme]);
	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<RouterLink className="btn btn-ghost text-xl" to={"/"}>
					daisyUI
				</RouterLink>
				<RouterLink className="btn btn-ghost text-xl" to={"/Blog"}>
					daisyUI
				</RouterLink>
			</div>
			<div className="flex-none">
				<input
					type="checkbox"
					className="toggle"
					defaultChecked
					onClick={toggleTheme}
				/>
			</div>
		</div>
	);
};
