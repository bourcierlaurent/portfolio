import { Hero } from "@components/hero";
import { GithubServer } from "@components/githubServer";
import { Skills } from "@components/skills";
import { LastProjects } from "@components/lastProjects";
import { About } from "@components/about";

export default function Home() {
	return (
		<main className="w-full flex flex-col items-center">
			<Hero />
			<Skills />
			<hr className="my-20 border-orange-500/10 w-full" />
			<GithubServer />
			<hr className="my-20 border-orange-500/10 w-full" />
			<LastProjects />
			<hr className="my-20 border-orange-500/10 w-full" />
			<About />
		</main>
	);
}
