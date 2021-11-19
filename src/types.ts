import { Resolvers } from "./gql-types";
import { SpotifyDataSource } from "./SpotifyDataSource";
export type Maybe<T> = T | null;

export type SpotifyGraphqlContext = {
  spotifyAuthenticationToken?: string;
  dataSources: {
    spotify: SpotifyDataSource;
  };
};

export type SpotifyResolvers = Resolvers<SpotifyGraphqlContext>;
