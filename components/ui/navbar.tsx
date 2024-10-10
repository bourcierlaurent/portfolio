"use client";
import { useEffect, useState } from "react";
import { Switch } from "./switch";

export const Navbar = () => {
	const [darkMode, setDarkMode] = useState(true);

	const toggleTheme = () => {
		const htmlElement = document.documentElement;
		setDarkMode(!darkMode);
		htmlElement.classList.toggle("dark");
	};

	useEffect(() => {
		const htmlElement = document.documentElement;
		if (!htmlElement.classList.contains("dark")) toggleTheme();
	}, []);

	return (
		<header className="container mx-auto flex justify-end items-center p-6">
			<Switch checked={darkMode} onChange={toggleTheme} />
		</header>
	);
};
