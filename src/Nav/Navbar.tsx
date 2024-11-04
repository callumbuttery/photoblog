import React from "react";

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
				<a className="btn btn-ghost text-xl">daisyUI</a>
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
