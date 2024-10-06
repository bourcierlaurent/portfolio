import Image from "next/image";
import { Button } from "@components/ui/button";
import { RatingStars } from "@components/ui/ratingStars";
import { IoCodeWorkingOutline } from "react-icons/io5";
import { GithubServer } from "@components/githubServer";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Skills = [
	{ name: "HTML & CSS", level: 5 },
	{ name: "JavaScript", level: 5 },
	{ name: "TypeScript", level: 4.5 },
	{ name: "React & Next.js", level: 4 },
	{ name: "NodeJS", level: 5 },
	{ name: "Dart/Flutter", level: 3.5 },
];

const testimonials = [
	{
		text: "Laurent a transformé notre site web et a considérablement amélioré notre visibilité en ligne !",
		author: "Alice Dupont",
		initials: "AD",
	},
	{
		text: "Un professionnel dévoué et talentueux. Son expertise a été précieuse pour notre projet.",
		author: "Benjamin Martin",
		initials: "BM",
	},
	{
		text: "Laurent a su écouter nos besoins et les traduire en solutions concrètes et efficaces.",
		author: "Claire Bernard",
		initials: "CB",
	},
	{
		text: "Un partenaire fiable, toujours disponible et prêt à aller au-delà des attentes.",
		author: "David Lefebvre",
		initials: "DL",
	},
	{
		text: "Laurent a fait preuve d'une grande créativité dans la conception de notre site.",
		author: "Émilie Simon",
		initials: "ES",
	},
];

