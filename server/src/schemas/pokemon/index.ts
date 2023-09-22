import { GraphQLSchema } from "graphql";
import query from "./query.schema";
import mutation from "./mutation.schema";

export default new GraphQLSchema({
  query,
  mutation,
});
