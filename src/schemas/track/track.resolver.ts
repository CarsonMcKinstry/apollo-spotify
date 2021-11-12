import { Resolvers } from "../../types";
import { responseMapper } from "../../responseMapper";

export const trackResolvers: Resolvers = {
  Query: {
    async track(_, { id, market }, { dataSources }) {
      const track = await dataSources.spotify.getTrack(id, market ?? undefined);
      console.log(track);
      return responseMapper(track);
    },
    async tracks(_, { ids, market }, { dataSources }) {
      const { tracks } = await dataSources.spotify.getTracks(
        ids,
        market ?? undefined
      );

      return tracks.map((track) => responseMapper(track));
    },
  },
};
