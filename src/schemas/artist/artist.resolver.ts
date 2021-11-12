import { reCaseResolver } from "../../reCaseResolver";
import { Resolvers } from "../../types";
import { responseMapper } from "../../responseMapper";

const artistReCaseResolver = reCaseResolver((spotify) => spotify.getArtist);

export const artistResolvers: Resolvers = {
  Query: {
    async artist(_, { id }, { dataSources }) {
      const artist = await dataSources.spotify.getArtist(id);
      return responseMapper(artist);
    },
    async artists(_, { ids }, { dataSources }) {
      const { artists } = await dataSources.spotify.getArtists(ids);
      return artists.map((artist) => responseMapper(artist));
    },
  },
  Artist: {
    popularity: artistReCaseResolver("popularity"),
    genres: artistReCaseResolver("genres"),
    followers: artistReCaseResolver("followers"),
    externalUrls: artistReCaseResolver("externalUrls"),
    images: artistReCaseResolver("images"),
  },
};
