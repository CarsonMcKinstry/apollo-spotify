import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";
import { AuthenticationError, ApolloError } from "apollo-server";
import { snakeCase } from "lodash";
import request from "request";
import {
  Album,
  AlbumResponse,
  Artist,
  ItemType,
  TopTracks,
  Track,
  TrackResponse,
  RelatedArtists,
  Category,
  CategoryResponse,
  QueryCategoriesArgs,
  AudioFeatures,
  Me,
  MeTopTracksArgs,
  MeTopArtistsArgs,
  ArtistResponse,
  UserProfile,
  Playlist,
  PlaylistTracksArgs,
  PlaylistTrack,
  PlaylistTrackResponse,
  MePlaylistsArgs,
  PlaylistResponse,
  UserProfilePlaylistsArgs,
} from "./gql-types";

import {
  mapSearchResponse,
  mapSearchResult,
  addNextPrevious,
} from "./schemas/search";

import {
  AlbumAPIResponse,
  APISearchResponse,
  ArtistAPIResponse,
  AudioFeaturesAPIResponse,
  FullSearchResponse,
  MeAPIResponse,
  PlaylistAPIResponse,
  SpotifySchemaContext,
  TrackAPIResponse,
  UserProfileAPIResponse,
} from "./types";
import { omitNull, responseMapper } from "./utils";

interface ClientGrant {
  access_token: string;
  expires_in: number;
  token_type: string;
}

interface AuthFailure {
  error: string;
  error_description: string;
}

const isClientGrant = (obj: any): obj is ClientGrant => {
  return "access_token" in obj && "expires_in" in obj && "token_type" in obj;
};

const isAuthFailure = (obj: any): obj is AuthFailure => {
  return "error" in obj && "error_description" in obj;
};

let accessToken: string | null = null;
let accessTokenExpiry: number = Date.now();

export class Spotify extends RESTDataSource<SpotifySchemaContext> {
  override baseURL = "https://api.spotify.com/v1";

  constructor(
    private clientId: string = (process.env.SPOTIFY_CLIENT_ID = ""),
    private clientSecret: string = (process.env.SPOTIFY_CLIENT_SECRET = "")
  ) {
    super();
    if (!this.clientId) {
      throw new Error("SPOTIFY_CLIENT_ID not provided in the env");
    }

    if (!this.clientSecret) {
      throw new Error("SPOTIFY_CLIENT_SECRET not provided in the env");
    }
  }

  private get accessTokenExpired() {
    return Date.now() > accessTokenExpiry;
  }

  private isAuthorized() {
    return accessToken && this.accessTokenExpired;
  }

  override async initialize(config: any) {
    if (this.accessTokenExpired || !accessToken) {
      await this.authorize();
    }

    super.initialize(config);
  }

  public async authorize() {
    const authOptions = {
      url: "https://accounts.spotify.com/api/token",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(this.clientId + ":" + this.clientSecret).toString(
            "base64"
          ),
      },
      form: {
        grant_type: "client_credentials",
      },
      json: true,
    };

