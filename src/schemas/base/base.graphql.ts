import gql from "graphql-tag";

export const baseTypeDefs = gql`
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
    next: Int
    previous: Int
  }

  type ExternalIds {
    isrc: String
    ean: String
    upc: String
  }

  type ExternalUrls {
    spotify: String!
  }

  type Followers {
    total: Int!
  }

  type Image {
    url: String!
    height: Int
    width: Int
  }

  type Restrictions {
    reason: RestrictionReason!
  }

  type ResumePoint {
    fullyPlayed: Boolean!
    timestamp: Int!
  }

  type Followers {
    total: Int!
  }

  type LinkedFrom {
    album: Album!
    artists: [Artist!]!
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

  type Category {
    id: ID!
    name: String!
    icons: [Image!]!
  }

  type CategoryResponse implements Pagination {
    categories: [Category!]!
    limit: Int!
    offset: Int!
    next: Int!
    previous: Int!
    total: Int!
  }

  type Query {
    category(id: ID!, country: String, locale: String): Category
    categories(
      limit: Int
      offset: Int
      country: String
      locale: String
    ): CategoryResponse!
    genres: [String!]!
    markets: [String!]!
  }
`;
