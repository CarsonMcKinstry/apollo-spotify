import { Resolvers } from "../../types";

export const albumResolvers: Resolvers = {
  Query: {
    async album(_, { id }, { dataSources }) {
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
    async albums(_, { ids }, { dataSources }) {
      const { albums } = await dataSources.spotify.getAlbums(ids);

      return albums.map((album) => {
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
      });
    },
  },
  Album: {
    async albumType({ id, album_type, albumType }: any, _, { dataSources }) {
      if (album_type) {
        return album_type;
      }

      if (albumType) {
        return albumType;
      }

      const { album_type: albumTypeFromRequest } =
        await dataSources.spotify.getAlbum(id);

      return albumTypeFromRequest;
    },
    async releaseDate(
      { id, release_date, releaseDate }: any,
      _,
      { dataSources }
    ) {
      if (release_date) {
        return release_date;
      }

      if (releaseDate) {
        return releaseDate;
      }

      const { release_date: releaseDateFromRequest } =
        await dataSources.spotify.getAlbum(id);

      return releaseDateFromRequest;
    },
    async releaseDatePrecision(
      { id, release_date_precision, releaseDatePrecision }: any,
      _,
      { dataSources }
    ) {
      if (release_date_precision) {
        return release_date_precision;
      }

      if (releaseDatePrecision) {
        return releaseDatePrecision;
      }

      const { release_date_precision: releaseDatePrecisionFromRequest } =
        await dataSources.spotify.getAlbum(id);

      return releaseDatePrecisionFromRequest;
    },
    async externalUrls(
      { id, external_urls, externalUrls }: any,
      _,
      { dataSources }
    ) {
      if (external_urls) {
        return external_urls;
      }

      if (externalUrls) {
        return externalUrls;
      }

      const { external_urls: externalUrlsFromRequest } =
        await dataSources.spotify.getAlbum(id);

      return externalUrlsFromRequest;
    },
    async availableMarkets(
      { id, available_markets, availableMarkets }: any,
      _,
      { dataSources }
    ) {
      if (available_markets) {
        return available_markets;
      }

      if (availableMarkets) {
        return availableMarkets;
      }

      const { available_markets: availableMarketsFromRequest } =
        await dataSources.spotify.getAlbum(id);

      return availableMarketsFromRequest;
    },
    async totalTracks(
      { id, total_tracks, totalTracks }: any,
      _,
      { dataSources }
    ) {
      if (total_tracks) {
        return total_tracks;
      }

      if (totalTracks) {
        return totalTracks;
      }

      const { total_tracks: totalTrackFromRequest } =
        await dataSources.spotify.getAlbum(id);

      return totalTrackFromRequest;
    },
  },
};
