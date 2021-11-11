import { Resolvers as RawResolvers } from "./gql-types";

import { DataSources } from "./datasources";

export interface SpotifySchemaContext {
  dataSources: DataSources;
}

export type Resolvers = RawResolvers<SpotifySchemaContext>;
