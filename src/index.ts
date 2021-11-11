import { makeExecutableSchema } from "@graphql-tools/schema";
import { config } from "dotenv";
import { merge } from "lodash";

import { SpotifySchemaContext } from "./types";

import { baseResolvers, baseTypeDefs } from "./schemas/base";
import { artistResolvers, artistTypeDefs } from "./schemas/artist";

config();

export const schema = makeExecutableSchema<SpotifySchemaContext>({
  typeDefs: [baseTypeDefs, artistTypeDefs],
  resolvers: merge(baseResolvers, artistResolvers),
});

export { dataSources } from "./datasources";
