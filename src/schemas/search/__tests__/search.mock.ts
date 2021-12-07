import nock from "nock";
import { SPOTIFY_API_BASE } from "./../../../SpotifyDataSource/constants";
import { ItemType, QuerySearchArgs } from "../../../gql-types";
import { omitNil } from "../../../utils/omitNil";

const trackMock = (id: string) => ({
  id,
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
});

const albumMock = (id: string, market?: string | null) => ({
  album_type: "compilation",
  total_tracks: 9,
  available_markets: [market ?? "CA"],
  external_urls: {
    spotify: "string",
  },

  id,
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
      followers: {
        href: "string",
        total: 0,
      },
      genres: ["Prog rock", "Grunge"],
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
});

const artistMock = (id: string) => ({
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

const paginationMock = (
  type: any,
  args: { limit?: number | null; offset?: number | null }
) => ({
  items: [type],
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

export const searchMock = (
  id: string,
  { query: q, type: itemTypes, ...args }: QuerySearchArgs
) => {
  const out: any = {};

  for (const type of itemTypes) {
    switch (type) {
      case ItemType.Album:
        out.albums = paginationMock(albumMock(id, args.market), args);
        break;
      case ItemType.Artist:
        out.artists = paginationMock(artistMock(id), args);
        break;
      case ItemType.Track:
        out.tracks = paginationMock(trackMock(id), args);
    }
  }

  return nock(SPOTIFY_API_BASE)
    .get("/search")
    .query(
      omitNil({
        q,
        type: itemTypes.join(","),
        ...args,
      })
    )
    .reply(200, out);
};

const trackResponseMock = (id: string) => ({
  id,
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
});
const albumResponseMock = (id: string, market?: string | null) => ({
  albumType: "compilation",
  totalTracks: 9,
  availableMarkets: [market ?? "CA"],
  externalUrls: {
    spotify: "string",
  },
  id,
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
      followers: {
        href: "string",
        total: 0,
      },
      genres: ["Prog rock", "Grunge"],
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
});
const artistResponseMock = (id: string) => ({
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

const paginationResponseMock = (
  type: any,
  typeName: string,
  args: { limit?: number | null; offset?: number | null }
) => ({
  [typeName]: [type],
  limit: args.limit ?? 20,
  next: args.offset ?? 1,
  offset: args.offset ?? 0,
  previous: args.offset ?? 1,
  total: 4,
});

export const searchResponseMock = (id: string, args: QuerySearchArgs) => {
  const out: any = {};
  for (const type of args.type) {
    switch (type) {
      case ItemType.Album:
        out.albums = paginationResponseMock(
          albumResponseMock(id, args.market),
          "albums",
          args
        );
        break;
      case ItemType.Artist:
        out.artists = paginationResponseMock(
          artistResponseMock(id),
          "artists",
          args
        );
        break;
      case ItemType.Track:
        out.tracks = paginationResponseMock(
          trackResponseMock(id),
          "tracks",
          args
        );
    }
  }
  return out;
};
