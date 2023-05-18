import { Inter } from "next/font/google";
import Pokemons from "./components/Pokemons";
import getQueryClient, { getPokemons } from "./store";
import { dehydrate, Hydrate } from '@tanstack/react-query'

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
	const client = getQueryClient();
	await client.prefetchQuery({
		queryKey: ["brands"],
		queryFn: () => getPokemons("brands"),
	});
	await client.prefetchQuery({
		queryKey: ["models"],
		queryFn: () => getPokemons("models"),
	});
	const dehydratedState = dehydrate(client, {
		shouldDehydrateQuery: () => true,
	});

	return (
		<main>
			<Hydrate state={dehydratedState}>
				<Pokemons />
			</Hydrate>
		</main>
	);
}
