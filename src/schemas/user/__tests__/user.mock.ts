import nock from "nock";
import {
  MePlaylistsArgs,
  MeTopArtistsArgs,
  MeTopTracksArgs,
  UserProfilePlaylistsArgs,
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
      items: [
        {
          id: "string",
          name: "string",
          type: "track",
          available_markets: ["CA"],
          disc_number: 0,
          track_number: 0,
          duration_ms: 0,
          explicit: true,

          popularity: 0,
          restrictions: {
            reason: "string",
          },

          uri: "string",
          preview_url: "string",
          external_ids: {
            isrc: "string",
            ean: "string",
            upc: "string",
          },
          external_urls: {
            spotify: "string",
          },
          is_playable: true,

          is_local: true,
          album: {
            album_type: "compilation",
            total_tracks: 9,
            available_markets: ["CA", "BR", "IT"],
            external_urls: {
              spotify: "string",
            },
            href: "string",
            id: "2up3OPMp9Tb4dAKM2erWXQ",
            images: [
              {
                url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
                height: 300,
                width: 300,
              },
            ],
            name: "string",
            release_date: "1981-12",
            release_date_precision: "year",
            restrictions: {
              reason: "market",
            },
            type: "album",
            uri: "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
            artists: [
              {
                external_urls: {
                  spotify: "string",
                },
                href: "string",
                id: "string",
                name: "string",
                type: "artist",
                uri: "string",
              },
            ],
          },
          artists: [
            {
              external_urls: {
                spotify: "string",
              },
              followers: {
                href: "string",
                total: 0,
              },
              genres: ["Prog rock", "Grunge"],
              href: "string",
              id: "string",
              images: [
                {
                  url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
                  height: 300,
                  width: 300,
                },
              ],
              name: "string",
              popularity: 0,
              type: "artist",
              uri: "string",
            },
          ],

          href: "string",
        },
      ],
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
  tracks: [
    {
      id: "string",
      name: "string",
      type: "track",
      availableMarkets: ["CA"],
      discNumber: 0,
      trackNumber: 0,
      duration: 0,
      explicit: true,

      popularity: 0,
      restrictions: {
        reason: "string",
      },

      uri: "string",
      previewUrl: "string",
      externalIds: {
        isrc: "string",
        ean: "string",
        upc: "string",
      },
      externalUrls: {
        spotify: "string",
      },
      isPlayable: true,

      isLocal: true,
      album: {
        albumType: "compilation",
        totalTracks: 9,
        availableMarkets: ["CA", "BR", "IT"],
        externalUrls: {
          spotify: "string",
        },
        href: "string",
        id: "2up3OPMp9Tb4dAKM2erWXQ",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            height: 300,
            width: 300,
          },
        ],
        name: "string",
        releaseDate: "1981-12",
        releaseDatePrecision: "year",
        restrictions: {
          reason: "market",
        },
        type: "album",
        uri: "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
        artists: [
          {
            externalUrls: {
              spotify: "string",
            },
            href: "string",
            id: "string",
            name: "string",
            type: "artist",
            uri: "string",
          },
        ],
      },
      artists: [
        {
          externalUrls: {
            spotify: "string",
          },
          followers: {
            href: "string",
            total: 0,
          },
          genres: ["Prog rock", "Grunge"],
          href: "string",
          id: "string",
          images: [
            {
              url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
              height: 300,
              width: 300,
            },
          ],
          name: "string",
          popularity: 0,
          type: "artist",
          uri: "string",
        },
      ],

      href: "string",
    },
  ],
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
      items: [
        {
          external_urls: {
            spotify: "string",
          },
          followers: {
            href: "string",
            total: 0,
          },
          genres: ["Prog rock", "Grunge"],
          href: "string",
          id: "string",
          images: [
            {
              url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
              height: 300,
              width: 300,
            },
          ],
          name: "string",
          popularity: 0,
          type: "artist",
          uri: "string",
        },
      ],
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
  artists: [
    {
      externalUrls: {
        spotify: "string",
      },
      followers: {
        href: "string",
        total: 0,
      },
      genres: ["Prog rock", "Grunge"],
      href: "string",
      id: "string",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          height: 300,
          width: 300,
        },
      ],
      name: "string",
      popularity: 0,
      type: "artist",
      uri: "string",
    },
  ],
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
