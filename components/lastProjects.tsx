import Image from "next/image";
import { IoCodeWorkingOutline } from "react-icons/io5";

export const LastProjects = () => {
	return (
		<section id="projects" className="mt-12 mx-auto w-7xl max-w-90">
			<div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-10">
				<h3 className="text-4xl mb-4 lg:mb-0">Projets récents</h3>
				<a
					href="https://github.com/bourcierlaurent"
					target="_blank"
					rel="noreferrer"
					className="flex items-center gap-4"
				>
					<span className="font-Caveat tracking-wider font-extralight text-2xl hover:underline">
						Voir tous mes projets
					</span>
					<div className="p-2 bg-orange-500 text-white rounded-lg transition-colors duration-200">
						<IoCodeWorkingOutline />
					</div>
				</a>
			</div>

			<div className="grid gap-6">
				{/* Project 1 - Les Ruchers d'Ambroise */}
				<div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md drop-shadow-md flex flex-col lg:flex-row items-center gap-8">
					<div className="w-full lg:w-1/3 flex-shrink-0">
						<Image
							src="/images/les-ruchers-d-ambroise.webp"
							alt="Les Ruchers d'Ambroise"
							width={400}
							height={400}
							className="mx-auto rounded-lg object-cover shadow-md"
						/>
					</div>
					<div className="w-full lg:w-2/3 text-left">
						<h4 className="text-2xl font-bold mb-2">Les Ruchers d&apos;Ambroise</h4>
						<p className="leading-relaxed mb-4">
							Ce site a été conçu pour mettre en valeur les produits artisanaux des Ruchers d'Ambroise,
							une apiculture raisonnée dans les Hautes-Pyrénées. L'objectif était de créer une vitrine
							numérique attrayante permettant aux clients de découvrir et d'acheter du miel et autres
							produits tout en mettant en avant les valeurs écoresponsables de l'entreprise.
						</p>
						<p className="leading-relaxed">
							<span className="font-semibold text-orange-500">Technologies utilisées :</span>
							<br /> Next.js, Tailwind CSS, Zustand, Sharp, React Icons, et bcrypt pour l'authentification
							sécurisée.
						</p>
					</div>
				</div>

				{/* Project 2 - 2B Agency */}
				<div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md drop-shadow-md flex flex-col lg:flex-row items-center gap-8">
					<div className="w-full lg:w-1/3 flex-shrink-0">
						<Image
							src="/images/2b-agency.webp"
							alt="2B Agency"
							width={400}
							height={400}
							className="mx-auto rounded-lg object-cover shadow-md"
						/>
					</div>
					<div className="w-full lg:w-2/3 text-left">
						<h4 className="text-2xl font-bold mb-2">2B Agency</h4>
						<p className="leading-relaxed mb-4">
							Développement du site pour l'agence 2B, spécialisée dans la création de sites internet et le
							marketing digital. Ce projet visait à créer une plateforme professionnelle pour mettre en
							avant les services de l'agence et attirer de nouveaux clients grâce à une présentation
							moderne et engageante.
						</p>
						<p className="leading-relaxed">
							<span className="font-semibold text-orange-500">Technologies utilisées :</span>
							<br /> Next.js, Tailwind CSS, Shadcn/ui, MagicUI, TypeScript, MySQL, Framer Motion, Lucide
							React.
						</p>
					</div>
				</div>

				{/* Project - 3 */}
				<div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md drop-shadow-md flex flex-col lg:flex-row items-center gap-8">
					<div className="w-full lg:w-1/3 flex-shrink-0">
						<Image
							src="/images/2s-pos.webp"
							alt="Caisse Enregistreuse"
							width={400}
							height={400}
							className="mx-auto rounded-lg object-cover shadow-md"
						/>
					</div>
					<div className="w-full lg:w-2/3 text-left">
						<h4 className="text-2xl font-bold mb-2">Caisse Enregistreuse</h4>
						<p className="leading-relaxed mb-4">
							Application de gestion de commandes et de stock, intégrant un tableau de bord interactif
							pour le suivi des ventes et des performances. Le projet permet également la création de
							nouvelles commandes et la gestion de l'historique des transactions.
						</p>
						<p className="leading-relaxed">
							<span className="font-semibold text-orange-500">Technologies utilisées :</span>
							<br /> Flutter pour le développement multiplateforme, avec une intégration de la gestion des
							stocks et des commandes, ainsi que des fonctionnalités de mise à jour automatique.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
