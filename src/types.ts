import { DataSource } from "apollo-datasource";
import {
  Resolver as RawResolver,
  Resolvers as RawResolvers,
  Artist,
  ExternalUrls,
  Album,
  AlbumType,
  DatePrecision,
  Track,
  ExternalIds,
  LinkedFrom,
  Episode,
  ResumePoint,
  Show,
  Pagination,
} from "./gql-types";
import { Spotify } from "./SpotifyDataSource";

export interface SpotifySchemaContext {
  [key: string]: any;
  dataSources: {
    spotify: Spotify;
    [key: string]: DataSource<any>;
  };
}

export type Resolvers = RawResolvers<SpotifySchemaContext>;

export type Resolver<TParent> = RawResolver<any, TParent, SpotifySchemaContext>;

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
  available_markets?: string[];
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
  available_markets?: string[];
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

type EpisodeCaseCorrections =
  | "externalUrls"
  | "audioPreviewUrl"
  | "htmlDescription"
  | "isExternallyPlayable"
  | "isPlayable"
  | "releaseDate"
  | "releaseDatePrecision"
  | "resumePoint"
  | "duration";

export interface EpisodeAPIResponse
  extends Omit<Episode, EpisodeCaseCorrections> {
  external_urls: ExternalUrls;
  audio_preview_url: string;
  html_description: string;
  is_externally_hosted: boolean;
  is_playable: boolean;
  release_date: string;
  release_date_precision: DatePrecision;
  resume_point: ResumePoint;
  duration_ms: number;
}

type ShowCaseCorrections =
  | "htmlDescription"
  | "externalUrls"
  | "isExternallyHosted"
  | "mediaType"
  | "availableMarkets";

export interface ShowAPIResponse extends Omit<Show, ShowCaseCorrections> {
  external_urls: ExternalUrls;
  is_externally_hosted: boolean;
  html_description: string;
  media_type: number;
  available_markets?: string[];
}

export interface APISearchResponse<TItem> extends Pagination {
  items: TItem[];
  limit: number;
  offset: number;
  total: number;
}

export interface FullSearchResponse {
  albums?: APISearchResponse<AlbumAPIResponse>;
  artists?: APISearchResponse<ArtistAPIResponse>;
  episodes?: APISearchResponse<EpisodeAPIResponse>;
  shows?: APISearchResponse<ShowAPIResponse>;
  tracks?: APISearchResponse<TrackAPIResponse>;
}
