import { SpotifyResolvers } from "../../types";

export const albumResolvers: SpotifyResolvers = {
  Query: {
    album(_parent, { id, ...args }, { dataSources }) {
      return dataSources.spotify.getAlbum(id, args);
    },
    albums(_parent, { ids, ...args }, { dataSources }) {
      return dataSources.spotify.getAlbums(ids, args);
    },
    newReleases(_parent, args, { dataSources }) {
      return dataSources.spotify.getNewReleases(args);
    },
  },
  Album: {
    tracks: async (parent, args, { dataSources }) => {
      return dataSources.spotify.getTracksForAlbum(parent.id, args);
    },
  },
};
