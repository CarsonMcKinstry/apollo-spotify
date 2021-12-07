import {
  Album,
  Artists,
  Artist,
  AudioFeatures,
  MePlaylistsArgs,
  Playlists,
  Track,
  UserProfilePlaylistsArgs,
  MeTopArtistsArgs,
  QueryTrackArgs,
  QueryTracksArgs,
  QueryArtistsArgs,
  ArtistAlbumsArgs,
  Albums,
  Playlist,
  ArtistTopTracksArgs,
  QueryPlaylistArgs,
  PlaylistTracksArgs,
  QueryAlbumArgs,
  QueryAlbumsArgs,
  AlbumTracksArgs,
  QueryNewReleasesArgs,
  QueryCategoryArgs,
  Category,
  QueryCategoriesArgs,
  Categories,
  Me,
  MeTopTracksArgs,
  Tracks,
  UserProfile,
  QuerySearchArgs,
  Search,
  QuerySearchTracksArgs,
  ItemType,
  QuerySearchAlbumsArgs,
  QuerySearchArtistsArgs,
  PlaylistTracks,
} from "./../gql-types";
import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";
import {
  AlbumAPIResponse,
  APIPaginationResponse,
  ArtistAPIResponse,
  AudioFeaturesAPIResponse,
  FullSearchResponse,
  MeAPIResponse,
  PlaylistAPIResponse,
  PlaylistTrackAPIResponse,
  TrackAPIResponse,
  UserProfileAPIResponse,
} from "./types";
import { SpotifyGraphqlContext } from "../types";
import { accessToken, authorize, isAuthorized } from "./authorization";
import { AuthenticationError } from "apollo-server";
import { mapResponse } from "../utils/mapResponse";
import { SPOTIFY_API_BASE } from "./constants";
import { omitNil } from "../utils/omitNil";
import { configurePagination } from "../utils/configurePagination";

export class SpotifyDataSource extends RESTDataSource<SpotifyGraphqlContext> {
  override baseURL = SPOTIFY_API_BASE;

  constructor(private clientId: string, private clientSecret: string) {
    super();

    if (!this.clientId) {
      throw new Error("Spotify client id not provided");
    }

    if (!this.clientSecret) {
      throw new Error("Spotify client secret not provided");
    }
  }

  override async willSendRequest(req: RequestOptions) {
    let authorizationHeader: string = "";

    /**
     * If the user has logged in client side, you can set the `spotifyAuthenticationToken`
     * in the context to the user client access token, and we will use it for their requests
     *
     * Otherwise, we check if the application is authenticated, authenticate if necessary
     * and use that token
     */
    if (this.context.spotifyAuthenticationToken) {
      authorizationHeader = this.context.spotifyAuthenticationToken;
    } else {
      if (!isAuthorized()) {
        await authorize(this.clientId, this.clientSecret);
      }
      authorizationHeader = accessToken!;
    }

    if (!authorizationHeader.startsWith("Bearer")) {
      authorizationHeader = `Bearer ${authorizationHeader}`;
    }

    req.headers.set("Authorization", authorizationHeader);
  }

  /* =========================== USER =========================== */

  /**
   * Checks where the user is currently logged in
   */
  private checkAuth() {
    if (!this.context.spotifyAuthenticationToken) {
      throw new AuthenticationError("No authorization token provided");
    }
  }

  private mapUserProfile(user: UserProfileAPIResponse): UserProfile {
    return mapResponse<UserProfileAPIResponse, UserProfile>(user, [
      ["external_urls", "externalUrls"],
      ["display_name", "displayName"],
    ]);
  }

  public async getMe(): Promise<Me> {
    this.checkAuth();
    const { explicit_content, ...me } = await this.get<MeAPIResponse>("/me");

    const explicitContent = explicit_content
      ? mapResponse(explicit_content, [
          ["filter_enabled", "filterEnabled"],
          ["filter_locked", "filterLocked"],
        ])
      : null;

    return {
      ...mapResponse<MeAPIResponse, Me>(me, [
        ["external_urls", "externalUrls"],
        ["display_name", "displayName"],
        ["explicit_content", "explicitContent"],
      ]),
      explicitContent,
    };
  }

