import { makeExecutableSchema } from "@graphql-tools/schema";
import { config } from "dotenv";
import { merge } from "lodash";

import { SpotifySchemaContext } from "./types";

import { baseResolvers, baseTypeDefs } from "./schemas/base";
import { artistResolvers, artistTypeDefs } from "./schemas/artist";
import { albumTypeDefs, albumResolvers } from "./schemas/album";
import { trackTypeDefs, trackResolvers } from "./schemas/track";
import { searchResolvers, searchTypeDefs } from "./schemas/search";

config();

export const schema = makeExecutableSchema<SpotifySchemaContext>({
  typeDefs: [
    baseTypeDefs,
    searchTypeDefs,
    trackTypeDefs,
    albumTypeDefs,
    artistTypeDefs,
  ],
  resolvers: merge(
    baseResolvers,
    artistResolvers,
    albumResolvers,
    trackResolvers,
    searchResolvers
  ),
});

export { Spotify } from "./SpotifyDataSource";
