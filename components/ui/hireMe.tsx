"use client";
import { Button } from "@components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export const HireMe = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const closeDrawer = () => setIsOpen(false);

	return (
		<>
			<Button
				onClick={toggle}
				className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600"
			>
				Engagez-moi
			</Button>
			<AnimatePresence>
				{isOpen && (
					<>
						{/* Voile d'opacité */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.6 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="fixed inset-0 bg-black z-40"
							onClick={closeDrawer}
						/>

						{/* Drawer */}
						<motion.div
							initial={{ y: "100%" }}
							animate={{ y: 0 }}
							exit={{ y: "100%" }}
							transition={{ duration: 0.3 }}
							className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 z-50 rounded-t-3xl shadow-lg py-16"
						>
							<div className="px-6 w-full max-w-xl mx-auto">
								<h6 className="text-3xl font-extralight font-Caveat tracking-wider text-center leading-relaxed">
									Vous êtes intérésez ? <br />
									<span className="text-5xl">Contactez-moi !</span>
								</h6>
								<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
									<div className="flex flex-col items-center gap-2">
										<div className="bg-orange-500 text-white p-2 text-3xl rounded-lg">
											<FaPhone />
										</div>
										<a
											href="tel:+33781229437"
											className="font-semibold tracking-wide hover:underline"
										>
											+33 7 81 22 94 37
										</a>
									</div>
									<div className="flex flex-col items-center text-lg gap-2">
										<div className="bg-orange-500 text-white p-2 text-3xl rounded-lg">
											<FaEnvelope />
										</div>
										<a
											href="mailto:bourcierlaurent@gmail.com"
											className="font-semibold tracking-wide hover:underline"
										>
											bourcierlaurent@gmail.com
										</a>
									</div>
								</div>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
};
