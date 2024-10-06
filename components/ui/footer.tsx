import React from "react";

export const Footer: React.FC = () => {
	return (
		<footer className="py-6 px-10 font-Caveat text-sm text-center lg:text-right">
			<span>&copy; {new Date().getFullYear()} - laurent bourcier</span>
		</footer>
	);
};
