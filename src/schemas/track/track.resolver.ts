import { Resolvers } from "../../types";

export const trackResolvers: Resolvers = {
  Query: {
    async track(_, { id }, { dataSources }) {
      const track = await dataSources.spotify.getTrack(id);
      const {
        available_markets: availableMarkets,
        duration_ms: duration,
        external_urls: externalUrls,

        disc_number: discNumber,
        track_number: trackNumber,
        preview_url: previewUrl,
        external_ids: externalIds,
        is_playable: isPlayable,
        is_local: isLocal,
        linked_from: linkedFrom,
      } = track;

      return {
        ...track,
        availableMarkets,
        duration,
        externalUrls,
        discNumber,
        trackNumber,
        previewUrl,
        externalIds,
        isPlayable,
        isLocal,
        linkedFrom,
      };
    },
    async tracks(_, { ids }, { dataSources }) {
      const { tracks } = await dataSources.spotify.getTracks(ids);

      return tracks.map((track) => {
        const {
          available_markets: availableMarkets,
          duration_ms: duration,
          external_urls: externalUrls,

          disc_number: discNumber,
          track_number: trackNumber,
          preview_url: previewUrl,
          external_ids: externalIds,
          is_playable: isPlayable,
          is_local: isLocal,
          linked_from: linkedFrom,
        } = track;

        return {
          ...track,
          availableMarkets,
          duration,
          externalUrls,
          discNumber,
          trackNumber,
          previewUrl,
          externalIds,
          isPlayable,
          isLocal,
          linkedFrom,
        };
      });
    },
  },
};
