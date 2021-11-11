import gql from "graphql-tag";

export const baseTypeDefs = gql`
  type Query {
    health: Boolean!
  }

  type ExternalIds {
    isrc: String!
    ean: String!
    upc: String!
  }

  type ExternalUrls {
    spotify: String!
  }

  interface Pagination {
    limit: Int!
    offset: Int!
    total: Int!
    next: Int!
    previous: Int!
  }

  interface Item {
    id: ID!
    name: String!
    type: ItemType!
    uri: String!
  }

  enum ItemType {
    track
    artist
    album
    episode
    show
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

  type Image {
    url: String!
    height: Int!
    width: Int!
  }
`;
