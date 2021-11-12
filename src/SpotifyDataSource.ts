import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

import request from "request";

import { AlbumAPIResponse, ArtistAPIResponse } from "./types";

interface ClientGrant {
  access_token: string;
  expires_in: number;
  token_type: string;
}

interface AuthFailure {
  error: string;
  error_description: string;
}

const isClientGrant = (obj: any): obj is ClientGrant => {
  return "access_token" in obj && "expires_in" in obj && "token_type" in obj;
};

const isAuthFailure = (obj: any): obj is AuthFailure => {
  return "error" in obj && "error_description" in obj;
};

let accessToken: string | null = null;
let accessTokenExpiry: number = Date.now();

export class Spotify extends RESTDataSource {
  override baseURL = "https://api.spotify.com/v1";

  constructor(
    private clientId: string = (process.env.SPOTIFY_CLIENT_ID = ""),
    private clientSecret: string = (process.env.SPOTIFY_CLIENT_SECRET = "")
  ) {
    super();
    if (!this.clientId) {
      throw new Error("SPOTIFY_CLIENT_ID not provided in the env");
    }

    if (!this.clientSecret) {
      throw new Error("SPOTIFY_CLIENT_SECRET not provided in the env");
    }
  }

  private get accessTokenExpired() {
    return Date.now() > accessTokenExpiry;
  }

  private isAuthorized() {
    return accessToken && this.accessTokenExpired;
  }

  override async initialize(config: any) {
    if (this.accessTokenExpired || !accessToken) {
      await this.authorize();
    }

    super.initialize(config);
  }

  public async authorize() {
    const authOptions = {
      url: "https://accounts.spotify.com/api/token",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(this.clientId + ":" + this.clientSecret).toString(
            "base64"
          ),
      },
      form: {
        grant_type: "client_credentials",
      },
      json: true,
    };

    const { access_token, expires_in } = await new Promise<ClientGrant>(
      (resolve, reject) => {
        request.post(authOptions, (err, _, body) => {
          if (err) {
            return reject(err);
          }

          if (isClientGrant(body)) {
            return resolve(body);
          }

          if (isAuthFailure(body)) {
            return reject(body);
          }

          return reject(
            new Error(
              "Unknown error occurred while authenticationt to the spotify api"
            )
          );
        });
      }
    );

    accessToken = access_token;
    accessTokenExpiry = Date.now() + expires_in * 1000;
  }

  override async willSendRequest(req: RequestOptions) {
    if (!this.isAuthorized) {
      await this.authorize();
    }

    req.headers.set("Authorization", `Bearer ${accessToken}`);
  }

  /**
   * Artist Queries
   */
  getArtist(id: string) {
    return this.get<ArtistAPIResponse>(`/artists/${id}`);
  }

  getArtists(ids: string[]) {
    return this.get<{ artists: ArtistAPIResponse[] }>(`/artists`, {
      ids,
    });
  }

  /**
   * Album Queries
   */
  getAlbum(id: string, market?: string) {
    const query: Record<string, Object> = {};

    if (market) {
      query.market = market;
    }

    return this.get<AlbumAPIResponse>(`/albums/${id}`, query);
  }

  getAlbums(ids: string[], market?: string) {
    return this.get<AlbumAPIResponse[]>("/albums", {
      ids,
      market,
    });
  }
}
