import gql from "graphql-tag";

export const searchTypeDefs = gql`
  extend type Query {
    search(
      query: String!
      type: [ItemType!]!
      limit: Int
      offset: Int
      market: String
      includeExternal: Boolean
    ): SearchResponse
    searchTrack(
      query: String!
      limit: Int
      offset: Int
      market: String
    ): TrackResponse!
    searchArtist(
      query: String!
      limit: Int
      offset: Int
      market: String
    ): ArtistResponse!
    searchAlbum(
      query: String!
      limit: Int
      offset: Int
      market: String
    ): AlbumResponse!
    searchShow(
      query: String!
      limit: Int
      offset: Int
      market: String
    ): ShowResponse!
    searchEpisode(
      query: String!
      limit: Int
      offset: Int
      market: String
    ): EpisodeResponse!
  }

  type SearchResponse {
    tracks: TrackResponse
    artists: ArtistResponse
    albums: AlbumResponse
    shows: ShowResponse
    episodes: EpisodeResponse
  }

  type ArtistResponse implements Pagination {
    limit: Int!
    offset: Int!
    total: Int!
    next: Int!
    previous: Int!

    artists: [Artist!]!
  }

  type TrackResponse implements Pagination {
    limit: Int!
    offset: Int!
    total: Int!
    next: Int!
    previous: Int!

    tracks: [Track!]!
  }

  type AlbumResponse implements Pagination {
    limit: Int!
    offset: Int!
    total: Int!
    next: Int!
    previous: Int!

    albums: [Album!]!
  }

  type ShowResponse implements Pagination {
    limit: Int!
    offset: Int!
    total: Int!
    next: Int!
    previous: Int!

    shows: [Show!]!
  }

  type EpisodeResponse implements Pagination {
    limit: Int!
    offset: Int!
    total: Int!
    next: Int!
    previous: Int!

    episodes: [Episode!]!
  }
`;
