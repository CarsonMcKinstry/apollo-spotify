import "graphql-import-node";
import { makeExecutableSchema } from "@graphql-tools/schema";

import { baseTypeDefs } from "./schemas/base";
import { userTypeDefs } from "./schemas/user";
import { playlistTypeDefs } from "./schemas/playlist";
import { searchTypeDefs } from "./schemas/search";
import { albumTypeDefs } from "./schemas/album";
import { trackTypeDefs } from "./schemas/track";
import { artistTypeDefs } from "./schemas/artist";

export const schema = makeExecutableSchema({
  typeDefs: [
    baseTypeDefs,
    userTypeDefs,
    playlistTypeDefs,
    searchTypeDefs,
    albumTypeDefs,
    trackTypeDefs,
    artistTypeDefs,
  ],
});
