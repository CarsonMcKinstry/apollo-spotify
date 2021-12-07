import "graphql-import-node";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeResolvers } from "@graphql-tools/merge";

import { baseTypeDefs, baseResolvers } from "./schemas/base";
import { userResolvers, userTypeDefs } from "./schemas/user";
import { playlistResolvers, playlistTypeDefs } from "./schemas/playlist";
import { searchResolvers, searchTypeDefs } from "./schemas/search";
import { albumResolvers, albumTypeDefs } from "./schemas/album";
import { trackResolvers, trackTypeDefs } from "./schemas/track";
import { artistResolvers, artistTypeDefs } from "./schemas/artist";

const resolvers = mergeResolvers([
  userResolvers,
  baseResolvers,
  searchResolvers,
  trackResolvers,
  artistResolvers,
  albumResolvers,
  playlistResolvers,
]);
const typeDefs = [
  baseTypeDefs,
  userTypeDefs,
  playlistTypeDefs,
  searchTypeDefs,
  albumTypeDefs,
  trackTypeDefs,
  artistTypeDefs,
];

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export { SpotifyDataSource } from "./SpotifyDataSource";
