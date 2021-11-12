import { reCaseResolver } from "../../reCaseResolver";
import { Resolvers } from "../../types";
import { responseMapper } from "../../responseMapper";

const albumReCaseResolver = reCaseResolver((dataSource) => dataSource.getAlbum);

export const albumResolvers: Resolvers = {
  Query: {
    async album(_, { id, market }, { dataSources }) {
      const album = await dataSources.spotify.getAlbum(id, market ?? undefined);

      return responseMapper(album);
    },
    async albums(_, { ids, market }, { dataSources }) {
      const { albums } = await dataSources.spotify.getAlbums(
        ids,
        market ?? undefined
      );

      return albums.map((album) => responseMapper(album));
    },
  },
  Album: {
    albumType: albumReCaseResolver("albumType"),
    releaseDate: albumReCaseResolver("releaseDate"),
    releaseDatePrecision: albumReCaseResolver("releaseDatePrecision"),
    externalUrls: albumReCaseResolver("externalUrls"),
    availableMarkets: albumReCaseResolver("availableMarkets"),
    totalTracks: albumReCaseResolver("totalTracks"),
  },
};
