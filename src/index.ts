import { makeExecutableSchema } from "@graphql-tools/schema";
import { config } from "dotenv";
import { merge } from "lodash";

import { SpotifySchemaContext } from "./types";

import { baseResolvers, baseTypeDefs } from "./schemas/base";
import { artistResolvers, artistTypeDefs } from "./schemas/artist";
import { albumTypeDefs, albumResolvers } from "./schemas/album";
import { trackTypeDefs, trackResolvers } from "./schemas/track";
import { episodeResolvers, episodeTypeDefs } from "./schemas/episode";
import { showResolvers, showTypeDefs } from "./schemas/show";
import { searchResolvers, searchTypeDefs } from "./schemas/search";

config();

export const schema = makeExecutableSchema<SpotifySchemaContext>({
  typeDefs: [
    baseTypeDefs,
    artistTypeDefs,
    albumTypeDefs,
    trackTypeDefs,
    episodeTypeDefs,
    showTypeDefs,
    searchTypeDefs,
  ],
  resolvers: merge(
    baseResolvers,
    artistResolvers,
    albumResolvers,
    trackResolvers,
    episodeResolvers,
    showResolvers,
    searchResolvers
  ),
});

export { Spotify } from "./SpotifyDataSource";
