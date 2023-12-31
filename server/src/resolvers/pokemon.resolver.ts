import { POKEDEX_MAP } from "../data/pokedexmap";

type Pokemon = (typeof POKEDEX_MAP)[keyof typeof POKEDEX_MAP];

const getNextId = () => {
  const list = Object.keys(POKEDEX_MAP);
  return +list.slice(-1) + 1;
};

export const getAll = (_, args: { type: string }): Pokemon[] => {
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

export const createOne = (
  _,
  args: { pokemon: Omit<Pokemon, "id"> }
): Pokemon => {
  const nextId = getNextId();
  const pokemon = {
    ...args.pokemon,
    id: nextId,
  };
  POKEDEX_MAP[nextId] = pokemon;
  return pokemon;
};

export const update = (
  _,
  args: { id: number; pokemon: Partial<Omit<Pokemon, "id">> }
): Pokemon => {
  POKEDEX_MAP[args.id] = {
    ...POKEDEX_MAP[args.id],
    ...args.pokemon,
    base: { ...POKEDEX_MAP[args.id].base, ...(args.pokemon.base || {}) },
  };
  return POKEDEX_MAP[args.id];
};

export const destroy = (_, args: { id: number }): void => {
  delete POKEDEX_MAP[args.id];
};
