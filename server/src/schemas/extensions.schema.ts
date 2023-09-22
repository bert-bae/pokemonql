import { GraphQLScalarType } from "graphql";

export const Void = new GraphQLScalarType({
  name: "Void",
  description: "Represents Null",
  serialize() {
    return null;
  },
  parseLiteral() {
    return null;
  },
  parseValue() {
    return null;
  },
});
