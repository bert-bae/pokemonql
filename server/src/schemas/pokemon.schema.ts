import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList,
  GraphQLEnumType,
} from "graphql";
import { getAll, getOne } from "../resolvers/pokemon.resolver";

export const PokemonTypeEnum = new GraphQLEnumType({
  name: "Types",
  values: {
    Grass: {
      value: "Grass",
    },
    Poison: {
      value: "Poison",
    },
    Fire: {
      value: "Fire",
    },
    Flying: {
      value: "Flying",
    },
    Water: {
      value: "Water",
    },
    Bug: {
      value: "Bug",
    },
    Normal: {
      value: "Normal",
    },
    Electric: {
      value: "Electric",
    },
    Ground: {
      value: "Ground",
    },
    Fairy: {
      value: "Fairy",
    },
    Fighting: {
      value: "Fighting",
    },
    Psychic: {
      value: "Psychic",
    },
    Rock: {
      value: "Rock",
    },
    Steel: {
      value: "Steel",
    },
    Ice: {
      value: "Ice",
    },
    Ghost: {
      value: "Ghost",
    },
    Dragon: {
      value: "Dragon",
    },
    Dark: {
      value: "Dark",
    },
  },
});

export const PokemonBase = new GraphQLObjectType({
  name: "PokemonBase",
  fields: {
    HP: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    Attack: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    Defense: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    SpAttack: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    SpDefense: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    Speed: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
});

export const Pokemon = new GraphQLObjectType({
  name: "Pokemon",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    base: {
      type: new GraphQLNonNull(PokemonBase),
    },
    type: {
      type: new GraphQLList(PokemonTypeEnum),
    },
  },
});

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      getAll: {
        type: new GraphQLList(Pokemon),
        args: {
          type: {
            type: PokemonTypeEnum,
          },
        },
        resolve: getAll,
      },
      getOne: {
        type: Pokemon,
        args: {
          id: { type: new GraphQLNonNull(GraphQLInt) },
        },
        resolve: getOne,
      },
    },
  }),
});
