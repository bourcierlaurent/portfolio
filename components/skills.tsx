import { RatingStars } from "@components/ui/ratingStars";
const skills = [
	{ name: "HTML & CSS", level: 5 },
	{ name: "JavaScript", level: 5 },
	{ name: "TypeScript", level: 4.5 },
	{ name: "React & Next.js", level: 4 },
	{ name: "NodeJS", level: 5 },
	{ name: "Dart/Flutter", level: 3.5 },
];

export const Skills = () => {
	return (
		<section className="mt-12 mx-auto w-7xl max-w-90 grid grid-cols-2 md:grid-cols-3 gap-6">
			{skills.map((skill) => (
				<div key={skill.name} className="flex flex-col items-center">
					<span className="text-2xl font-semibold font-Caveat leading-relaxed">{skill.name}</span>
					<RatingStars level={skill.level} />
				</div>
			))}
		</section>
	);
};
