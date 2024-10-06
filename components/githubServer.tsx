import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { GithubContributions } from "@components/githubContributions";

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

		const weeks = data.user.contributionsCollection.contributionCalendar.weeks;

		const contributions = weeks.flatMap((week: any) =>
			week.contributionDays.map((day: any) => ({
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
		<div className="flex flex-col">
			<h3 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white">Mon Engagement GitHub</h3>
			<p className="my-4 text-gray-600 dark:text-gray-300 leading-relaxed text-lg max-w-2xl">
				En tant que développeur passionné, mes contributions sur GitHub reflètent l'effort continu que je
				consacre à mes projets personnels et professionnels. Je m'efforce de maintenir une activité régulière,
				d'améliorer la qualité de mon code et de proposer des solutions toujours plus performantes.
			</p>
			{data ? (
				<div className="lg:col-span-2">
					<GithubContributions contributions={data} />
				</div>
			) : (
				<div className="text-center text-gray-500 dark:text-gray-300">Aucune donnée disponible</div>
			)}
		</div>
	);
};
