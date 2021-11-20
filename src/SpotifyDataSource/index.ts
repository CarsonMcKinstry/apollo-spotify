import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";
import { MeAPIResponse } from "./types";
import { Me } from "../gql-types";
import { SpotifyGraphqlContext } from "../types";
import { accessToken, authorize, isAuthorized } from "./authorization";
import { AuthenticationError } from "apollo-server";
import { mapResponse } from "../utils/mapResponse";

export class SpotifyDataSource extends RESTDataSource<SpotifyGraphqlContext> {
  override baseURL = "https://api.spotify.com/v1";

  constructor(private clientId: string, private clientSecret: string) {
    super();

    if (!this.clientId) {
      throw new Error("Spotify client id not provided");
    }

    if (!this.clientSecret) {
      throw new Error("Spotify client secret not provided");
    }
  }

  override async willSendRequest(req: RequestOptions) {
    let authorizationHeader: string = "";

    /**
     * If the user has logged in client side, you can set the `spotifyAuthenticationToken`
     * in the context to the user client access token, and we will use it for their requests
     *
     * Otherwise, we check if the application is authenticated, authenticate if necessary
     * and use that token
     */
    if (this.context.spotifyAuthenticationToken) {
      authorizationHeader = this.context.spotifyAuthenticationToken;
    } else {
      if (!isAuthorized()) {
        await authorize(this.clientId, this.clientSecret);
      }
      authorizationHeader = accessToken!;
    }

    if (!authorizationHeader.startsWith("Bearer")) {
      authorizationHeader = `Bearer ${authorizationHeader}`;
    }

    req.headers.set("Authorization", authorizationHeader);
  }

  private checkAuth() {
    if (!this.context.spotifyAuthenticationToken) {
      throw new AuthenticationError("No authorization token provided");
    }
  }

  /**
   * Gets profile for the currently logged in user
   */
  async getMe(): Promise<Me> {
    this.checkAuth();
    const me = await this.get<MeAPIResponse>("/me");

    return mapResponse<MeAPIResponse, Me>(me, [
      ["display_name", "displayName"],
      ["explicit_content", "explicitContent"],
    ]);
  }
}
