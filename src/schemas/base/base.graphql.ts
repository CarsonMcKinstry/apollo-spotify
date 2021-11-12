import gql from "graphql-tag";

export const baseTypeDefs = gql`
  type Query {
    health: Boolean!
  }

  interface Item {
    id: ID!
    name: String!
    type: ItemType!
    uri: String!
  }

  interface Pagination {
    limit: Int!
    offset: Int!
    total: Int!
    next: Int!
    previous: Int!
  }

  type ExternalIds {
    isrc: String!
    ean: String!
    upc: String!
  }

  type ExternalUrls {
    spotify: String!
  }

  type Followers {
    total: Int!
  }

  type Image {
    url: String!
    height: Int!
    width: Int!
  }

  type Restrictions {
    reason: RestrictionReason!
  }

  type ResumePoint {
    fullyPlayed: Boolean!
    timestamp: Int!
  }

  type Copyright {
    text: String!
    type: CopyrightType!
  }

  enum ItemType {
    track
    artist
    album
    episode
    show
  }

  enum AlbumType {
    album
    single
    compilation
  }

  enum DatePrecision {
    year
    month
    day
  }

  enum RestrictionReason {
    market
    product
    explicit
  }

  enum CopyrightType {
    copyright
    performance
  }
`;
