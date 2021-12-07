import { SpotifyResolvers } from "../../types";

export const trackResolvers: SpotifyResolvers = {
  Query: {
    track(_parent, { id, ...args }, { dataSources }) {
      return dataSources.spotify.getTrack(id, args);
    },
    tracks(_parent, { ids, ...args }, { dataSources }) {
      return dataSources.spotify.getTracks(ids, args);
    },
  },
  Track: {
    album: async (parent, _args, { dataSources }) => {
      if (parent.album) {
        return parent.album;
      }

      const track = await dataSources.spotify.getTrack(parent.id);
      return track.album;
    },
    popularity: async (parent, _args, { dataSources }) => {
      if (parent.popularity) {
        return parent.popularity;
      }

      const track = await dataSources.spotify.getTrack(parent.id);
      return track.popularity;
    },
    audioFeatures: async (parent, _args, { dataSources }) => {
      return dataSources.spotify.getTrackAudioFeatures(parent.id);
    },
  },
};
