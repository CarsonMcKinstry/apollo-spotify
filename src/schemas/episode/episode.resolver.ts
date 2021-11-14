import { Resolvers } from "../../types";

export const episodeResolvers: Resolvers = {
  Query: {
    episode(_, { id, market }, { dataSources }) {
      return dataSources.spotify.getEpisode(id, market ?? undefined);
    },
    episodes(_, { ids, market }, { dataSources }) {
      return dataSources.spotify.getEpisodes(ids, market ?? undefined);
    },
  },
};
