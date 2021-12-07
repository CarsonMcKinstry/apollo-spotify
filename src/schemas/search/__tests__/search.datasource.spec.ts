import { ItemType } from "../../../gql-types";
import { createTestDataSource } from "../../../SpotifyDataSource";
import { searchMock, searchResponseMock } from "./search.mock";

describe("SpotifyDataSource", () => {
  describe("Search", () => {
    describe("search", () => {
      it("should search for tracks", async () => {
        searchMock("foo", {
          query: "foo",
          type: [ItemType.Track],
        });
        const spotify = await createTestDataSource();

        const out = await spotify.search("foo", { type: [ItemType.Track] });

        expect(out).toEqual(
          searchResponseMock("foo", {
            query: "foo",
            type: [ItemType.Track],
          })
        );
      });
      it("should search for albums", async () => {
        searchMock("foo", {
          query: "foo",
          type: [ItemType.Album],
        });
        const spotify = await createTestDataSource();

        const out = await spotify.search("foo", { type: [ItemType.Album] });

        expect(out).toEqual(
          searchResponseMock("foo", {
            query: "foo",
            type: [ItemType.Album],
          })
        );
      });
      it("should search for artists", async () => {
        searchMock("foo", {
          query: "foo",
          type: [ItemType.Artist],
        });
        const spotify = await createTestDataSource();

        const out = await spotify.search("foo", { type: [ItemType.Artist] });

        expect(out).toEqual(
          searchResponseMock("foo", {
            query: "foo",
            type: [ItemType.Artist],
          })
        );
      });
      it("should search for all at once", async () => {
        searchMock("foo", {
          query: "foo",
          type: [ItemType.Artist, ItemType.Album, ItemType.Track],
        });
        const spotify = await createTestDataSource();

        const out = await spotify.search("foo", {
          type: [ItemType.Artist, ItemType.Album, ItemType.Track],
        });

        expect(out).toEqual(
          searchResponseMock("foo", {
            query: "foo",
            type: [ItemType.Artist, ItemType.Album, ItemType.Track],
          })
        );
      });
    });
    describe("searchArtists", () => {
      it("should search for artists", async () => {
        searchMock("foo", {
          query: "foo",
          type: [ItemType.Artist],
        });
        const spotify = await createTestDataSource();

        const out = await spotify.searchArtists("foo");

        expect(out).toEqual(
          searchResponseMock("foo", {
            query: "foo",
            type: [ItemType.Artist],
          }).artists
        );
      });
    });
    describe("searchAlbums", () => {
      it("should search for albums", async () => {
        searchMock("foo", {
          query: "foo",
          type: [ItemType.Album],
        });
        const spotify = await createTestDataSource();

        const out = await spotify.searchAlbums("foo");

        expect(out).toEqual(
          searchResponseMock("foo", {
            query: "foo",
            type: [ItemType.Album],
          }).albums
        );
      });
    });
    describe("searchTracks", () => {
      it("should search for tracks", async () => {
        searchMock("foo", {
          query: "foo",
          type: [ItemType.Track],
        });
        const spotify = await createTestDataSource();

        const out = await spotify.searchTracks("foo");

        expect(out).toEqual(
          searchResponseMock("foo", {
            query: "foo",
            type: [ItemType.Track],
          }).tracks
        );
      });
    });
  });
});
