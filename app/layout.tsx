import type { Metadata } from "next";
import { Navbar } from "@components/ui/navbar";
import { Footer } from "@components/ui/footer";
import "@css/globals.css";

export const metadata: Metadata = {
	title: "Portfolio - Laurent BOURCIER",
	description:
		"Développeur web full-stack dynamique et passionné, je m'engage à transformer des idées innovantes en solutions numériques performantes. Fort d'une expérience solide dans la conception et le développement d'applications, je suis toujours à la recherche de nouveaux défis pour enrichir mes compétences. Mon objectif est de créer des expériences utilisateur intuitives et engageantes tout en respectant les meilleures pratiques de développement. Ensemble, faisons passer votre projet au niveau supérieur !",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="theme-color" content="#ffffff" />

			<body
				className={`antialiased dark:bg-gray-900 dark:text-white bg-white text-gray-900 font-Quicksand font-semibold`}
				suppressHydrationWarning={true}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
