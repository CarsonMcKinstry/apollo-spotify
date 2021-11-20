import { HTTPCache } from "apollo-datasource-rest";
import { SpotifyDataSource } from "..";
import { SpotifyGraphqlContext } from "../../types";

async function createSpotify(token?: string) {
  const spotify = new SpotifyDataSource("fake_id", "fake_secret");

  spotify.context = {
    spotifyAuthenticationToken: token,
  } as SpotifyGraphqlContext;

  return spotify;
}

describe("SpotifyDataSource", () => {
  describe("User", () => {
    describe("getMe", () => {
      it("should throw an error if the user hasn't supplied an auth token", async () => {
        const spotify = await createSpotify();

        expect(() => spotify.getMe()).rejects.toThrowError(
          "No authorization token provided"
        );
      });

      // it('should return a user if spotifyAuthenticationToken is set', () => {

      // })
    });
  });
});
