import { Artist, ExternalUrls } from "../../gql-types";
import { Resolvers } from "../../types";

export const artistResolvers: Resolvers = {
  Query: {
    async artist(_, { id }, { dataSources }) {
      const artist = await dataSources.spotify.getArtist(id);
      const { external_urls: externalUrls } = artist;
      return {
        ...artist,
        externalUrls,
      };
    },
    async artists(_, { ids }, { dataSources }) {
      const { artists } = await dataSources.spotify.getArtists(ids);
      return artists.map((artist) => {
        const { external_urls: externalUrls } = artist;
        return {
          ...artist,
          externalUrls,
        };
      });
    },
  },
  Artist: {
    async popularity({ id, popularity }, _, { dataSources }) {
      if (!popularity) {
        const artist = await dataSources.spotify.getArtist(id);

        return artist.popularity;
      }

      return popularity;
    },
    async genres({ id, genres }, _, { dataSources }) {
      if (!genres) {
        const artist = await dataSources.spotify.getArtist(id);

        return artist.genres;
      }

      return genres;
    },
    async followers({ id, followers }, _, { dataSources }) {
      if (!followers) {
        const artist = await dataSources.spotify.getArtist(id);

        return artist.followers;
      }

      return followers;
    },
    async externalUrls({ id, externalUrls }, _, { dataSources }) {
      if (!externalUrls) {
        const artist = await dataSources.spotify.getArtist(id);

        return artist.external_urls;
      }

      return externalUrls;
    },
    async images({ id, images }, _, { dataSources }) {
      if (!images) {
        const artist = await dataSources.spotify.getArtist(id);

        return artist.images;
      }

      return images;
    },
  },
};
