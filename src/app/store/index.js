import { QueryClient } from "@tanstack/react-query";
import { data } from "autoprefixer";
import { cache } from "react";

const getQueryClient = cache(() => new QueryClient());
export default getQueryClient;

const getIdFromURL = (url) => {
  if (typeof url !== "string") return "";
  const id = url
    .split("/")
    .filter((i) => i !== "")
    .at(-1);
  return id;
};

const getPokemonImage = (url) => {
  const id = getIdFromURL(url);
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

export const getPokemons = async (url) => {
  const dataList = await fetch(
    `https://ocarzpro-ma-exjta.ondigitalocean.app/${url}`
  )
    .then((res) => res.json())
    .then((data) => {
      return data["hydra:member"];
    });
  return dataList;
};

export const getPokemonByID = async (id) => {
  const url = `https://ocarzpro-ma-exjta.ondigitalocean.app/products/${id}`;
  const data = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data["hydra:member"];
    });

  return data;
};
