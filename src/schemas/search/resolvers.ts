import { SpotifyResolvers } from "../../types";

export const searchResolvers: SpotifyResolvers = {
  Query: {
    search(_parent, { query, ...args }, { dataSources }) {
      return dataSources.spotify.search(query, args);
    },
    searchAlbums(_parent, { query, ...args }, { dataSources }) {
      return dataSources.spotify.searchAlbums(query, args);
    },
    searchArtists(_parent, { query, ...args }, { dataSources }) {
      return dataSources.spotify.searchArtists(query, args);
    },
    searchTracks(_parent, { query, ...args }, { dataSources }) {
      return dataSources.spotify.searchTracks(query, args);
    },
  },
};
