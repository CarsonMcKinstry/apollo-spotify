import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";
import { DataSources } from "./dataSources";

export class BaseSpotifyDataSource extends RESTDataSource<{
  dataSources: DataSources;
}> {
  override baseURL = "https://api.spotify.com/v1";

  override async willSendRequest(req: RequestOptions) {
    await this.context.dataSources.spotifyClientAuth.attachAccessToken(req);
  }
}
