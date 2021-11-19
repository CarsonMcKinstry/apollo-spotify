import { UserProfile } from "../../gql-types";
import { Resolvers } from "../../types";
import { fieldResolver } from "../../utils";

const userProfileFieldResolver = fieldResolver<UserProfile>(
  (spotify) => spotify.getUser
);

export const userResolvers: Resolvers = {
  Query: {
    me(_parent, _args, { dataSources }) {
      return dataSources.spotify.getMe();
    },
    user(_parent, { userId }, { dataSources }) {
      return dataSources.spotify.getUser(userId);
    },
  },
  Me: {
    topTracks(_, args, { dataSources }) {
      return dataSources.spotify.getMyTopTracks(args);
    },
    topArtists(_, args, { dataSources }) {
      return dataSources.spotify.getMyTopArtists(args);
    },
    playlists(_, args, { dataSources }) {
      return dataSources.spotify.getMyPlaylists(args);
    },
  },
  UserProfile: {
    displayName: userProfileFieldResolver("displayName"),
    followers: userProfileFieldResolver("followers"),
    images: userProfileFieldResolver("images"),
    playlists({ id }, args, { dataSources }) {
      return dataSources.spotify.getUserPlaylists(id, args);
    },
  },
};
