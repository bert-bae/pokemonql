import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";
import pokemonSchema from "./schemas/pokemon";

const server = new ApolloServer({
  schema: pokemonSchema,
});

const startServer = async () => {
  const app = express();
  await server.start();
  app.use("/graphql", express.json(), expressMiddleware(server));
  app.listen(4000, () => {
    console.log("Listening on 4000");
  });
};

startServer();
