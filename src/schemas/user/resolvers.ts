import { SpotifyResolvers } from "../../types";

export const userResolvers: SpotifyResolvers = {
  Query: {
    me(_parent, _args, { dataSources }) {
      return dataSources.spotify.getMe();
    },
  },
};
