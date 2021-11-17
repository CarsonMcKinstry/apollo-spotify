import { gql } from "graphql-tag";
export const userTypeDefs = gql`

    interface User {}

  type User {
    id: ID!
    country: String
    displayName: String
    email: String
    explicitContent: ExplicitContentSettings
    externalUrls: ExternalUrls
    followers: Followers
    images: [Image!]
    product: string
    type: String!
    uri: String!
    topItems: UserTopItems!
  }

  type ExplicitContentSettings {
    filterEnabled: Boolean!
    filterLocked: Boolean!
  }

  type UserTopItems {
    artists(limit: Int, offset: Int, timeRange: TimeRange): ArtistResponse!
    tracks(limit: Int, offset: Int, timeRange: TimeRange): TrackResponse!
  }

  type Query {
      me: User!
      user(userId: ID!): User
  }

  enum TimeRange {
    longTerm
    mediumTerm
    shortTerm
  }
`;
