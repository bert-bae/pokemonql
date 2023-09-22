import { POKEDEX_MAP } from "../data/pokedexmap";

type Pokemon = (typeof POKEDEX_MAP)[keyof typeof POKEDEX_MAP];

export const getAll = (_, args: { type: string }): Pokemon[] => {
  console.log(POKEDEX_MAP);
  const pokemonList = Object.values(POKEDEX_MAP);
  if (!args.type) {
    return pokemonList;
  }

  const pokemonByType: Pokemon[] = [];
  for (const pokemon of pokemonList) {
    pokemon.type.includes(args.type) && pokemonByType.push(pokemon);
  }
  return pokemonByType;
};

export const getOne = (_, args: { id: number }) => {
  return POKEDEX_MAP[args.id];
};
