import { createTestDataSource } from "../../../SpotifyDataSource";
import {
  getUserMock,
  meMock,
  meResponseMock,
  myTopTracksMock,
  myTopTracksResponseMock,
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
  });
});
