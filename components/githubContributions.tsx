"use client";
import React, { useState } from "react";

interface Contribution {
	date: string;
	count: number;
}

interface GithubContributionsProps {
	contributions: Contribution[];
}

export const GithubContributions: React.FC<GithubContributionsProps> = ({ contributions }) => {
	const [hoveredContribution, setHoveredContribution] = useState<Contribution | null>(null);

	const getColor = (count: number) => {
		if (count >= 10) return "bg-purple-700";
		if (count >= 5) return "bg-purple-500";
		if (count >= 1) return "bg-purple-300";
		return "bg-gray-200 dark:bg-[#2A323C]";
	};

	return (
		<div className="flex flex-wrap gap-1">
			{contributions.map((contribution) => (
				<div
					key={contribution.date}
					className={`w-5 h-5 ${getColor(contribution.count)} rounded relative`}
					onMouseEnter={() => contribution.count > 0 && setHoveredContribution(contribution)}
					onMouseLeave={() => setHoveredContribution(null)}
				>
					{hoveredContribution?.date === contribution.date && contribution.count > 0 && (
						<div className="absolute flex flex-col justify-center items-center bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-800 font-Poppins text-white text-sm p-4 rounded-xl text-nowrap">
							<span>{new Date(contribution.date).toLocaleDateString("fr-FR").split("/").join(".")}</span>
							<hr className="my-2 border-orange-500/30 w-full" />
							<span>{contribution.count} contributions</span>
						</div>
					)}
				</div>
			))}
		</div>
	);
};
