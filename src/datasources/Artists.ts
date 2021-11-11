import { Artist, ExternalUrls } from "../gql-types";
import { BaseSpotifyDataSource } from "./BaseSpotifyDataSource";

export interface ArtistAPIResponse extends Omit<Artist, "externalUrls"> {
  external_urls: ExternalUrls;
}

export class Artists extends BaseSpotifyDataSource {
  getArtist(id: string) {
    return this.get<ArtistAPIResponse>(`/artists/${id}`);
  }

  getArtists(ids: string[]) {
    return this.get<{ artists: ArtistAPIResponse[] }>(`/artists`, {
      ids,
    });
  }
}
