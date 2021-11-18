import { gql } from "graphql-tag";
export const userTypeDefs = gql`
  interface User {
    id: ID!
    displayName: String!
    externalUrls: ExternalUrls!
    followers: Followers!
    images: [Image!]!
    type: String!
    uri: String!
  }

  type Me implements User {
    id: ID!
    displayName: String!
    externalUrls: ExternalUrls!
    followers: Followers!
    images: [Image!]!
    type: String!
    uri: String!
    country: String
    email: String
    explicitContent: ExplicitContentSettings
    product: String
    topArtists(limit: Int, offset: Int, timeRange: TimeRange): ArtistResponse!
    topTracks(limit: Int, offset: Int, timeRange: TimeRange): TrackResponse!
    playlists(limit: Int, offset: Int): PlaylistResponse!
  }

  type UserProfile implements User {
    id: ID!
    displayName: String!
    externalUrls: ExternalUrls!
    followers: Followers!
    images: [Image!]!
    type: String!
    uri: String!
    playlists(limit: Int, offset: Int): PlaylistResponse!
  }

  type ExplicitContentSettings {
    filterEnabled: Boolean!
    filterLocked: Boolean!
  }

  type Query {
    me: Me!
    user(userId: ID!): UserProfile!
  }

  enum TimeRange {
    longTerm
    mediumTerm
    shortTerm
  }
`;
