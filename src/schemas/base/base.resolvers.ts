import { Resolvers } from "../../types";
import { omitNull } from "../../utils";

export const baseResolvers: Resolvers = {
  Query: {
    category(_, { id, country, locale }, { dataSources }) {
      const query = omitNull({
        country,
        locale,
      });

      return dataSources.spotify.getCategory(id, query);
    },
    categories(_, args, { dataSources }) {
      return dataSources.spotify.getCategories(args);
    },
  },
};
