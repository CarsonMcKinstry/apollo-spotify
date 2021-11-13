import { Resolvers } from "../../types";

export const trackResolvers: Resolvers = {
  Query: {
    track(_, { id, market }, { dataSources }) {
      return dataSources.spotify.getTrack(id, market ?? undefined);
    },
    tracks(_, { ids, market }, { dataSources }) {
      return dataSources.spotify.getTracks(ids, market ?? undefined);
    },
  },
};
