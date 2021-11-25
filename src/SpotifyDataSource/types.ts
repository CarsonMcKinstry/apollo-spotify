import {
  Album,
  ExternalUrls,
  AlbumType,
  DatePrecision,
  Artist,
  Track,
  ExternalIds,
  LinkedFrom,
  Me,
  Playlist,
  PlaylistTrack,
  AudioFeatures,
  UserProfile,
} from "../gql-types";
import { Maybe } from "../types";

export interface ClientGrant {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export const isClientGrant = (response: any): response is ClientGrant => {
  return ["access_token", "expires_in", "token_type"].every(
    (key) => key in response
  );
};

export interface AuthFailure {
  error: string;
  error_description: string;
}

export const isAuthFailure = (response: any): response is AuthFailure => {
  return ["error", "error_description"].every((key) => key in response);
};

/* API Response Types */

type ReCase<Base, Keys extends string, Corrections> = Omit<Base, Keys> &
  Corrections;

type CommonReCaseKeys = "externalUrls" | "availableMarkets";

/* ReCase strings for correctly typing what comes from the API */
type CommonReCases = {
  external_urls: ExternalUrls;
};

type AlbumReCaseKeys =
  | CommonReCaseKeys
  | "albumType"
  | "releaseDate"
  | "releaseDatePrecision"
  | "totalTracks";

type TrackReCaseKeys =
  | CommonReCaseKeys
  | "duration"
  | "discNumber"
  | "trackNumber"
  | "previewUrl"
  | "externalIds"
  | "isPlayable"
  | "isLocal"
  | "linkedFrom"
  | "album"
  | "artists";

type ArtistsReCaseKeys = CommonReCaseKeys;

type MeReCaseKeys = CommonReCaseKeys | "displayName" | "explicitContent";

type UserProfileReCaseKeys = CommonReCaseKeys | "displayName";

type PlaylistReCaseKeys = CommonReCaseKeys | "snapshotId" | "tracks" | "owner";

type AudioFeaturesCaseCorrections = "duration" | "timeSignature";

export type ArtistAPIResponse = ReCase<
  Artist,
  ArtistsReCaseKeys,
  {
    external_urls: ExternalUrls;
  }
>;

export type AlbumAPIResponse = ReCase<
  Album,
  AlbumReCaseKeys,
  {
    external_urls: ExternalUrls;
    album_type: AlbumType;
    available_markets?: string[];
    release_date: string;
    release_date_precision: DatePrecision;
    total_tracks: number;
  }
>;

export type TrackAPIResponse = ReCase<
  Track,
  TrackReCaseKeys,
  {
    available_markets?: string[];
    duration_ms: number;
    disc_number: number;
    track_number: number;
    preview_url: string;
    external_ids: ExternalIds;
    external_urls: ExternalUrls;
    is_playable: boolean;
    is_local: boolean;
    linked_from: LinkedFrom;
    album: AlbumAPIResponse;
    artists: ArtistAPIResponse[];
  }
>;
interface ExplicitContentSettingsAPIResponse {
  filter_enabled: boolean;
  filter_locked: boolean;
}

export type MeAPIResponse = ReCase<
  Me,
  MeReCaseKeys,
  {
    external_urls: ExternalUrls;
    display_name: string;
    explicit_content?: ExplicitContentSettingsAPIResponse;
  }
>;

export type UserProfileAPIResponse = ReCase<
  UserProfile,
  UserProfileReCaseKeys,
  {
    external_urls: ExternalUrls;
    display_name: string;
  }
>;

export type PlaylistAPIResponse = ReCase<
  Playlist,
  PlaylistReCaseKeys,
  {
    external_urls: ExternalUrls;
    snapshot_id: string;
    owner: UserProfileAPIResponse;
    // tracks: APIPaginationResponse<TrackAPIResponse>;
  }
>;

export interface AudioFeaturesAPIResponse
  extends Omit<AudioFeatures, AudioFeaturesCaseCorrections> {
  duration_ms: number;
  time_signature: number;
}

/* Search releated response types */

interface APIPagination {
  limit: number;
  offset: number;
  total: number;
  next: Maybe<string>;
  previous: Maybe<string>;
}

export interface APIPaginationResponse<I> extends APIPagination {
  items: I[];
}

export type FullSearchResponse = {
  albums?: APIPaginationResponse<AlbumAPIResponse>;
  artists?: APIPaginationResponse<ArtistAPIResponse>;
  tracks?: APIPaginationResponse<TrackAPIResponse>;
};
