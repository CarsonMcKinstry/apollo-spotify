import { Resolvers } from "../../types";

export const searchResolvers: Resolvers = {
  Query: {
    search(
      _,
      { query, includeExternal, type, market, limit, offset },
      { dataSources }
    ) {
      return dataSources.spotify.search(query, type, {
        market,
        limit,
        offset,
        includeExternal,
      });
    },
  },
};
