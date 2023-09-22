import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInputObjectType,
} from "graphql";
import { Pokemon, PokemonBaseProperties, PokemonTypeEnum } from "./base.schema";
import { createOne } from "../../resolvers/pokemon.resolver";

const PokemonBaseInput = new GraphQLInputObjectType({
  name: "PokemonBaseInput",
  fields: PokemonBaseProperties,
});

const PokemonInput = new GraphQLInputObjectType({
  name: "PokemonInput",
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    base: {
      type: new GraphQLNonNull(PokemonBaseInput),
    },
    type: {
      type: new GraphQLNonNull(new GraphQLList(PokemonTypeEnum)),
    },
  },
});

export default new GraphQLObjectType({
  name: "Mutation",
  fields: {
    create: {
      type: Pokemon,
      args: {
        pokemon: {
          type: PokemonInput,
        },
      },
      resolve: createOne,
    },
  },
});
