import { Resolvers } from "../../types";

export const showResolvers: Resolvers = {
  Query: {
    show(_, { id, market }, { dataSources }) {
      return dataSources.spotify.getShow(id, market ?? undefined);
    },
    shows(_, { ids, market }, { dataSources }) {
      return dataSources.spotify.getShows(ids, market ?? undefined);
    },
  },
};
