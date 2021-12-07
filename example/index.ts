import { ApolloServer } from "apollo-server";

import { schema, SpotifyDataSource } from "../src";

import dotenv from "dotenv";

import path from "path";

dotenv.config({
  path: path.join(__dirname, "./.env"),
});

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID ?? "";
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET ?? "";

const server = new ApolloServer({
  schema,
  dataSources() {
    return {
      spotify: new SpotifyDataSource(SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET),
    };
  },
  introspection: true,
});

(async function main() {
  const { url } = await server.listen("3000");

  console.log("🚀 Server now listening at:", url);
})();
