import nock from "nock";
import { PlaylistTracksArgs } from "../../../gql-types";
import { SPOTIFY_API_BASE } from "../../../SpotifyDataSource/constants";

export const getPlaylistMock = (id: string, market: string) =>
  nock(SPOTIFY_API_BASE)
    .get(`/playlists/${id}`)
    .query({
      market,
    })
    .reply(200, {
      collaborative: true,
      description: "string",
      external_urls: {
        spotify: "string",
      },
      followers: {
        href: "string",
        total: 0,
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
      owner: {
        display_name: "string",
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
        type: "user",
        uri: "string",
      },
      public: true,
      snapshot_id: "string",
      type: "string",
      uri: "string",
    });

export const getPlaylistResponseMock = (id: string, market: string) => ({
  collaborative: true,
  description: "string",
  externalUrls: {
    spotify: "string",
  },
  followers: {
    href: "string",
    total: 0,
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
  owner: {
    displayName: "string",
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
    type: "user",
    uri: "string",
  },
  public: true,
  snapshotId: "string",
  type: "string",
  uri: "string",
});

export const getTracksForPlaylistMock = (
  id: string,
  args: PlaylistTracksArgs
) =>
  nock(SPOTIFY_API_BASE)
    .get(`/playlists/${id}/tracks`)
    .query(args)
    .reply(200, {
      items: [
        {
          added_at: "string",
          added_by: {
            display_name: "string",
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
            type: "user",
            uri: "string",
          },
          primary_color: "string",
          is_local: false,
          track: {
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

export const getTracksForPlaylistResponseMock = (
  id: string,
  args: PlaylistTracksArgs
) => ({
  limit: args.limit ?? 20,
  next: args.offset ?? 1,
  offset: args.offset ?? 0,
  previous: args.offset ?? 1,
  total: 4,
  tracks: [
    {
      addedAt: "string",
      addedBy: {
        displayName: "string",
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
        type: "user",
        uri: "string",
      },
      primaryColor: "string",
      isLocal: false,
      track: {
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
    },
  ],
});
