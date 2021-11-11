import gql from "graphql-tag";

export const artistTypeDefs = gql`
  extend type Query {
    artist(id: ID!): Artist
    artists(ids: [ID!]!): [Artist!]!
  }

  type Artist implements Item {
    id: ID!
    name: String!
    type: ItemType!

    popularity: Int!

    genres: [String!]!
    uri: String!

    followers: Followers!
    externalUrls: ExternalUrls!
    images: [Image!]!
  }

  type Followers {
    total: Int!
  }
`;
