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
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () => getPokemons("products"),
    staleTime: 1000 * 60,
  });

  return (
    <div className="container mx-auto my-16">
      <ul className="flex flex-col gap-4 items-center">
        
        <li>brands</li>
        {JSON.stringify(data)}
        <li>models</li>
        {JSON.stringify(models)}
        <li>products</li>
        {JSON.stringify(products)}
      </ul>
    </div>
  );
};

export default Pokemons;
