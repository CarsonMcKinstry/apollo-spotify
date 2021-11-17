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
  Pagination,
  AudioFeatures,
  Me,
  UserProfile,
} from "./gql-types";
import { Spotify } from "./SpotifyDataSource";

export interface SpotifySchemaContext {
  spotifyAuthorizationToken?: string;
  dataSources: {
    spotify: Spotify;
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

type MeCaseCorrections = "externalUrls" | "displayName" | "explicitContent";

interface ExplicitContentSettingsAPIResponse {
  filter_enabled: boolean;
  filter_locked: boolean;
}

export interface MeAPIResponse extends Omit<Me, MeCaseCorrections> {
  external_urls: ExternalUrls;
  displayName: string;
  explicitContent?: ExplicitContentSettingsAPIResponse;
}

type UserProfileCaseCorrections = "";

export interface UserProfileAPIResponse
  extends Omit<UserProfile, UserProfileCaseCorrections> {
  display_name: string;
  external_urls: ExternalUrls;
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
  tracks?: APISearchResponse<TrackAPIResponse>;
}

type AudioFeaturesCaseCorrections = "duration" | "time_signature";

export interface AudioFeaturesAPIResponse
  extends Omit<AudioFeatures, AudioFeaturesCaseCorrections> {
  duration_ms: number;
  time_signature: number;
}
