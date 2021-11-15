import { Track } from "../../gql-types";
import { Resolvers } from "../../types";
import { fieldResolver } from "../../utils";

const trackFieldResolver = fieldResolver<Track>("getTrack");

export const trackResolvers: Resolvers = {
  Query: {
    track(_, { id, market }, { dataSources }) {
      return dataSources.spotify.getTrack(id, market ?? undefined);
    },
    tracks(_, { ids, market }, { dataSources }) {
      return dataSources.spotify.getTracks(ids, market ?? undefined);
    },
  },
  Track: {
    album: trackFieldResolver("album"),
    discNumber: trackFieldResolver("discNumber"),
    duration: trackFieldResolver("duration"),
    trackNumber: trackFieldResolver("trackNumber"),
    externalIds: trackFieldResolver("externalIds"),
    isLocal: trackFieldResolver("isLocal"),
  },
};
