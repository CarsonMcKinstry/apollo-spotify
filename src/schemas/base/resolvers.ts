import { SpotifyResolvers } from "../../types";

export const baseResolvers: SpotifyResolvers = {
  Query: {
    category(_parent, { id, country, locale }, { dataSources }) {
      return dataSources.spotify.getCategory(id, { country, locale });
    },
    categories(_parent, args, { dataSources }) {
      return dataSources.spotify.getCategories(args);
    },
    genres(_parent, _args, { dataSources }) {
      return dataSources.spotify.getGenres();
    },
    markets(_parents, _args, { dataSources }) {
      return dataSources.spotify.getMarkets();
    },
  },
};