  public async getMyTopTracks(args: MeTopTracksArgs = {}): Promise<Tracks> {
    this.checkAuth();
    const topTracks = await this.get<APIPaginationResponse<TrackAPIResponse>>(
      "/me/top/tracks",
      omitNil(args)
    );

    const tracksPagination = configurePagination(topTracks);

    const { items, ...rest } = tracksPagination;

    return {
      ...rest,
      tracks: items.map((item) => this.mapTrack(item)),
    };
  }

  public async getMyTopArtists(args: MeTopArtistsArgs = {}): Promise<Artists> {
    this.checkAuth();
    const topArtists = await this.get<APIPaginationResponse<ArtistAPIResponse>>(
      "/me/top/artists",
      omitNil(args)
    );

    const topTrackPagination = configurePagination(topArtists);

    const { items, ...rest } = topTrackPagination;

    return {
      ...rest,
      artists: items.map((item) => this.mapArtist(item)),
    };
  }

  public async getMyPlaylists(args: MePlaylistsArgs = {}): Promise<Playlists> {
    this.checkAuth();
    const playlistsResponse = await this.get<
      APIPaginationResponse<PlaylistAPIResponse>
    >("/me/playlists", omitNil(args));

    const playlists = configurePagination(playlistsResponse);

    const { items, ...rest } = playlists;

    return {
      ...rest,
      playlists: items.map((item) => this.mapPlaylist(item)),
    };
  }

  public async getUser(id: string): Promise<UserProfile> {
    const isSpotify = id === "";

    const user = await this.get<UserProfileAPIResponse>(
      `/users/${isSpotify ? "spotify" : id}`
    );

    return this.mapUserProfile(user);
  }

  /* ========================== TRACKS ========================== */

  private mapTrack(track: TrackAPIResponse): Track {
    const { album, artists, ...rest } = mapResponse<
      TrackAPIResponse,
      Omit<Track, "album" | "artists"> & {
        album?: AlbumAPIResponse;
        artists?: ArtistAPIResponse[];
      }
    >(track, [
      ["external_urls", "externalUrls"],
      ["external_ids", "externalIds"],
      ["available_markets", "availableMarkets"],
      ["duration_ms", "duration"],
      ["disc_number", "discNumber"],
      ["track_number", "trackNumber"],
      ["preview_url", "previewUrl"],
      ["is_local", "isLocal"],
      ["is_playable", "isPlayable"],
    ]);

    return {
      ...rest,
      album: album ? this.mapAlbum(album) : null!,
      artists: artists ? artists.map((artist) => this.mapArtist(artist)) : [],
    };
  }

  public async getTrack(
    id: string,
    args: Omit<QueryTrackArgs, "id"> = {}
  ): Promise<Track> {
    const track = await this.get<TrackAPIResponse>(
      `/tracks/${id}`,
      omitNil(args)
    );

    return this.mapTrack(track);
  }

  public async getTracks(
    ids: string[],
    args: Omit<QueryTracksArgs, "ids"> = {}
  ): Promise<Track[]> {
    const { tracks } = await this.get<{ tracks: TrackAPIResponse[] }>(
      "/tracks",
      {
        ids,
        ...omitNil(args),
      }
    );

    return tracks.map((track) => this.mapTrack(track));
  }

  public async getTrackAudioFeatures(id: string): Promise<AudioFeatures> {
    const features = await this.get<AudioFeaturesAPIResponse>(
      `/audio-features/${id}`
    );

    return mapResponse<AudioFeaturesAPIResponse, AudioFeatures>(features, [
      ["duration_ms", "duration"],
      ["time_signature", "timeSignature"],
    ]);
  }

  /* ========================== ALBUMS ========================== */

  private mapAlbum(album: AlbumAPIResponse): Album {
    const { artists = [], ...rest } = mapResponse<
      AlbumAPIResponse,
      Omit<Album, "artists"> & { artists: ArtistAPIResponse[] }
    >(album, [
      ["available_markets", "availableMarkets"],
      ["album_type", "albumType"],
      ["release_date", "releaseDate"],
      ["release_date_precision", "releaseDatePrecision"],
      ["total_tracks", "totalTracks"],
      ["external_urls", "externalUrls"],
    ]);

    return {
      ...rest,
      artists: artists.map((artist) => this.mapArtist(artist)),
    };
  }

  public async getAlbum(
    id: string,
    args: Omit<QueryAlbumArgs, "id"> = {}
  ): Promise<Album> {
    const album = await this.get<AlbumAPIResponse>(
      `/albums/${id}`,
      omitNil(args)
    );

    return this.mapAlbum(album);
  }

