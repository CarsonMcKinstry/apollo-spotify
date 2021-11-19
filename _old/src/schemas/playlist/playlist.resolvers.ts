import { Resolvers } from "../../types";

export const playlistResolvers: Resolvers = {
  Query: {
    playlist(_, { id, market }, { dataSources }) {
      return dataSources.spotify.getPlaylist(id, market);
    },
  },
  Playlist: {
    tracks({ id }, args, { dataSources }) {
      return dataSources.spotify.getPlaylistTracks(id, args);
    },
  },
};
