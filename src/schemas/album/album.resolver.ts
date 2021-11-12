import { Resolvers } from "../../types";

export const albumResolvers: Resolvers = {
  Query: {
    album: async (_, { id }, { dataSources }) => {
      const album = await dataSources.spotify.getAlbum(id);

      const {
        album_type: albumType,
        available_markets: availableMarkets,
        release_date: releaseDate,
        release_date_precision: releaseDatePrecision,
        total_tracks: totalTracks,
        external_urls: externalUrls,
      } = album;

      return {
        ...album,
        albumType,
        availableMarkets,
        releaseDate,
        releaseDatePrecision,
        totalTracks,
        externalUrls,
      };
    },
  },
};
