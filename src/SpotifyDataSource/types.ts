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
  | "linkedFrom";

type ArtistsReCaseKeys = CommonReCaseKeys;

type MeReCaseKeys = CommonReCaseKeys | "displayName" | "explicitContent";

type PlaylistReCaseKeys = CommonReCaseKeys | "snapshotId" | "tracks";

type AudioFeaturesCaseCorrections = "duration" | "time_signature";

export type ArtistAPIResponse = ReCase<Artist, ArtistsReCaseKeys, {}>;

export type AlbumAPIResponse = ReCase<
  Album,
  AlbumReCaseKeys,
  {
    album_type: AlbumType;
    available_markets?: string[];
    release_date: string;
    release_date_precision: DatePrecision;
    total_tracks: number;
    [key: string]: any;
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
    is_playable: boolean;
    is_local: boolean;
    linked_from: LinkedFrom;
    [key: string]: any;
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
    displayName: string;
    explicitContent?: ExplicitContentSettingsAPIResponse;
  }
>;

export type PlaylistAPIResponse = ReCase<
  Playlist,
  PlaylistReCaseKeys,
  {
    snapshot_id: string;
    tracks: APIPaginationResponse<PlaylistTrack>;
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
