import { fieldResolver } from "../../fieldResolver";
import { Artist } from "../../gql-types";
import { Resolvers } from "../../types";

const artistFieldResolver = fieldResolver<Artist>("getArtist");

export const artistResolvers: Resolvers = {
  Query: {
    artist(_, { id }, { dataSources }) {
      return dataSources.spotify.getArtist(id);
    },
    artists(_, { ids }, { dataSources }) {
      return dataSources.spotify.getArtists(ids);
    },
  },
  Artist: {
    popularity: artistFieldResolver("popularity"),
    genres: artistFieldResolver("genres"),
    followers: artistFieldResolver("followers"),
    externalUrls: artistFieldResolver("externalUrls"),
    images: artistFieldResolver("images"),
  },
};
