import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "@components/typeWriter";
import { HireMe } from "@components/ui/hireMe";

export const Hero = () => {
	return (
		<section className="mx-auto w-7xl max-w-90 flex flex-col items-center justify-center">
			<Image
				src="/images/profile.webp"
				alt="Profile"
				width={500}
				height={500}
				className="w-60 h-60 bg-orange-500 rounded-full shadow-lg drop-shadow-lg"
			/>
			<h1 className="mt-6 text-4xl font-light font-Caveat lg:text-6xl tracking-widest">
				<Typewriter text="Laurent BOURCIER" />
			</h1>
			<div className="mt-6 flex flex-col items-center gap-4 md:flex-row">
				<a
					href="https://github.com/bourcierlaurent"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 font-Poppins font-medium tracking-wide bg-gray-800 text-white px-4 py-2 rounded transition hover:bg-gray-900"
				>
					<FaGithub className="text-xl" />
					GitHub
				</a>
				<a
					href="https://www.linkedin.com/in/laurent-bourcier-1217b1263/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 font-Poppins font-medium tracking-wide bg-blue-700 text-white px-4 py-2 rounded transition hover:bg-blue-600"
				>
					<FaLinkedin className="text-xl" />
					LinkedIn
				</a>
			</div>
			<p className="mt-6 text-md lg:text-lg max-w-4xl">
				Développeur web full-stack dynamique et passionné, je m&apos;engage à transformer des idées innovantes
				en solutions numériques performantes. Fort d&apos;une expérience solide dans la conception et le
				développement d&apos;applications, je suis toujours à la recherche de nouveaux défis pour enrichir mes
				compétences. Mon objectif est de créer des expériences utilisateur intuitives et engageantes tout en
				respectant les meilleures pratiques de développement. Ensemble, faisons passer votre projet au niveau
				supérieur !
			</p>

			<HireMe />
		</section>
	);
};
