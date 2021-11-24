import { createTestDataSource } from "../../../SpotifyDataSource";
import {
  artistMock,
  artistResponseMock,
  artistsMock,
  artistsResponseMock,
  getArtistAlbumsMock,
  getArtistAlbumsResponseMock,
  getArtistTopTracksMock,
  getArtistsTopTracksResponseMock,
  relatedArtistsMock,
  relatedArtistsResponseMock,
} from "./artist.mock";

describe("SpotifyDataSource", () => {
  describe("Artists", () => {
    describe("getArtist", () => {
      it("should return an artist", async () => {
        artistMock("foo");
        const spotify = await createTestDataSource();

        const out = await spotify.getArtist("foo");

        expect(out).toEqual(artistResponseMock("foo"));
      });
    });

    describe("getArtists", () => {
      it("should return an array of artists", async () => {
        artistsMock("foo");
        const spotify = await createTestDataSource();

        const out = await spotify.getArtists(["foo"]);

        expect(out).toEqual(artistsResponseMock("foo"));
      });
    });

    describe("getRelatedArtists", () => {
      it("should return related artsits for a given artist", async () => {
        relatedArtistsMock("foo", "bar");
        const spotify = await createTestDataSource();

        const out = await spotify.getRelatedArtists("foo");

        expect(out).toEqual(relatedArtistsResponseMock("bar"));
      });
    });

    describe("getAlbumsByArtist", () => {
      it("should return an artists albums", async () => {
        getArtistAlbumsMock("foo");
        const spotify = await createTestDataSource();

        const out = await spotify.getAlbumsByArtist("foo");

        expect(out).toEqual(getArtistAlbumsResponseMock());
      });

      it("should return an artists albums with a configured limit", async () => {
        getArtistAlbumsMock("foo", { limit: 20 });
        const spotify = await createTestDataSource();

        const out = await spotify.getAlbumsByArtist("foo", { limit: 20 });

        expect(out).toEqual(getArtistAlbumsResponseMock({ limit: 20 }));
      });

      it("should return an artists albums with a configured offset", async () => {
        getArtistAlbumsMock("foo", { offset: 20 });
        const spotify = await createTestDataSource();

        const out = await spotify.getAlbumsByArtist("foo", { offset: 20 });

        expect(out).toEqual(getArtistAlbumsResponseMock({ offset: 20 }));
      });
    });

    describe("getTopTracksByArtist", () => {
      it("should return the top tracks for an artist", async () => {
        getArtistTopTracksMock("foo", "de");

        const spotify = await createTestDataSource();

        const out = await spotify.getTopTracksByArtist("foo", { market: "de" });
        expect(out).toEqual(getArtistsTopTracksResponseMock("foo", "de"));
      });
    });
  });
});
