import { SpotifyDataSource } from "./dataSource";
import { SpotifyGraphqlContext } from "../types";
import { InMemoryLRUCache } from "apollo-server-caching";

export async function createTestDataSource(token?: string) {
  const spotify = new SpotifyDataSource("fake_id", "fake_secret");

  await spotify.initialize({
    cache: new InMemoryLRUCache(),
    context: {} as SpotifyGraphqlContext,
  });

  spotify.context = {
    spotifyAuthenticationToken: token,
  } as SpotifyGraphqlContext;

  return spotify;
}
