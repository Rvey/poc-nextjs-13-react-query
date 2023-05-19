import { Inter } from "next/font/google";
import Pokemons from "./components/Pokemons";
import { getPokemons } from "./store";
import { dehydrate, Hydrate } from '@tanstack/react-query'
import getQueryClient from "./getQueryClient";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
	const client = getQueryClient();
	// await client.prefetchQuery({
	// 	queryKey: ["brands"],
	// 	queryFn: () => getPokemons("brands"),
	// });
	await client.prefetchQuery({
		queryKey: ["models"],
		queryFn: () => getPokemons("models"),
	});
	await client.prefetchQuery({
		queryKey: ["products"],
		queryFn: () => getPokemons("products"),
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
