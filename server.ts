import { schema, Spotify } from "./src";
import { ApolloServer } from "apollo-server";

const server = new ApolloServer({
  schema,
  dataSources: () => {
    return {
      spotify: new Spotify(
        process.env.SPOTIFY_CLIENT_ID,
        process.env.SPOTIFY_CLIENT_SECRET
      ),
    };
  },
  introspection: true,
});

(async function main() {
  const { url } = await server.listen(4000);

  console.log(`Server started at ${url} 🚀`);
})();
