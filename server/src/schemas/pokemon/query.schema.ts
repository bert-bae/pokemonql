import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
} from "graphql";
import { getAll, getOne } from "../../resolvers/pokemon.resolver";
import { Pokemon, PokemonTypeEnum } from "./base.schema";

export default new GraphQLObjectType({
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
});
