import { Resolvers } from "../../types";

export const artistResolvers: Resolvers = {
  Query: {
    artist: async (_, { id }, { dataSources }) => {
      const artist = await dataSources.artists.getArtist(id);

      const { external_urls: externalUrls } = artist;

      return {
        ...artist,
        externalUrls,
      };
    },
    artists: async (_, { ids }, { dataSources }) => {
      const { artists } = await dataSources.artists.getArtists(ids);

      return artists.map((artist) => {
        const { external_urls: externalUrls } = artist;

        return {
          ...artist,
          externalUrls,
        };
      });
    },
  },
};
