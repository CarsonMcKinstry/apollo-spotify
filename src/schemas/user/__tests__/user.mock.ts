import nock from "nock";
import { UserProfilePlaylistsArgs } from "../../../../_old/src/gql-types";
import {
  MePlaylistsArgs,
  MeTopArtistsArgs,
  MeTopTracksArgs,
} from "../../../gql-types";
import { SPOTIFY_API_BASE } from "../../../SpotifyDataSource/constants";

export const meMock = (token: string) =>
  nock(SPOTIFY_API_BASE, {
    reqheaders: {
      Authorization: "Bearer " + token,
    },
  })
    .get("/me")
    .reply(200, {
      country: "string",
      display_name: "string",
      email: "string",
      explicit_content: {
        filter_enabled: true,
        filter_locked: true,
      },
      external_urls: {
        spotify: "string",
      },
      followers: {
        href: "string",
        total: 0,
      },
      href: "string",
      id: "string",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          height: 300,
          width: 300,
        },
      ],
      product: "string",
      type: "string",
      uri: "string",
    });

export const meResponseMock = {
  country: "string",
  displayName: "string",
  email: "string",
  explicitContent: {
    filterEnabled: true,
    filterLocked: true,
  },
  externalUrls: {
    spotify: "string",
  },
  followers: {
    href: "string",
    total: 0,
  },
  href: "string",
  id: "string",
  images: [
    {
      url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      height: 300,
      width: 300,
    },
  ],
  product: "string",
  type: "string",
  uri: "string",
};

export const getUserMock = (id: string) =>
  nock(SPOTIFY_API_BASE)
    .get("/users/" + id)
    .reply(200, {
      display_name: "string",
      external_urls: {
        spotify: "string",
      },
      followers: {
        href: "string",
        total: 0,
      },
      href: "string",
      id,
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          height: 300,
          width: 300,
        },
      ],
      type: "user",
      uri: "string",
    });

export const userResponseMock = (id: string) => ({
  displayName: "string",
  externalUrls: {
    spotify: "string",
  },
  followers: {
    href: "string",
    total: 0,
  },
  href: "string",
  id,
  images: [
    {
      url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      height: 300,
      width: 300,
    },
  ],
  type: "user",
  uri: "string",
});

export const myTopTracksMock = (token: string, args: MeTopTracksArgs = {}) =>
  nock(SPOTIFY_API_BASE, {
    reqheaders: {
      Authorization: "Bearer " + token,
    },
  })
    .get("/me/top/tracks")
    .query(args)
    .reply(200, {
      items: [],
      limit: args.limit ?? 20,
      next: `https://api.spotify.com/v1/me/tracks?offset=${
        args.offset ?? 1
      }&limit=${args.limit ?? 1}`,
      offset: args.offset ?? 0,
      previous: `https://api.spotify.com/v1/me/tracks?offset=${
        args.offset ?? 1
      }&limit=${args.limit ?? 1}`,
      total: 4,
    });

export const myTopTracksResponseMock = (args: MeTopTracksArgs = {}) => ({
  tracks: [],
  limit: args.limit ?? 20,
  next: args.offset ?? 1,
  offset: args.offset ?? 0,
  previous: args.offset ?? 1,
  total: 4,
});

export const myTopArtistsMock = (token: string, args: MeTopArtistsArgs = {}) =>
  nock(SPOTIFY_API_BASE, {
    reqheaders: {
      Authorization: "Bearer " + token,
    },
  })
    .get("/me/top/artists")
    .query(args)
    .reply(200, {
      items: [],
      limit: args.limit ?? 20,
      next: `https://api.spotify.com/v1/me/artists?offset=${
        args.offset ?? 1
      }&limit=${args.limit ?? 1}`,
      offset: args.offset ?? 0,
      previous: `https://api.spotify.com/v1/me/artists?offset=${
        args.offset ?? 1
      }&limit=${args.limit ?? 1}`,
      total: 4,
    });

export const myTopArtistsResponseMock = (args: MeTopArtistsArgs = {}) => ({
  artists: [],
  limit: args.limit ?? 20,
  next: args.offset ?? 1,
  offset: args.offset ?? 0,
  previous: args.offset ?? 1,
  total: 4,
});

export const myPlaylistsMock = (token: string, args: MePlaylistsArgs = {}) =>
  nock(SPOTIFY_API_BASE, {
    reqheaders: {
      Authorization: "Bearer " + token,
    },
  })
    .get("/me/playlists")
    .query(args)
    .reply(200, {
      items: [],
      limit: args.limit ?? 20,
      next: `https://api.spotify.com/v1/me/playlists?offset=${
        args.offset ?? 1
      }&limit=${args.limit ?? 1}`,
      offset: args.offset ?? 0,
      previous: `https://api.spotify.com/v1/me/playlists?offset=${
        args.offset ?? 1
      }&limit=${args.limit ?? 1}`,
      total: 4,
    });

export const myPlaylistsResponsemock = (args: MePlaylistsArgs = {}) => ({
  playlists: [],
  limit: args.limit ?? 20,
  next: args.offset ?? 1,
  offset: args.offset ?? 0,
  previous: args.offset ?? 1,
  total: 4,
});

export const userPlaylistMock = (
  id: string,
  args: UserProfilePlaylistsArgs = {}
) =>
  nock(SPOTIFY_API_BASE)
    .get(`/users/${id}/playlists`)
    .query(args)
    .reply(200, {
      items: [],
      limit: args.limit ?? 20,
      next: `https://api.spotify.com/v1/me/playlists?offset=${
        args.offset ?? 1
      }&limit=${args.limit ?? 1}`,
      offset: args.offset ?? 0,
      previous: `https://api.spotify.com/v1/me/playlists?offset=${
        args.offset ?? 1
      }&limit=${args.limit ?? 1}`,
      total: 4,
    });

export const userPlaylistResponseMock = (
  args: UserProfilePlaylistsArgs = {}
) => ({
  playlists: [],
  limit: args.limit ?? 20,
  next: args.offset ?? 1,
  offset: args.offset ?? 0,
  previous: args.offset ?? 1,
  total: 4,
});
