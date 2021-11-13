import { Resolvers } from "../../types";
import { fieldResolver } from "../../fieldResolver";

import { Album } from "../../gql-types";

const albumFieldResolver = fieldResolver<Album>(
  (dataSource) => dataSource.getAlbum
);

export const albumResolvers: Resolvers = {
  Query: {
    album(_, { id, market }, { dataSources }) {
      return dataSources.spotify.getAlbum(id, market ?? undefined);
    },
    albums(_, { ids, market }, { dataSources }) {
      return dataSources.spotify.getAlbums(ids, market ?? undefined);
    },
  },
  Album: {
    albumType: albumFieldResolver("albumType"),
    releaseDate: albumFieldResolver("releaseDate"),
    releaseDatePrecision: albumFieldResolver("releaseDatePrecision"),
    externalUrls: albumFieldResolver("externalUrls"),
    availableMarkets: albumFieldResolver("availableMarkets"),
    totalTracks: albumFieldResolver("totalTracks"),
  },
};
