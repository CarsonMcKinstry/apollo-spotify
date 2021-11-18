import { gql } from "graphql-tag";
export const playlistTypeDefs = gql`
  type Playlist {
    id: ID!
    collaborative: Boolean!
    description: String!
    externalUrls: ExternalUrls!
    followers: Followers!
    images: [Image!]!
    name: String!
    owner: UserProfile!
    public: Boolean!
    snapshotId: String!
    tracks(market: String, limit: Int, offset: Int): PlaylistTrackResponse!
    type: String!
    uri: String!
  }

  type PlaylistTrack {
    addedAt: String
    addedBy: UserProfile!
    isLocal: Boolean!
    primaryColor: String
    track: Track!
  }

  type PlaylistTrackResponse implements Pagination {
    limit: Int!
    offset: Int!
    total: Int!
    next: Int
    previous: Int
    tracks: [PlaylistTrack!]!
  }

  type Query {
    playlist(id: ID!, market: String): Playlist
  }
`;
