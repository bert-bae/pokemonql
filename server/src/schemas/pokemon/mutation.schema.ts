import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLInt,
} from "graphql";
import { Pokemon, PokemonBaseProperties, PokemonTypeEnum } from "./base.schema";
import { createOne, update } from "../../resolvers/pokemon.resolver";

const PokemonBaseInput = new GraphQLInputObjectType({
  name: "PokemonBaseInput",
  fields: PokemonBaseProperties,
});

const PokemonCreateInput = new GraphQLInputObjectType({
  name: "PokemonCreateInput",
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

const PokemonUpdateInput = new GraphQLInputObjectType({
  name: "PokemonUpdateInput",
  fields: {
    name: {
      type: GraphQLString,
    },
    base: {
      type: PokemonBaseInput,
    },
    type: {
      type: new GraphQLList(PokemonTypeEnum),
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
          type: PokemonCreateInput,
        },
      },
      resolve: createOne,
    },
    update: {
      type: Pokemon,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt),
        },
        pokemon: {
          type: new GraphQLNonNull(PokemonUpdateInput),
        },
      },
      resolve: update,
    },
  },
});
