"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface Contribution {
	date: string;
	count: number;
}

interface GithubContributionsProps {
	contributions: Contribution[];
}

export const GithubContributions: React.FC<GithubContributionsProps> = ({ contributions }) => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const [hasAnimated, setHasAnimated] = useState(false);
	const containerRef = useRef(null);
	const isInView = useInView(containerRef, { amount: 0.5 });

	const getColor = (count: number) => {
		if (count >= 10) return "bg-purple-700";
		if (count >= 5) return "bg-purple-500";
		if (count >= 1) return "bg-purple-300";
		return "bg-gray-200 dark:bg-[#2A323C]";
	};

	const variants = {
		initial: { scale: 1, y: 0, opacity: 0 },
		animated: (i: number) => ({
			scale: [1, 1.3, 1],
			y: [0, -10, 0],
			opacity: 1,
			transition: {
				delay: Math.random() * 1 + 0.5,
				duration: 0.6,
				ease: "easeInOut",
			},
		}),
	};

	useEffect(() => {
		if (isInView && !hasAnimated) {
			setHasAnimated(true);
		}
	}, [isInView, hasAnimated]);

	return (
		<div ref={containerRef} className="flex flex-wrap gap-1">
			{contributions.map((contribution, index) => (
				<motion.div
					key={contribution.date}
					className={`w-5 h-5 ${getColor(contribution.count)} rounded relative`}
					variants={variants}
					initial="initial"
					animate={hasAnimated ? "animated" : "initial"}
					custom={index}
					onMouseEnter={() => setHoveredIndex(index)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					{hoveredIndex === index && contribution.count > 0 && (
						<div className="absolute flex flex-col justify-center items-center bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-800 font-Poppins text-white text-sm p-4 rounded-xl text-nowrap">
							<span>{new Date(contribution.date).toLocaleDateString("fr-FR").split("/").join(".")}</span>
							<hr className="my-2 border-orange-500/30 w-full" />
							<span>{contribution.count} contributions</span>
						</div>
					)}
				</motion.div>
			))}
		</div>
	);
};
