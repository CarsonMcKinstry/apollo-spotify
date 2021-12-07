import { SpotifyResolvers } from "../../types";

export const playlistResolvers: SpotifyResolvers = {
  Query: {
    playlist(_parent, { id, ...args }, { dataSources }) {
      return dataSources.spotify.getPlaylist(id, args);
    },
  },
  Playlist: {
    externalUrls: async (parent, args, { dataSources }) => {
      if (parent.externalUrls) {
        return parent.externalUrls;
      }

      const playlist = await dataSources.spotify.getPlaylist(parent.id, args);

      return playlist.externalUrls;
    },
    followers: async (parent, args, { dataSources }) => {
      if (parent.followers) {
        return parent.followers;
      }

      const playlist = await dataSources.spotify.getPlaylist(parent.id, args);

      return playlist.followers;
    },
    tracks: async (parent, args, { dataSources }) => {
      if (parent.tracks) {
        // @ts-ignore
        return dataSources.spotify.mapTracksForPlaylist(parent.tracks);
      }

      const tracks = await dataSources.spotify.getTracksForPlaylist(
        parent.id,
        args
      );

      return tracks;
    },
  },
};
