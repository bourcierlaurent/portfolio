import { Avis } from "@components/avis";

export const About = () => {
	return (
		<section className="mx-auto w-7xl max-w-90 grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-20">
			<div id="about">
				<h4 className="text-3xl mb-6 text-center lg:text-left">À Propos de Moi</h4>
				<p className="text-lg max-w-2xl leading-relaxed mx-auto">
					Passionné par le développement web, je suis un développeur full-stack avec une solide expérience
					dans la création d&apos;applications web dynamiques et intuitives. J&apos;aime transformer des idées
					en solutions numériques efficaces. Avec une formation en développement web et une expertise
					diversifiée dans des technologies telles que HTML, CSS, JavaScript, TypeScript, React, Next.js et
					Node.js, je suis capable de concevoir des applications robustes et performantes.
				</p>
				<p className="text-lg max-w-2xl leading-relaxed mx-auto mt-4">
					Mes projets reflètent mon engagement à fournir un travail de qualité et à respecter les délais. Je
					crois fermement en l&apos;importance de la collaboration et de la communication au sein des équipes,
					ce qui me permet de m&apos;adapter facilement à différents environnements de travail. En dehors des
					projets professionnels, je suis constamment en quête de nouveaux défis et d&apos;opportunités
					d&apos;apprentissage pour enrichir mes compétences. Mon objectif est de créer des expériences
					utilisateur intuitives et engageantes, tout en respectant les meilleures pratiques de développement.
					Ensemble, faisons passer votre projet au niveau supérieur !
				</p>
			</div>
			<div id="testimonials">
				<h5 className="text-3xl text-center lg:text-left">Les avis sur moi</h5>
				<Avis />
			</div>
		</section>
	);
};
