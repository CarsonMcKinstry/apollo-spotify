import { createTestDataSource } from "../../../SpotifyDataSource";
import {
  getAlbumMock,
  getAlbumResponseMock,
  getAlbumsMock,
  getAlbumsResponseMock,
  getNewReleasesMock,
  getNewReleasesResponseMock,
  getTracksForAlbumMock,
  getTracksForAlbumResponseMock,
} from "./album.mock";

describe("SpotifyDataSource", () => {
  describe("Album", () => {
    describe("getAlbum", () => {
      it("should return an album", async () => {
        getAlbumMock("foo");
        const spotify = await createTestDataSource();

        const out = await spotify.getAlbum("foo");

        expect(out).toEqual(getAlbumResponseMock("foo"));
      });
    });
    describe("getAlbums", () => {
      it("should return albums", async () => {
        getAlbumsMock("foo");
        const spotify = await createTestDataSource();

        const out = await spotify.getAlbums(["foo"]);

        expect(out).toEqual(getAlbumsResponseMock("foo"));
      });
    });
    describe("getTracksForAlbum", () => {
      it("should return tracks for the given album", async () => {
        getTracksForAlbumMock("foo");
        const spotify = await createTestDataSource();

        const out = await spotify.getTracksForAlbum("foo");

        expect(out).toEqual(getTracksForAlbumResponseMock({}));
      });
      it("should return tracks for the given album with a configured limit", async () => {
        getTracksForAlbumMock("foo", { limit: 20 });
        const spotify = await createTestDataSource();

        const out = await spotify.getTracksForAlbum("foo", { limit: 20 });

        expect(out).toEqual(getTracksForAlbumResponseMock({ limit: 20 }));
      });
      it("should return tracks for the given album with a configured offset", async () => {
        getTracksForAlbumMock("foo", { offset: 20 });
        const spotify = await createTestDataSource();

        const out = await spotify.getTracksForAlbum("foo", { offset: 20 });

        expect(out).toEqual(getTracksForAlbumResponseMock({ offset: 20 }));
      });
    });
    describe("getNewReleases", () => {
      it("should return new releases", async () => {
        getNewReleasesMock({ country: "de" });
        const spotify = await createTestDataSource();

        const out = await spotify.getNewReleases({ country: "de" });

        expect(out).toEqual(getNewReleasesResponseMock({ country: "de" }));
      });
      it("should return new releases with a configured limit", async () => {
        getNewReleasesMock({ country: "de", limit: 20 });
        const spotify = await createTestDataSource();

        const out = await spotify.getNewReleases({ country: "de", limit: 20 });

        expect(out).toEqual(
          getNewReleasesResponseMock({ country: "de", limit: 20 })
        );
      });
      it("should return new releases with a configured offset", async () => {
        getNewReleasesMock({ country: "de", offset: 20 });
        const spotify = await createTestDataSource();

        const out = await spotify.getNewReleases({ country: "de", offset: 20 });

        expect(out).toEqual(
          getNewReleasesResponseMock({ country: "de", offset: 20 })
        );
      });
    });
  });
});
