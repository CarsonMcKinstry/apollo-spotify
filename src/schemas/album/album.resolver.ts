import { Resolvers } from "../../types";
import { fieldResolver, omitNull } from "../../utils";

import { Album } from "../../gql-types";

const albumFieldResolver = fieldResolver<Album>("getAlbum");

export const albumResolvers: Resolvers = {
  Query: {
    album(_, { id, market }, { dataSources }) {
      return dataSources.spotify.getAlbum(id, market ?? undefined);
    },
    albums(_, { ids, market }, { dataSources }) {
      return dataSources.spotify.getAlbums(ids, market ?? undefined);
    },
    newReleases(_, args, { dataSources }) {
      return dataSources.spotify.getNewReleases(omitNull(args));
    },
  },
  Album: {
    albumType: albumFieldResolver("albumType"),
    releaseDate: albumFieldResolver("releaseDate"),
    releaseDatePrecision: albumFieldResolver("releaseDatePrecision"),
    externalUrls: albumFieldResolver("externalUrls"),
    availableMarkets: albumFieldResolver("availableMarkets"),
    totalTracks: albumFieldResolver("totalTracks"),
    tracks({ id }, args, { dataSources }) {
      return dataSources.spotify.getTracksByAlbum(id, args);
    },
  },
};
