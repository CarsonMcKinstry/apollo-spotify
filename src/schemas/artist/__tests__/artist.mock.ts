import nock from "nock";
import { ArtistAlbumsArgs, ArtistTopTracksArgs } from "../../../gql-types";
import { SPOTIFY_API_BASE } from "../../../SpotifyDataSource/constants";

export const artistMock = (id: string) =>
  nock(SPOTIFY_API_BASE)
    .get(`/artists/${id}`)
    .reply(200, {
      external_urls: {
        spotify: "string",
      },
      followers: {
        href: "string",
        total: 0,
      },
      genres: ["Prog rock", "Grunge"],
      href: "string",
      id,
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
    });

export const artistResponseMock = (id: string) => ({
  externalUrls: {
    spotify: "string",
  },
  followers: {
    href: "string",
    total: 0,
  },
  genres: ["Prog rock", "Grunge"],
  href: "string",
  id,
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
});

export const artistsMock = (id: string) =>
  nock(SPOTIFY_API_BASE)
    .get("/artists")
    .query({
      ids: id,
    })
    .reply(200, {
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
          id,
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
    });

export const artistsResponseMock = (id: string) => [
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
    id,
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
];

export const relatedArtistsMock = (id: string, relatedId: string) =>
  nock(SPOTIFY_API_BASE)
    .get(`/artists/${id}/related-artists`)
    .reply(200, {
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
          id: relatedId,
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
    });

export const relatedArtistsResponseMock = (relatedId: string) => [
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
    id: relatedId,
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
];

export const getArtistAlbumsMock = (id: string, args: ArtistAlbumsArgs = {}) =>
  nock(SPOTIFY_API_BASE)
    .get(`/artists/${id}/albums`)
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

export const getArtistAlbumsResponseMock = (args: ArtistAlbumsArgs = {}) => ({
  albums: [],
  total: 4,
  limit: args.limit ?? 20,
  next: args.offset ?? 1,
  offset: args.offset ?? 0,
  previous: args.offset ?? 1,
});

export const getArtistTopTracksMock = (id: string, market: string) =>
  nock(SPOTIFY_API_BASE)
    .get(`/artists/${id}/top-tracks`)
    .query({ market })
    .reply(200, {
      tracks: [
        {
          id,
          name: "string",
          type: "track",
          available_markets: [market],
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
            available_markets: [market],
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
    });

export const getArtistsTopTracksResponseMock = (id: string, market: string) => [
  {
    id,
    name: "string",
    type: "track",
    availableMarkets: [market],
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
      availableMarkets: [market],
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
];