export default function Home() {
	return (
		<main className="container mx-auto w-7xl max-w-90 flex flex-col items-center">
			{/* Hero Section */}
			<section className="flex flex-col items-center justify-center">
				<Image
					src="/images/profile.webp"
					alt="Laurent Bourcier"
					width={400}
					height={400}
					className="w-60 h-60 rounded-full shadow-lg drop-shadow-lg"
				/>
				<h1 className="mt-6 text-4xl font-light font-Caveat lg:text-6xl tracking-widest">Laurent BOURCIER</h1>
				<div className="mt-6 flex flex-col items-center gap-4 lg:flex-row">
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
					Développeur web full-stack dynamique et passionné, je m'engage à transformer des idées innovantes en
					solutions numériques performantes. Fort d'une expérience solide dans la conception et le
					développement d'applications, je suis toujours à la recherche de nouveaux défis pour enrichir mes
					compétences. Mon objectif est de créer des expériences utilisateur intuitives et engageantes tout en
					respectant les meilleures pratiques de développement. Ensemble, faisons passer votre projet au
					niveau supérieur !
				</p>
				<div className="mt-6 flex flex-col items-center gap-4 lg:flex-row">
					<Button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600">
						Engagez-moi
					</Button>
					<Button
						variant="outline"
						className="border border-orange-400 text-orange-400 px-6 py-3 rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300"
					>
						Voir les projets
					</Button>
				</div>
			</section>
			{/* Skills Section */}
			<section className="mt-12 w-full grid grid-cols-2 md:grid-cols-3 gap-6">
				{Skills.map((skill) => (
					<div key={skill.name} className="p-4 text-center">
						<h3 className="text-2xl font-semibold font-Caveat leading-relaxed">{skill.name}</h3>
						{/* Affichage des étoiles */}
						<RatingStars level={skill.level} />
					</div>
				))}
			</section>
			<hr className="my-20 border-orange-500/10 w-full" />
			{/* GitHub Stats Section */}
			<section className="w-full">
				<GithubServer />
			</section>
			<hr className="my-20 border-orange-500/10 w-full" />
			<section id="portfolio" className="w-full">
				<div className="flex justify-between items-center">
					<h2 className="text-3xl font-extrabold mb-6">Projets récents</h2>
					{/* tous mes projets */}
					<a
						href="https://github.com/bourcierlaurent"
						target="_blank"
						rel="noreferrer"
						className="flex items-center gap-2 hover:underline"
					>
						Tous mes projets
						<div className="p-2 bg-black dark:bg-orange-500 text-white text-xl rounded-lg">
							<IoCodeWorkingOutline />
						</div>
					</a>
				</div>

				<div className="flex flex-col gap-20">
					{/* Project 1 - Les Ruchers d'Ambroise */}
					<div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
						<Image
							src="/images/les-ruchers-d-ambroise.webp"
							alt="Les Ruchers d'Ambroise"
							width={600}
							height={600}
							className="w-full h-auto object-cover rounded-xl m-auto"
						/>
						<div className="flex flex-col font-Poppins font-normal">
							<h6 className="text-2xl font-bold">Les Ruchers d&apos;Ambroise</h6>
							<p className="mt-2 leading-relaxed">
								Ce site a été conçu pour mettre en valeur les produits artisanaux des Ruchers
								d'Ambroise, une apiculture raisonnée dans les Hautes-Pyrénées. L'objectif était de créer
								une vitrine numérique attrayante permettant aux clients de découvrir et d'acheter du
								miel et autres produits tout en mettant en avant les valeurs écoresponsables de
								l'entreprise.
							</p>
							<p className="mt-4 leading-relaxed">
								<span className="font-semibold text-orange-500">Technologies utilisées :</span>
								<br />
								Next.js, Tailwind CSS, Zustand, Sharp, React Icons, et bcrypt pour l'authentification
								sécurisée.
							</p>
							<p className="mt-4 leading-relaxed">
								<span className="font-semibold text-orange-500">Défis techniques :</span>
								<br />
								Créer une interface intuitive et réactive tout en optimisant le référencement naturel
								(SEO) pour améliorer la visibilité en ligne.
							</p>
						</div>
					</div>

					{/* Project 2 - 2B Agency */}
					<div className="mt-10 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-20">
						<div className="flex flex-col font-Poppins font-normal">
							<h6 className="text-2xl font-bold">2B Agency</h6>
							<p className="mt-2 leading-relaxed">
								Développement du site pour l'agence 2B, spécialisée dans la création de sites internet
								et le marketing digital. Ce projet visait à créer une plateforme professionnelle pour
								mettre en avant les services de l'agence et attirer de nouveaux clients grâce à une
								présentation moderne et engageante.
							</p>
							<p className="mt-4 leading-relaxed">
								<span className="font-semibold text-orange-500">Technologies utilisées :</span>
								<br />
								Next.js, Tailwind CSS, TypeScript, MySQL, Framer Motion, Lucide React, et Sharp pour
								l'optimisation des images.
							</p>
							<p className="mt-4 leading-relaxed">
								<span className="font-semibold text-orange-500">Défis techniques :</span>
								<br />
								Assurer une navigation fluide et responsive tout en intégrant un back-office simple à
								utiliser pour la gestion de contenu.
							</p>
						</div>
						<Image
							src="/images/2b-agency.webp"
							alt="2B Agency"
							width={600}
							height={600}
							className="w-full h-auto object-cover rounded-xl"
						/>
					</div>

					{/* Project 3 - Arts et Lumière */}
					<div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
						<Image
							src="/images/arts-et-lumiere.webp"
							alt="Arts et Lumière"
							width={600}
							height={600}
							className="w-full h-auto object-cover rounded-xl m-auto"
						/>
						<div className="flex flex-col font-Poppins font-normal">
							<h6 className="text-2xl font-bold">Arts et Lumière</h6>
							<p className="mt-2 leading-relaxed">
								Refonte du site d'un atelier d'iconographie à Lourdes, alliant modernité et respect des
								traditions. Ce projet avait pour but de proposer une expérience immersive tout en
								facilitant l'inscription aux cours et l'achat d'œuvres.
							</p>
							<p className="mt-4 leading-relaxed">
								<span className="font-semibold text-orange-500">Technologies utilisées :</span>
								<br />
								Next.js, Tailwind CSS, TypeScript, et Sharp pour l'optimisation des images, avec des
								animations fluides grâce à Framer Motion.
							</p>
							<p className="mt-4 leading-relaxed">
								<span className="font-semibold text-orange-500">Défis techniques :</span>
								<br />
								Créer une interface utilisateur attrayante tout en assurant une navigation fluide et
								intuitive.
							</p>
						</div>
					</div>
				</div>
			</section>
			<hr className="my-20 border-orange-500/10 w-full" />
			<section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-20">
				<div id="about">
					<h2 className="text-3xl font-bold mb-6 text-center lg:text-left">À Propos de Moi</h2>
					<p className="text-lg max-w-2xl leading-relaxed mx-auto">
						Passionné par le développement web, je suis un développeur full-stack avec une solide expérience
						dans la création d'applications web dynamiques et intuitives. J'aime transformer des idées en
						solutions numériques efficaces. Avec une formation en développement web et une expertise
						diversifiée dans des technologies telles que HTML, CSS, JavaScript, TypeScript, React, Next.js
						et Node.js, je suis capable de concevoir des applications robustes et performantes.
					</p>
					<p className="text-lg max-w-2xl leading-relaxed mx-auto mt-4">
						Mes projets reflètent mon engagement à fournir un travail de qualité et à respecter les délais.
						Je crois fermement en l'importance de la collaboration et de la communication au sein des
						équipes, ce qui me permet de m'adapter facilement à différents environnements de travail. En
						dehors des projets professionnels, je suis constamment en quête de nouveaux défis et
						d'opportunités d'apprentissage pour enrichir mes compétences. Mon objectif est de créer des
						expériences utilisateur intuitives et engageantes, tout en respectant les meilleures pratiques
						de développement. Ensemble, faisons passer votre projet au niveau supérieur !
					</p>
				</div>
				<div id="testimonials">
					<h2 className="text-3xl font-bold text-center lg:text-left">Témoignages</h2>
					<div className="mt-10 flex flex-col space-y-6">
						{testimonials.map((_, i) => (
							<div key={i} className="chat chat-start">
								<div className="chat-image avatar">
									<div className="w-10 rounded-full">
										<div className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-500 text-white font-extrabold font-Poppins">
											{_.initials}
										</div>
									</div>
								</div>
								<div className="chat-bubble text-white">{_.text}</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
