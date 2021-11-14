import gql from "graphql-tag";

export const showTypeDefs = gql`
  type Show implements Item {
    id: ID!
    name: String!
    uri: String!
    type: ItemType!

    copyrights: [Copyright!]!
    description: String!
    htmlDescription: String!
    explicit: Boolean!
    externalUrls: ExternalUrls!
    images: [Image!]!
    isExternallyHosted: Boolean!
    languages: [String!]!
    mediaType: String!
    publisher: String!
    availableMarkets: [String!]

    # episodes: EpisodeResponse!
  }

  extend type Query {
    show(id: ID!, market: String): Show!
    shows(ids: [ID!]!, market: String): [Show!]!
  }
`;
