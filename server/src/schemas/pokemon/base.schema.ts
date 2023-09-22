import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList,
  GraphQLEnumType,
} from "graphql";

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

export const PokemonBaseProperties = {
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
};

const PokemonBase = new GraphQLObjectType({
  name: "PokemonBase",
  fields: PokemonBaseProperties,
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
      type: new GraphQLNonNull(new GraphQLList(PokemonTypeEnum)),
    },
  },
});
