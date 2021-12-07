import { createTestDataSource } from "../../../SpotifyDataSource";
import {
  getCategoriesMock,
  getCategoriesResponseMock,
  getCategoryMock,
  getCategoryResponseMock,
  getGenresMock,
  getGenresResponseMock,
  getMarketsMock,
  getMarketsResponseMock,
} from "./base.mock";
describe("SpotifyDataSource", () => {
  describe("Base", () => {
    describe("getGenres", () => {
      it("should return a list of genre seeds", async () => {
        getGenresMock();

        const spotify = await createTestDataSource();

        const out = await spotify.getGenres();

        expect(out).toEqual(getGenresResponseMock());
      });
    });

    describe("getMarkets", () => {
      it("should return a list of markets", async () => {
        getMarketsMock();

        const spotify = await createTestDataSource();

        const out = await spotify.getMarkets();

        expect(out).toEqual(getMarketsResponseMock());
      });
    });

    describe("getCategory", () => {
      it("should return a single category", async () => {
        getCategoryMock("foo");
        const spotify = await createTestDataSource();

        const out = await spotify.getCategory("foo");

        expect(out).toEqual(getCategoryResponseMock("foo"));
      });
    });

    describe("getCategories", () => {
      it("should return an array of categories", async () => {
        getCategoriesMock("foo");
        const spotify = await createTestDataSource();

        const out = await spotify.getCategories();

        expect(out).toEqual(getCategoriesResponseMock("foo"));
      });
      it("should return an array of categories with a limit", async () => {
        getCategoriesMock("foo", { limit: 20 });
        const spotify = await createTestDataSource();

        const out = await spotify.getCategories({ limit: 20 });

        expect(out).toEqual(getCategoriesResponseMock("foo", { limit: 20 }));
      });
      it("should return an array of categories with an offset", async () => {
        getCategoriesMock("foo", { offset: 20 });
        const spotify = await createTestDataSource();

        const out = await spotify.getCategories({ offset: 20 });

        expect(out).toEqual(getCategoriesResponseMock("foo", { offset: 20 }));
      });
    });
  });
});
