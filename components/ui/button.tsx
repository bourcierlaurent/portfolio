import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "outline";
}

export const Button: React.FC<ButtonProps> = ({ variant = "default", className, children, ...props }) => {
	const baseStyle = variant === "default" ? "bg-orange-500 text-white" : "border border-orange-500 text-orange-500";
	return (
		<button
			className={`${baseStyle} ${className} px-6 py-3 rounded-full hover:bg-orange-600 transition-all duration-300`}
			{...props}
		>
			{children}
		</button>
	);
};
