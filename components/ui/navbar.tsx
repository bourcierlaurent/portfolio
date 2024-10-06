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
			{/* <div className="text-2xl font-bold">LB</div>
			<nav className="space-x-6 text-lg">
				<a href="#about" className="hover:text-orange-500">
					À Propos
				</a>
				<a href="#portfolio" className="hover:text-orange-500">
					Portfolio
				</a>
				<a href="#contact" className="hover:text-orange-500">
					Contact
				</a>
			</nav> */}
			<Switch checked={darkMode} onChange={toggleTheme} />
		</header>
	);
};
