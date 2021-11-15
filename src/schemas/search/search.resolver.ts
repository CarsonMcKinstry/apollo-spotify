import { ItemType } from "../../gql-types";
import { Resolvers } from "../../types";

export const searchResolvers: Resolvers = {
  Query: {
    search(
      _,
      { query, includeExternal, type, market, limit, offset },
      { dataSources }
    ) {
      return dataSources.spotify.search(query, type, {
        market,
        limit,
        offset,
        includeExternal,
      });
    },
    async searchTrack(_, { query, market, limit, offset }, { dataSources }) {
      const { tracks } = await dataSources.spotify.search(
        query,
        [ItemType.Track],
        {
          market,
          limit,
          offset,
        }
      );

      return tracks!;
    },
    async searchArtist(_, { query, market, limit, offset }, { dataSources }) {
      const { artists } = await dataSources.spotify.search(
        query,
        [ItemType.Artist],
        {
          market,
          limit,
          offset,
        }
      );

      return artists!;
    },
    async searchAlbum(_, { query, market, limit, offset }, { dataSources }) {
      const { albums } = await dataSources.spotify.search(
        query,
        [ItemType.Album],
        {
          market,
          limit,
          offset,
        }
      );

      return albums!;
    },
    async searchEpisode(_, { query, market, limit, offset }, { dataSources }) {
      const { episodes } = await dataSources.spotify.search(
        query,
        [ItemType.Episode],
        {
          market,
          limit,
          offset,
        }
      );

      return episodes!;
    },
    async searchShow(_, { query, market, limit, offset }, { dataSources }) {
      const { shows } = await dataSources.spotify.search(
        query,
        [ItemType.Show],
        {
          market,
          limit,
          offset,
        }
      );

      return shows!;
    },
  },
};
