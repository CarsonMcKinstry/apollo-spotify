import { SpotifyResolvers } from "../../types";

const tap = (doAThing: any) => (whatever: any) => {
  doAThing(whatever);
  return whatever;
};

export const userResolvers: SpotifyResolvers = {
  Query: {
    me(_parent, _args, { dataSources }) {
      return dataSources.spotify.getMe();
    },
    user(_parent, { userId }, { dataSources }) {
      return dataSources.spotify.getUser(userId);
    },
  },
  Me: {
    playlists(_parent, args, { dataSources }) {
      return dataSources.spotify.getMyPlaylists(args);
    },
    topTracks(_parent, args, { dataSources }) {
      return dataSources.spotify.getMyTopTracks(args);
    },
    topArtists(_parent, args, { dataSources }) {
      return dataSources.spotify.getMyTopArtists(args);
    },
  },
  UserProfile: {
    playlists(parent, args, { dataSources }) {
      return dataSources.spotify
        .getPlaylistsByUser(parent.id, args)
        .then(tap(console.log));
    },
  },
};
