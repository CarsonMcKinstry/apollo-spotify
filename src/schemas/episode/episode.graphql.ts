import gql from "graphql-tag";

export const episodeTypeDefs = gql`
  type Episode implements Item {
    id: ID!
    name: String!
    uri: String!
    type: ItemType!

    audioPreviewUrl: String!
    description: String!
    htmlDescription: String!
    duration: Int!
    explicit: Boolean!
    externalUrls: ExternalUrls!
    images: [Image!]!
    isExternallyHosted: Boolean!
    isPlayable: Boolean!
    language: String!
    languages: [String!]!

    releaseDate: String!
    releaseDatePrecision: DatePrecision!
    restrictions: Restrictions
    resumePoint: ResumePoint!

    show: Show!
  }

  extend type Query {
    episode(id: ID!, market: String): Episode!
    episodes(ids: [ID!]!, market: String): [Episode!]!
  }
`;
