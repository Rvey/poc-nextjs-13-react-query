"use client";

import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../store";
import PokemonCard from "./PokemonCard";
import Link from "next/link";

const Pokemons = () => {
	const { data } = useQuery({
		queryKey: ["brands"],
		queryFn: () => getPokemons("brands"),
		staleTime: 1000 * 60,
	});
	const { data: models } = useQuery({
		queryKey: ["models"],
		queryFn: () => getPokemons("models"),
		staleTime: 1000 * 60,
	});
	return (
		<div className="container mx-auto my-16">
			<ul className="flex flex-col gap-4 items-center">
				{/* {data?.results?.map(({ name, imgUrl, id }) => (
					<li key={id}>
						<Link href={`/pokemon/${id}`}>
							<PokemonCard id={id} name={name} imgUrl={imgUrl} />
						</Link>
					</li>
				))} */}
				{JSON.stringify(data)}
				{JSON.stringify(models)}
			</ul>
		</div>
	);
};

export default Pokemons;
