import { Resolvers } from "../../types";
import { responseMapper } from "../../responseMapper";

export const trackResolvers: Resolvers = {
  Query: {
    async track(_, { id }, { dataSources }) {
      const track = await dataSources.spotify.getTrack(id);

      return responseMapper(track);
    },
    async tracks(_, { ids }, { dataSources }) {
      const { tracks } = await dataSources.spotify.getTracks(ids);

      return tracks.map((track) => responseMapper(track));
    },
  },
};
