import gql from "graphql-tag";

export const albumTypeDefs = gql`
  extend type Query {
    album(id: ID!): Album!
    albums(ids: [ID!]!): [Album!]!
  }

  type Album implements Item {
    id: ID!
    name: String!
    type: ItemType!
    uri: String!
    albumType: AlbumType!

    releaseDate: String!
    releaseDatePrecision: DatePrecision!

    artists: [Artist!]!
    externalUrls: ExternalUrls!
    availableMarkets: [String!]!
    restrictions: Restrictions

    images: [Image!]!

    totalTracks: Int!
    # tracks: TrackResponse!
  }
`;
