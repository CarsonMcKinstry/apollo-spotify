import { createTestDataSource } from "../../../SpotifyDataSource";
import {
  getUserMock,
  meMock,
  meResponseMock,
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

    describe("getUsser", () => {
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
