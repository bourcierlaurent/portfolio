"use client";
import { motion } from "framer-motion";

export const sentenceVariants = {
	hidden: {},
	visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export const letterVariants = {
	hidden: { opacity: 0, scale: 2 }, // Couleur transparente au départ
	visible: {
		opacity: 1,
		scale: 1, // Essayez de mettre à 3 pour voir le changement
		transition: {
			duration: 0.5, // Durée de l'animation
			ease: "easeOut",
		},
	},
};

export const Typewriter = ({ text, ...rest }: { text: string }) => (
	<motion.p key={text} variants={sentenceVariants} initial="hidden" animate="visible" {...rest}>
		{text.split("").map((char, i) => (
			<motion.span
				key={`${char}-${i}`}
				variants={letterVariants}
				style={{ display: "inline-block", margin: "0 2px" }}
			>
				{char}
			</motion.span>
		))}
	</motion.p>
);
