import nock from "nock";
import { QueryCategoriesArgs, QueryCategoryArgs } from "../../../gql-types";
import { SPOTIFY_API_BASE } from "../../../SpotifyDataSource/constants";
import { omitNil } from "../../../utils/omitNil";
export const getGenresMock = () =>
  nock(SPOTIFY_API_BASE)
    .get("/recommendations/available-genre-seeds")
    .reply(200, {
      genres: ["alternative", "samba"],
    });

export const getGenresResponseMock = () => ["alternative", "samba"];

export const getMarketsMock = () =>
  nock(SPOTIFY_API_BASE)
    .get("/markets")
    .reply(200, {
      markets: ["CA", "BR", "IT"],
    });

export const getMarketsResponseMock = () => ["CA", "BR", "IT"];

export const getCategoryMock = (
  id: string,
  args: Omit<QueryCategoryArgs, "id"> = {}
) =>
  nock(SPOTIFY_API_BASE)
    .get(`/browse/categories/${id}`)
    .query(omitNil(args))
    .reply(200, {
      icons: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          height: 300,
          width: 300,
        },
      ],
      id,
      name: "EQUAL",
    });
export const getCategoryResponseMock = (id: string) => ({
  icons: [
    {
      url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      height: 300,
      width: 300,
    },
  ],
  id,
  name: "EQUAL",
});

export const getCategoriesMock = (
  id: string,
  args: Omit<QueryCategoriesArgs, "ids"> = {}
) =>
  nock(SPOTIFY_API_BASE)
    .get("/browse/categories")
    .query(omitNil(args))
    .reply(200, {
      items: [
        {
          icons: [
            {
              url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
              height: 300,
              width: 300,
            },
          ],
          id,
          name: "EQUAL",
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

export const getCategoriesResponseMock = (
  id: string,
  args: Omit<QueryCategoriesArgs, "ids"> = {}
) => ({
  categories: [
    {
      icons: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          height: 300,
          width: 300,
        },
      ],
      id,
      name: "EQUAL",
    },
  ],
  total: 4,
  limit: args.limit ?? 20,
  next: args.offset ?? 1,
  offset: args.offset ?? 0,
  previous: args.offset ?? 1,
});
