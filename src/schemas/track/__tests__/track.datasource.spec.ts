import { createTestDataSource } from "../../../SpotifyDataSource";
import {
  trackMock,
  trackResponseMock,
  tracksMock,
  tracksResponseMock,
  trackAudioFeaturesMock,
  trackAudioFeaturesResponseMock,
} from "./track.mock";

describe("SpotifyDataSource", () => {
  describe("Track", () => {
    describe("getTrack", () => {
      it("should get a track", async () => {
        trackMock("foo");
        const spotify = await createTestDataSource();

        const tracks = await spotify.getTrack("foo");

        expect(tracks).toEqual(trackResponseMock("foo"));
      });
    });

    describe("getTracks", () => {
      it("should get a list of tracks", async () => {
        tracksMock("foo");
        const spotify = await createTestDataSource();

        const tracks = await spotify.getTracks(["foo"]);

        expect(tracks).toEqual(tracksResponseMock("foo"));
      });
    });

    describe("getTrackAudioFeatures", () => {
      it("should get the audio features for a track", async () => {
        trackAudioFeaturesMock("foo");
        const spotify = await createTestDataSource();

        const tracks = await spotify.getTrackAudioFeatures("foo");

        expect(tracks).toEqual(trackAudioFeaturesResponseMock("foo"));
      });
    });
  });
});
