import React from "react";
import { Link as RouterLink } from "react-router-dom";

export const Navbar: React.FC = () => {
	const [theme, setTheme] = React.useState("light");
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
					Home
				</RouterLink>
				<RouterLink className="btn btn-ghost text-xl" to={"/blog"}>
					Blog
				</RouterLink>
				<RouterLink className="btn btn-ghost text-xl" to={"/about"}>
					About
				</RouterLink>
			</div>
			<label className="flex cursor-pointer gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<circle cx="12" cy="12" r="5" />
					<path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
				</svg>
				<input
					type="checkbox"
					value="synthwave"
					className="toggle theme-controller"
					onClick={toggleTheme}
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
				</svg>
			</label>
		</div>
	);
};
