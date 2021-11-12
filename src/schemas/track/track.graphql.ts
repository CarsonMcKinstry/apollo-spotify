import gql from "graphql-tag";

export const trackTypeDefs = gql`
  type Track implements Item {
    id: ID!
    name: String!
    type: ItemType!
    availableMarkets: [String!]!

    artists: [Artist!]!

    album: Album!
    discNumber: Int!
    trackNumber: Int!
    duration: Int!
    explicit: Boolean!

    restrictions: Restrictions

    uri: String!
    previewUrl: String

    externalIds: ExternalIds!
    linkedFrom: LinkedFrom
    isPlayable: Boolean
    isLocal: Boolean!
  }

  type LinkedFrom {
    album: Album!
    artists: [Artist!]!
  }

  extend type Query {
    # searchTracks(
    #     query: String!
    #     limit: Int
    #     offset: Int
    #     market: String
    # ): TrackResponse!
    track(id: ID!, market: String): Track!
    tracks(ids: [ID!]!, market: String): [Track!]!
    # tracksByAlbum(albumId: ID!): TrackResponse!
    # topTracksForArtist(artistId: ID!): [Track!]!
  }
`;