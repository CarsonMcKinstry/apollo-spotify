import {
  Resolver,
  Resolvers as RawResolvers,
  Artist,
  ExternalUrls,
  Album,
  AlbumType,
  DatePrecision,
  Track,
  ExternalIds,
  LinkedFrom,
} from "./gql-types";
import { Spotify } from "./SpotifyDataSource";

export interface SpotifySchemaContext {
  dataSources: {
    spotify: Spotify;
  };
}

export type Resolvers = RawResolvers<SpotifySchemaContext>;

export type ReCaseResolver = Resolver<any, any, SpotifySchemaContext>;

type ArtistCaseCorrections = "externalUrls";
export interface ArtistAPIResponse extends Omit<Artist, ArtistCaseCorrections> {
  external_urls: ExternalUrls;
  [key: string]: any;
}

type AlbumCaseCorrections =
  | "externalUrls"
  | "albumType"
  | "availableMarkets"
  | "releaseDate"
  | "releaseDatePrecision"
  | "totalTracks";

export interface AlbumAPIResponse extends Omit<Album, AlbumCaseCorrections> {
  external_urls: ExternalUrls;
  album_type: AlbumType;
  available_markets: string[];
  release_date: string;
  release_date_precision: DatePrecision;
  total_tracks: number;
  [key: string]: any;
}

type TrackCaseCorrections =
  | "externalUrls"
  | "availableMarkets"
  | "duration"
  | "discNumber"
  | "trackNumber"
  | "previewUrl"
  | "externalIds"
  | "isPlayable"
  | "isLocal"
  | "linkedFrom";

export interface TrackAPIResponse extends Omit<Track, TrackCaseCorrections> {
  external_urls: ExternalUrls;
  available_markets: string[];
  duration_ms: number;
  disc_number: number;
  track_number: number;
  preview_url: string;
  external_ids: ExternalIds;
  is_playable: boolean;
  is_local: boolean;
  linked_from: LinkedFrom;
  [key: string]: any;
}