  public async getAlbums(
    ids: string[],
    args: Omit<QueryAlbumsArgs, "ids"> = {}
  ): Promise<Album[]> {
    const { albums } = await this.get<{ albums: AlbumAPIResponse[] }>(
      "/albums",
      {
        ids,
        ...omitNil(args),
      }
    );

    return albums.map((album) => this.mapAlbum(album));
  }

  public async getTracksForAlbum(
    id: string,
    args: AlbumTracksArgs = {}
  ): Promise<Tracks> {
    const tracksForAlbum = await this.get<
      APIPaginationResponse<TrackAPIResponse>
    >(`/albums/${id}/tracks`, omitNil(args));

    const tracks = configurePagination(tracksForAlbum);

    const { items, ...rest } = tracks;

    return {
      ...rest,
      tracks: items.map((item) => this.mapTrack(item)),
    };
  }

  public async getNewReleases(args: QueryNewReleasesArgs): Promise<Albums> {
    const { albums } = await this.get<{
      albums: APIPaginationResponse<AlbumAPIResponse>;
    }>("/browse/new-releases", omitNil(args));

    const newReleases = configurePagination(albums);

    const { items, ...rest } = newReleases;

    return {
      ...rest,
      albums: items.map((album) => this.mapAlbum(album)),
    };
  }

  /* ========================= ARTISTS ========================== */

  private mapArtist(artist: ArtistAPIResponse): Artist {
    return mapResponse<ArtistAPIResponse, Artist>(artist, [
      ["external_urls", "externalUrls"],
    ]);
  }

  public async getArtist(id: string): Promise<Artist> {
    const artist = await this.get<ArtistAPIResponse>(`/artists/${id}`);

    return this.mapArtist(artist);
  }

  public async getArtists(
    ids: string[],
    args: Omit<QueryArtistsArgs, "ids"> = {}
  ): Promise<Artist[]> {
    const { artists } = await this.get<{ artists: ArtistAPIResponse[] }>(
      "/artists",
      {
        ids,
        ...omitNil(args),
      }
    );

    return artists.map((artist) => this.mapArtist(artist));
  }

  public async getRelatedArtists(id: string): Promise<Artist[]> {
    const { artists } = await this.get<{ artists: ArtistAPIResponse[] }>(
      `/artists/${id}/related-artists`
    );

    return artists.map((artist) => this.mapArtist(artist));
  }

  public async getAlbumsByArtist(
    id: string,
    args: ArtistAlbumsArgs = {}
  ): Promise<Albums> {
    const artistAlbums = await this.get<
      APIPaginationResponse<AlbumAPIResponse>
    >(`/artists/${id}/albums`, omitNil(args));

    const albums = configurePagination(artistAlbums);

    const { items, ...rest } = albums;

    return {
      ...rest,
      albums: items.map((item) => this.mapAlbum(item)),
    };
  }

  public async getTopTracksByArtist(
    id: string,
    args: ArtistTopTracksArgs
  ): Promise<Track[]> {
    const { tracks } = await this.get<{ tracks: TrackAPIResponse[] }>(
      `/artists/${id}/top-tracks`,
      omitNil(args)
    );

    return tracks.map((track) => this.mapTrack(track));
  }

  /* ======================== PLAYLISTS ========================= */

  private mapPlaylist(playlist: PlaylistAPIResponse): Playlist {
    const mappedResponse = mapResponse<
      PlaylistAPIResponse,
      Omit<Playlist, "owner"> & { owner: UserProfileAPIResponse }
    >(playlist, [
      ["snapshot_id", "snapshotId"],
      ["external_urls", "externalUrls"],
    ]);

    const { owner, ...rest } = mappedResponse;

    return {
      owner: this.mapUserProfile(owner),
      ...rest,
    };
  }

  public async getPlaylist(
    id: string,
    args: Omit<QueryPlaylistArgs, "id">
  ): Promise<Playlist> {
    const playlist = await this.get<PlaylistAPIResponse>(
      `/playlists/${id}`,
      omitNil(args)
    );

    return this.mapPlaylist(playlist);
  }

