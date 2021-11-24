import nock from "nock";
import { SPOTIFY_API_BASE } from "../../../SpotifyDataSource/constants";
export const trackMock = (id: string) =>
  nock(SPOTIFY_API_BASE)
    .get(`/tracks/${id}`)
    .reply(200, {
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

export const trackResponseMock = (id: string) => ({
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

export const tracksMock = (id: string) =>
  nock(SPOTIFY_API_BASE)
    .get(`/tracks`)
    .query({
      ids: id,
    })
    .reply(200, {
      tracks: [
        {
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
        },
      ],
    });

export const tracksResponseMock = (id: string) => [
  {
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
  },
];

export const trackAudioFeaturesMock = (id: string) =>
  nock(SPOTIFY_API_BASE).get(`/audio-features/${id}`).reply(200, {
    acousticness: 0.00242,
    danceability: 0.585,
    duration_ms: 237040,
    energy: 0.842,
    id,
    instrumentalness: 0.00686,
    key: 9,
    liveness: 0.0866,
    loudness: -5.883,
    mode: 0,
    speechiness: 0.0556,
    tempo: 118.211,
    time_signature: 4,

    type: "audio_features",
    uri: "spotify:track:2takcwOaAZWiXQijPHIx7B",
    valence: 0.428,
  });

export const trackAudioFeaturesResponseMock = (id: string) => ({
  acousticness: 0.00242,
  danceability: 0.585,
  duration: 237040,
  energy: 0.842,
  id,
  instrumentalness: 0.00686,
  key: 9,
  liveness: 0.0866,
  loudness: -5.883,
  mode: 0,
  speechiness: 0.0556,
  tempo: 118.211,
  timeSignature: 4,
  type: "audio_features",
  uri: "spotify:track:2takcwOaAZWiXQijPHIx7B",
  valence: 0.428,
});
