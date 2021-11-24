import { createTestDataSource } from "../../../SpotifyDataSource";
import {
  getUserMock,
  meMock,
  meResponseMock,
  myPlaylistsMock,
  myPlaylistsResponsemock,
  myTopArtistsMock,
  myTopArtistsResponseMock,
  myTopTracksMock,
  myTopTracksResponseMock,
  userPlaylistMock,
  userPlaylistResponseMock,
  userResponseMock,
} from "./user.mock";

describe("SpotifyDataSource", () => {
  describe("User", () => {
    describe("getMe", () => {
      it("should throw an error if the user hasn't supplied an auth token", async () => {
        const spotify = await createTestDataSource();

        expect(() => spotify.getMe()).rejects.toThrowError(
          "No authorization token provided"
        );
      });

      it("should return a user if spotifyAuthenticationToken is set", async () => {
        meMock("foo");
        const spotify = await createTestDataSource("foo");

        const out = await spotify.getMe();

        expect(out).toEqual(meResponseMock);
      });
    });

    describe("getMyTopTracks", () => {
      it("should throw an error if the user hasn't supplied an auth token", async () => {
        const spotify = await createTestDataSource();

        expect(() => spotify.getMyTopTracks()).rejects.toThrowError(
          "No authorization token provided"
        );
      });
      it("should return my top tracks", async () => {
        myTopTracksMock("foo");
        const spotify = await createTestDataSource("foo");

        const out = await spotify.getMyTopTracks();

        expect(out).toEqual(myTopTracksResponseMock());
      });

      it("should return my top tracks with a configured limit", async () => {
        myTopTracksMock("foo", { limit: 20 });
        const spotify = await createTestDataSource("foo");

        const out = await spotify.getMyTopTracks({ limit: 20 });

        expect(out).toEqual(myTopTracksResponseMock({ limit: 20 }));
      });

      it("should return my top tracks with a configured offset", async () => {
        myTopTracksMock("foo", { offset: 20 });
        const spotify = await createTestDataSource("foo");

        const out = await spotify.getMyTopTracks({ offset: 20 });

        expect(out).toEqual(myTopTracksResponseMock({ offset: 20 }));
      });
    });

    describe("getMyTopArtists", () => {
      it("should throw an error if the user hasn't supplied an auth token", async () => {
        const spotify = await createTestDataSource();

        expect(() => spotify.getMyTopArtists()).rejects.toThrowError(
          "No authorization token provided"
        );
      });
      it("should return my top artists", async () => {
        myTopArtistsMock("foo");
        const spotify = await createTestDataSource("foo");

        const out = await spotify.getMyTopArtists();

        expect(out).toEqual(myTopArtistsResponseMock());
      });

      it("should return my top artists with a configured limit", async () => {
        myTopArtistsMock("foo", { limit: 20 });
        const spotify = await createTestDataSource("foo");

        const out = await spotify.getMyTopArtists({ limit: 20 });

        expect(out).toEqual(myTopArtistsResponseMock({ limit: 20 }));
      });

      it("should return my top artists with a configured offset", async () => {
        myTopArtistsMock("foo", { offset: 20 });
        const spotify = await createTestDataSource("foo");

        const out = await spotify.getMyTopArtists({ offset: 20 });

        expect(out).toEqual(myTopArtistsResponseMock({ offset: 20 }));
      });
    });

    describe("getMyPlaylists", () => {
      it("should throw an error if the user hasn't supplied an auth token", async () => {
        const spotify = await createTestDataSource();

        expect(() => spotify.getMyPlaylists()).rejects.toThrowError(
          "No authorization token provided"
        );
      });
      it("should return my playlists", async () => {
        myPlaylistsMock("foo");
        const spotify = await createTestDataSource("foo");

        const out = await spotify.getMyPlaylists();

        expect(out).toEqual(myPlaylistsResponsemock());
      });

      it("should return my playlist with a configured limit", async () => {
        myPlaylistsMock("foo", { limit: 20 });
        const spotify = await createTestDataSource("foo");

        const out = await spotify.getMyPlaylists({ limit: 20 });

        expect(out).toEqual(myPlaylistsResponsemock({ limit: 20 }));
      });

      it("should return my playlist with a configured offset", async () => {
        myPlaylistsMock("foo", { offset: 20 });
        const spotify = await createTestDataSource("foo");

        const out = await spotify.getMyPlaylists({ offset: 20 });

        expect(out).toEqual(myPlaylistsResponsemock({ offset: 20 }));
      });
    });

    describe("getUser", () => {
      it("should return a user if an id is given", async () => {
        getUserMock("foo");
        const spotify = await createTestDataSource();

        const out = await spotify.getUser("foo");

        expect(out).toEqual(userResponseMock("foo"));
      });

      it("should default to spotify if the id is empty", async () => {
        getUserMock("spotify");
        const spotify = await createTestDataSource();

        const out = await spotify.getUser("");

        expect(out).toEqual(userResponseMock("spotify"));
      });
    });

    describe("getPlaylistsByUser", () => {
      it("should return the playlists for a given user", async () => {
        userPlaylistMock("foo");
        const spotify = await createTestDataSource();

        const out = await spotify.getPlaylistsByUser("foo");

        expect(out).toEqual(userPlaylistResponseMock());
      });
      it("should return the playlists for a given user with limit set", async () => {
        userPlaylistMock("foo", { limit: 20 });
        const spotify = await createTestDataSource();

        const out = await spotify.getPlaylistsByUser("foo", { limit: 20 });

        expect(out).toEqual(userPlaylistResponseMock({ limit: 20 }));
      });
      it("should return the playlists for a given user", async () => {
        userPlaylistMock("foo", { offset: 20 });
        const spotify = await createTestDataSource();

        const out = await spotify.getPlaylistsByUser("foo", { offset: 20 });

        expect(out).toEqual(userPlaylistResponseMock({ offset: 20 }));
      });
    });
  });
});
