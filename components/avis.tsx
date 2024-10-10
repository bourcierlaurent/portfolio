"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const allAvis = [
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

export const Avis = () => {
	const ref = useRef(null);

	const isInView = useInView(ref, { amount: 0.2 });

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.5,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 200, x: 200, scale: 0 },
		visible: { opacity: 1, y: 0, x: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
	};

	return (
		<div id="avis" className="p-6" ref={ref}>
			<motion.div
				className="mt-10 flex flex-col space-y-6"
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				variants={containerVariants}
			>
				{allAvis.map((a, i) => (
					<motion.div key={i} className="chat chat-start" variants={itemVariants}>
						<div className="chat-image avatar">
							<div className="w-10 rounded-full">
								<div className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-500 text-white font-extrabold font-Poppins">
									{a.initials}
								</div>
							</div>
						</div>
						<div className="chat-bubble text-white">{a.text}</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};
