import { schema, dataSources } from "./src";
import { ApolloServer } from "apollo-server";

const server = new ApolloServer({ schema, dataSources });

(async function main() {
  const { url } = await server.listen(4000);

  console.log(`Server started at ${url} 🚀`);
})();
