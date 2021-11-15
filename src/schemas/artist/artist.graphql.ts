import gql from "graphql-tag";

export const artistTypeDefs = gql`
  extend type Query {
    artist(id: ID!): Artist
    artists(ids: [ID!]!): [Artist!]!
  }

  type TopTracks {
    tracks: [Track!]!
  }

  type RelatedArtists {
    artists: [Artist!]!
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
    albums(limit: Int, offset: Int, market: String): AlbumResponse!
    topTracks(market: String!): TopTracks!
    relatedArtists: RelatedArtists!
  }
`;
