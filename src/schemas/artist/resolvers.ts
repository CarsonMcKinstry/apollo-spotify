import { SpotifyResolvers } from "../../types";

export const artistResolvers: SpotifyResolvers = {
  Query: {
    artist(_parent, { id }, { dataSources }) {
      return dataSources.spotify.getArtist(id);
    },
    artists(_parent, { ids, ...args }, { dataSources }) {
      return dataSources.spotify.getArtists(ids, args);
    },
  },
  Artist: {
    popularity: async (parent, _args, { dataSources }) => {
      if (parent.popularity) {
        return parent.popularity;
      }

      const artist = await dataSources.spotify.getArtist(parent.id);
      return artist.popularity;
    },
    genres: async (parent, _args, { dataSources }) => {
      if (parent.genres) {
        return parent.genres;
      }

      const artist = await dataSources.spotify.getArtist(parent.id);
      return artist.genres;
    },
    followers: async (parent, _args, { dataSources }) => {
      if (parent.followers) {
        return parent.followers;
      }

      const artist = await dataSources.spotify.getArtist(parent.id);
      return artist.followers;
    },
    images: async (parent, _args, { dataSources }) => {
      if (parent.images) {
        return parent.images;
      }

      const artist = await dataSources.spotify.getArtist(parent.id);
      return artist.images;
    },
    relatedArtists: async (parent, _args, { dataSources }) => {
      const artists = await dataSources.spotify.getRelatedArtists(parent.id);

      return {
        artists,
      };
    },
    topTracks: async (parent, args, { dataSources }) => {
      const tracks = await dataSources.spotify.getTopTracksByArtist(
        parent.id,
        args
      );
      return {
        tracks,
      };
    },
    albums: async (parent, args, { dataSources }) => {
      return dataSources.spotify.getAlbumsByArtist(parent.id, args);
    },
  },
};
