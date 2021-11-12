import {
  Resolvers as RawResolvers,
  Artist,
  ExternalUrls,
  Album,
  AlbumType,
  DatePrecision,
} from "./gql-types";
import { Spotify } from "./SpotifyDataSource";

export interface SpotifySchemaContext {
  dataSources: {
    spotify: Spotify;
  };
}

export type Resolvers = RawResolvers<SpotifySchemaContext>;
export interface ArtistAPIResponse extends Omit<Artist, "externalUrls"> {
  external_urls: ExternalUrls;
}

type AlbumOmissions =
  | "externalUrls"
  | "albumType"
  | "availableMarkets"
  | "releaseDate"
  | "releaseDatePrecision"
  | "totalTracks";

export interface AlbumAPIResponse extends Omit<Album, AlbumOmissions> {
  external_urls: ExternalUrls;
  album_type: AlbumType;
  available_markets: string[];
  release_date: string;
  release_date_precision: DatePrecision;
  total_tracks: number;
}
