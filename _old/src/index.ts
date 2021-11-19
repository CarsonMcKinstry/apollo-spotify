import { makeExecutableSchema } from "@graphql-tools/schema";
import { config } from "dotenv";
import { merge } from "lodash";

import { SpotifySchemaContext } from "./types";

import { baseResolvers, baseTypeDefs } from "./schemas/base";
import { artistResolvers, artistTypeDefs } from "./schemas/artist";
import { albumTypeDefs, albumResolvers } from "./schemas/album";
import { trackTypeDefs, trackResolvers } from "./schemas/track";
import { searchResolvers, searchTypeDefs } from "./schemas/search";
import { userResolvers, userTypeDefs } from "./schemas/user";
import { playlistResolvers, playlistTypeDefs } from "./schemas/playlist";

config();

export const schema = makeExecutableSchema<SpotifySchemaContext>({
  typeDefs: [
    baseTypeDefs,
    searchTypeDefs,
    trackTypeDefs,
    albumTypeDefs,
    artistTypeDefs,
    userTypeDefs,
    playlistTypeDefs,
  ],
  resolvers: merge(
    baseResolvers,
    artistResolvers,
    albumResolvers,
    trackResolvers,
    searchResolvers,
    userResolvers,
    playlistResolvers
  ),
});

export { Spotify } from "./SpotifyDataSource";