  public mapTracksForPlaylist(
    response: APIPaginationResponse<PlaylistTrackAPIResponse>
  ): PlaylistTracks {
    const tracks = configurePagination(response);

    const { items, ...rest } = tracks;

    return {
      ...rest,
      tracks: items.map((playlistTrack) => {
        const {
          track,
          added_at: addedAt,
          added_by: addedBy,
          is_local: isLocal,
          primary_color: primaryColor,
        } = playlistTrack;

        return {
          addedAt,
          addedBy: this.mapUserProfile(addedBy),
          isLocal,
          primaryColor,
          track: this.mapTrack(track),
        };
      }),
    };
  }

  public async getTracksForPlaylist(
    id: string,
    args: Omit<PlaylistTracksArgs, "id">
  ): Promise<PlaylistTracks> {
    const playlistTracks = await this.get<
      APIPaginationResponse<PlaylistTrackAPIResponse>
    >(`/playlists/${id}/tracks`, omitNil(args));

    return this.mapTracksForPlaylist(playlistTracks);
  }

  public async getPlaylistsByUser(
    id: string,
    args: UserProfilePlaylistsArgs = {}
  ): Promise<Playlists> {
    const userPlaylists = await this.get<APIPaginationResponse<Playlists>>(
      `/users/${id}/playlists`,
      omitNil(args)
    );

    const playlists = configurePagination(userPlaylists);

    return mapResponse<typeof playlists, Playlists>(playlists, [
      ["items", "playlists"],
    ]);
  }

  /* ========================= SEARCH =========================== */

  public async search(
    query: string,
    args: Omit<QuerySearchArgs, "query">
  ): Promise<Search> {
    const {
      albums: rawAlbums,
      artists: rawArtists,
      tracks: rawTracks,
    } = await this.get<FullSearchResponse>(
      "/search",
      omitNil({
        q: query,
        ...args,
      })
    );

    const albums = rawAlbums ? configurePagination(rawAlbums) : null;
    const artists = rawArtists ? configurePagination(rawArtists) : null;
    const tracks = rawTracks ? configurePagination(rawTracks) : null;

    const out: Search = {};

    if (albums) {
      const { items, ...rest } = albums;

      out.albums = {
        ...rest,
        albums: items.map((album) => this.mapAlbum(album)),
      };
    }

    if (artists) {
      const { items, ...rest } = artists;

      out.artists = {
        ...rest,
        artists: items.map((artist) => this.mapArtist(artist)),
      };
    }

    if (tracks) {
      const { items, ...rest } = tracks;

      out.tracks = {
        ...rest,
        tracks: items.map((track) => this.mapTrack(track)),
      };
    }

    return out;
  }

  public async searchTracks(
    query: string,
    args: Omit<QuerySearchTracksArgs, "query"> = {}
  ): Promise<Tracks> {
    const { tracks } = await this.search(query, {
      ...args,
      type: [ItemType.Track],
    });

    if (!tracks) {
      throw new Error(`404: Unable to find tracks for: ${query}`);
    }

    return tracks;
  }

  public async searchAlbums(
    query: string,
    args: Omit<QuerySearchAlbumsArgs, "query"> = {}
  ): Promise<Albums> {
    const { albums } = await this.search(query, {
      ...args,
      type: [ItemType.Album],
    });

    if (!albums) {
      throw new Error(`404: Unable to find albums for: ${query}`);
    }

    return albums;
  }

  public async searchArtists(
    query: string,
    args: Omit<QuerySearchArtistsArgs, "query"> = {}
  ): Promise<Artists> {
    const { artists } = await this.search(query, {
      ...args,
      type: [ItemType.Artist],
    });

    if (!artists) {
      throw new Error(`404: Unable to find artists for: ${query}`);
    }

    return artists;
  }

  /* ========================== BASE ============================ */

  public async getGenres(): Promise<string[]> {
    const { genres } = await this.get<{ genres: string[] }>(
      "/recommendations/available-genre-seeds"
    );

    return genres;
  }

  public async getMarkets(): Promise<string[]> {
    const { markets } = await this.get<{ markets: string[] }>("/markets");

    return markets;
  }

  public async getCategory(
    id: string,
    args: Omit<QueryCategoryArgs, "id"> = {}
  ): Promise<Category> {
    return this.get(`/browse/categories/${id}`, omitNil(args));
  }

  public async getCategories(
    args: QueryCategoriesArgs = {}
  ): Promise<Categories> {
    const { categories } = await this.get<{
      categories: APIPaginationResponse<Category>;
    }>("/browse/categories", omitNil(args));

    const { items, ...rest } = configurePagination(categories);

    return {
      ...rest,
      categories: items,
    };
  }
}
