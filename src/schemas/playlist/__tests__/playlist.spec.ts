import { createTestDataSource } from "../../../SpotifyDataSource";
import {
  getPlaylistMock,
  getPlaylistResponseMock,
  getTracksForPlaylistMock,
  getTracksForPlaylistResponseMock,
} from "./playlist.mock";

describe("SpotifyDataSource", () => {
  describe("Playlist", () => {
    describe("getPlaylist", () => {
      it("should return a playlist", async () => {
        getPlaylistMock("foo", "de");
        const spotify = await createTestDataSource();

        const out = await spotify.getPlaylist("foo", { market: "de" });

        expect(out).toEqual(getPlaylistResponseMock("foo", "de"));
      });
    });
    describe("getTracksForPlaylist", () => {
      it("should return tracks for a playlist", async () => {
        getTracksForPlaylistMock("foo", { market: "de" });
        const spotify = await createTestDataSource();

        const out = await spotify.getTracksForPlaylist("foo", { market: "de" });

        expect(out).toEqual(
          getTracksForPlaylistResponseMock("foo", { market: "de" })
        );
      });
      it("should return tracks for a playlist with a limit", async () => {
        getTracksForPlaylistMock("foo", { market: "de", limit: 10 });
        const spotify = await createTestDataSource();

        const out = await spotify.getTracksForPlaylist("foo", {
          market: "de",
          limit: 10,
        });

        expect(out).toEqual(
          getTracksForPlaylistResponseMock("foo", { market: "de", limit: 10 })
        );
      });
      it("should return tracks for a playlist with an offset", async () => {
        getTracksForPlaylistMock("foo", { market: "de", offset: 10 });
        const spotify = await createTestDataSource();

        const out = await spotify.getTracksForPlaylist("foo", {
          market: "de",
          offset: 10,
        });

        expect(out).toEqual(
          getTracksForPlaylistResponseMock("foo", { market: "de", offset: 10 })
        );
      });
    });
  });
});
