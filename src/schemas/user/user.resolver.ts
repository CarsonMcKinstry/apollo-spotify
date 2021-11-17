import { Resolvers } from "../../types";

export const userResolvers: Resolvers = {
  Query: {
    me(_parent, _args, { dataSources }) {
      return dataSources.spotify.getMe();
    },
    user(_parent, { userId }, { dataSources }) {
      return dataSources.spotify.getUser(userId);
    },
  },
  Me: {
    topTracks(_, args, { dataSources }) {
      return dataSources.spotify.getMyTopTracks(args);
    },
    topArtists(_, args, { dataSources }) {
      return dataSources.spotify.getMyTopArtists(args);
    },
  },
};