    const { access_token, expires_in } = await new Promise<ClientGrant>(
      (resolve, reject) => {
        request.post(authOptions, (err, _, body) => {
          if (err) {
            return reject(err);
          }

          if (isClientGrant(body)) {
            return resolve(body);
          }

          if (isAuthFailure(body)) {
            return reject(body);
          }

          return reject(
            new Error(
              "Unknown error occurred while authenticationt to the spotify api"
            )
          );
        });
      }
    );
    accessToken = access_token;
    accessTokenExpiry = Date.now() + expires_in * 1000;
  }

  override async willSendRequest(req: RequestOptions) {
    if (this.context.spotifyAuthorizationToken) {
      req.headers.set("Authorization", this.context.spotifyAuthorizationToken);
    } else {
      if (!this.isAuthorized) {
        await this.authorize();
      }
      req.headers.set("Authorization", `Bearer ${accessToken}`);
    }
  }

  /**
   * Artist Queries
   */
  async getArtist(id: string): Promise<Artist> {
    const artistResponse = await this.get<ArtistAPIResponse>(`/artists/${id}`);

    return responseMapper(artistResponse);
  }

  async getArtists(ids: string[]): Promise<Artist[]> {
    const { artists } = await this.get<{ artists: ArtistAPIResponse[] }>(
      `/artists`,
      {
        ids,
      }
    );

    return artists.map((artist) => responseMapper(artist));
  }

  /**
   * Album Queries
   */
  async getAlbum(id: string, market?: string): Promise<Album> {
    const query: Record<string, Object> = {};

    if (market) {
      query.market = market;
    }

    const album = await this.get<AlbumAPIResponse>(`/albums/${id}`, query);

    return responseMapper(album);
  }

  async getAlbums(ids: string[], market?: string): Promise<Album[]> {
    const query: Record<string, Object> = {
      ids,
    };

    if (market) {
      query.market = market;
    }
    const { albums } = await this.get<{ albums: AlbumAPIResponse[] }>(
      "/albums",
      query
    );

    return albums.map((album) => responseMapper(album));
  }

  /**
   * Track Queries
   */
  async getTrack(id: string, market?: string): Promise<Track> {
    const query: Record<string, Object> = {};

    if (market) {
      query.market = market;
    }

    const { duration_ms, ...restTrack } = await this.get<TrackAPIResponse>(
      `/tracks/${id}`,
      query
    );

    const track = {
      duration: duration_ms,
      ...restTrack,
    };

    return responseMapper(track);
  }

  async getTrackAudioFeatures(id: string): Promise<AudioFeatures> {
    const audioFeatures = await this.get<AudioFeaturesAPIResponse>(
      `/audio-features/${id}`
    );

    const { duration_ms, ...rest } = audioFeatures;

    return responseMapper({
      ...rest,
      duration: duration_ms,
    });
  }

  async getTracks(ids: string[], market?: string): Promise<Track[]> {
    const query: Record<string, Object> = {
      ids,
    };

    if (market) {
      query.market = market;
    }

    const { tracks } = await this.get<{ tracks: TrackAPIResponse[] }>(
      "/tracks",
      query
    );

    return tracks.map(({ duration_ms, ...restTrack }) => {
      const track = {
        duration: duration_ms,
        ...restTrack,
      };

      return responseMapper(track);
    });
  }

  async search(
    q: string,
    type: ItemType[],
    options: {
      market?: string | null;
      limit?: number | null;
      offset?: number | null;
      includeExternal?: boolean | null;
    } = {}
  ) {
    const { includeExternal, ...restOptions } = options;

    const query: Record<string, Object> = omitNull({
      offset: 0,
      limit: 20,
      query: q,
      type,
      ...restOptions,
    });

    if (includeExternal) {
      query.includeExternal = "audio";
    }

    const result = await this.get<FullSearchResponse>("/search", query);

    return mapSearchResult(result);
  }

  async getTracksByAlbum(
    albumId: string,
    options: {
      market?: string | null;
      limit?: number | null;
      offset?: number | null;
    } = {}
  ): Promise<TrackResponse> {
    const { limit = 20, offset = 0, market } = options;

    const query: Record<string, Object> = omitNull({
      limit,
      offset,
    });

    if (market) {
      query.market = market;
    }

    const result = await this.get<APISearchResponse<TrackAPIResponse>>(
      `/albums/${albumId}/tracks`,
      query
    );

    return responseMapper(addNextPrevious(mapSearchResponse(result, "tracks")));
  }

  async getAlbumsByArtist(
    artistId: string,
    options: {
      market?: string | null;
      limit?: number | null;
      offset?: number | null;
    } = {}
  ): Promise<AlbumResponse> {
    const { limit = 20, offset = 0, market } = options;

    const query: Record<string, Object> = omitNull({
      limit,
      offset,
    });

    if (market) {
      query.market = market;
    }

    const result = await this.get<APISearchResponse<AlbumAPIResponse>>(
      `/artists/${artistId}/albums`,
      query
    );

    return responseMapper(addNextPrevious(mapSearchResponse(result, "albums")));
  }

  async getTopTracksByArtist(
    artistId: string,
    market: string
  ): Promise<TopTracks> {
    const query: Record<string, Object> = {};

    if (market) {
      query.market = market;
    }

    const { tracks } = await this.get<{ tracks: TrackAPIResponse[] }>(
      `/artists/${artistId}/top-tracks`,
      query
    );
    return {
      tracks: tracks.map((track) => responseMapper(track)),
    };
  }

  async getRelatedArtistsByArtist(artistId: string): Promise<RelatedArtists> {
    const { artists } = await this.get<{ artists: ArtistAPIResponse[] }>(
      `/artists/${artistId}/related-artists`
    );

    return {
      artists: artists.map((artist) => responseMapper(artist)),
    };
  }

  async getCategory(
    id: string,
    options: { country?: string; locale?: string } = {}
  ): Promise<Category> {
    return this.get<Category>(`/browse/categories/${id}`, options);
  }

  async getCategories(query: QueryCategoriesArgs): Promise<CategoryResponse> {
    const { categories } = await this.get<{
      categories: APISearchResponse<Category>;
    }>("/browse/categories", omitNull(query));

    return responseMapper(
      addNextPrevious(mapSearchResponse<Category>(categories, "categories"))
    );
  }

  async getNewReleases(
    options: { country?: string; limit?: number; offset?: number } = {}
  ): Promise<AlbumResponse> {
    const { albums } = await this.get<{ albums: APISearchResponse<Album> }>(
      "/browse/new-releases",
      options
    );

    return responseMapper(
      addNextPrevious(mapSearchResponse<Album>(albums, "albums"))
    );
  }

  async getMe(): Promise<Me> {
    if (!this.context.spotifyAuthorizationToken) {
      throw new AuthenticationError("No authorization token provided");
    }

    const me = await this.get<MeAPIResponse>("/me");

    return responseMapper(me);
  }

  async getMyTopTracks(args: MeTopTracksArgs = {}): Promise<TrackResponse> {
    if (!this.context.spotifyAuthorizationToken) {
      throw new AuthenticationError("No authorization token provided");
    }

    const { timeRange, ...queryRest } = args;

    const query = {
      ...queryRest,
      time_range: timeRange ? snakeCase(timeRange) : null,
    };

    try {
      const topTracks = await this.get<APISearchResponse<Track>>(
        "/me/top/tracks",
        omitNull(query)
      );

      return responseMapper(
        addNextPrevious(mapSearchResponse<Track>(topTracks, "tracks"))
      );
    } catch (err) {
      const { extensions } = err as ApolloError;

      if (extensions.response.status === 403) {
        throw new AuthenticationError("Missing permissions for top tracks");
      }

      throw err;
    }
  }

  async getMyTopArtists(args: MeTopArtistsArgs = {}): Promise<ArtistResponse> {
    if (!this.context.spotifyAuthorizationToken) {
      throw new AuthenticationError("No authorization token provided");
    }

    const { timeRange, ...queryRest } = args;

    const query = {
      ...queryRest,
      time_range: timeRange ? snakeCase(timeRange) : null,
    };

    try {
      const topArtists = await this.get<APISearchResponse<Artist>>(
        "/me/top/artists",
        omitNull(query)
      );

      return responseMapper(
        addNextPrevious(mapSearchResponse<Artist>(topArtists, "artists"))
      );
    } catch (err) {
      const { extensions } = err as ApolloError;

      if (extensions.response.status === 403) {
        throw new AuthenticationError("Missing permissions for top tracks");
      }

      throw err;
    }
  }

  async getMyPlaylists(args: MePlaylistsArgs = {}): Promise<PlaylistResponse> {
    if (!this.context.spotifyAuthorizationToken) {
      throw new AuthenticationError("No authorization token provided");
    }

    try {
      const playlists = await this.get<APISearchResponse<Playlist>>(
        "/me/playlists",
        omitNull(args)
      );

      return responseMapper(
        addNextPrevious(mapSearchResponse<Playlist>(playlists, "playlists"))
      );
    } catch (err) {
      const { extensions } = err as ApolloError;

      if (extensions.response.status === 403) {
        throw new AuthenticationError("Missing permissions for playlists");
      }

      throw err;
    }
  }

  async getUser(id: string): Promise<UserProfile> {
    const isSpotify = id === "";
    const user = await this.get<UserProfileAPIResponse>(
      `/users/${isSpotify ? "spotify" : id}`
    );

    return responseMapper(user);
  }

  async getUserPlaylists(
    id: string,
    args: UserProfilePlaylistsArgs
  ): Promise<PlaylistResponse> {
    const playlists = await this.get<APISearchResponse<Playlist>>(
      `/users/${id}/playlists`,
      omitNull(args)
    );

    return responseMapper(
      addNextPrevious(mapSearchResponse<Playlist>(playlists, "playlists"))
    );
  }

  async getGenres(): Promise<string[]> {
    const { genres } = await this.get<{ genres: string[] }>(
      "/recommendations/available-genre-seeds"
    );

    return genres;
  }

  async getMarkets(): Promise<string[]> {
    const { markets } = await this.get<{ markets: string[] }>("/markets");

    return markets;
  }

  async getPlaylist(
    id: string,
    market?: string | null
  ): Promise<Playlist | null> {
    const query: Record<string, Object> = {};

    if (market) {
      query.market = market;
    }

    const playlist = await this.get<PlaylistAPIResponse>(
      `/playlists/${id}`,
      query
    );

    const { tracks, ...rest } = playlist;

    return responseMapper(rest);
  }

  async getPlaylistTracks(
    id: string,
    args: PlaylistTracksArgs
  ): Promise<PlaylistTrackResponse> {
    const tracks = await this.get(`/playlists/${id}/tracks`, omitNull(args));

    return responseMapper(
      addNextPrevious(mapSearchResponse<PlaylistTrack>(tracks, "tracks"))
    );
  }
}
