import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { GithubContributions } from "@components/githubContributions";

type ContributionDay = {
	contributionCount: number;
	date: string;
};

type ContributionWeek = {
	contributionDays: ContributionDay[];
};

const fetchData = async () => {
	const client = new ApolloClient({
		uri: "https://api.github.com/graphql",
		cache: new InMemoryCache(),
		headers: {
			Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
		},
	});

	const GET_COMMITS_QUERY = gql`
		query ($login: String!) {
			user(login: $login) {
				contributionsCollection {
					contributionCalendar {
						weeks {
							contributionDays {
								contributionCount
								date
							}
						}
					}
				}
			}
		}
	`;

	const username = "bourcierlaurent";

	try {
		const { data } = await client.query({
			query: GET_COMMITS_QUERY,
			variables: { login: username },
		});

		const weeks: ContributionWeek[] = data.user.contributionsCollection.contributionCalendar.weeks;

		const contributions = weeks.flatMap((week) =>
			week.contributionDays.map((day) => ({
				date: day.date.split("T")[0],
				count: day.contributionCount,
			}))
		);

		return contributions;
	} catch (error) {
		console.error("Error fetching commits:", error);
		return null;
	}
};

export const GithubServer = async () => {
	const data = await fetchData();

	return (
		<section className="mx-auto w-7xl max-w-90">
			<div className="flex flex-col">
				<h2 className="text-3xl tracking-wide text-gray-800 dark:text-white">
					Mon Engagement <span className="text-orange-400 font-extrabold">GitHub</span>
				</h2>
				<p className="my-4 text-gray-600 dark:text-gray-300 leading-relaxed text-lg max-w-2xl">
					En tant que développeur passionné, mes contributions sur GitHub reflètent l&apos;effort continu que
					je consacre à mes projets personnels et professionnels. Je m&apos;efforce de maintenir une activité
					régulière, d&apos;améliorer la qualité de mon code et de proposer des solutions toujours plus
					performantes.
				</p>
				{data ? (
					<div className="lg:col-span-2">
						<GithubContributions contributions={data} />
					</div>
				) : (
					<div className="text-center text-gray-500 dark:text-gray-300">Aucune donnée disponible</div>
				)}
			</div>
		</section>
	);
};
