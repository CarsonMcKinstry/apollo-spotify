import { DataSource } from "apollo-datasource";
import { RequestOptions } from "apollo-datasource-rest";

import request from "request";

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

export class ClientAuth extends DataSource {
  private accessToken: string | null = null;
  private accessTokenExpiry: number = Date.now();

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
    return Date.now() > this.accessTokenExpiry;
  }

  public isAuthorized() {
    return this.accessToken && this.accessTokenExpired;
  }

  public async attachAccessToken(req: RequestOptions) {
    if (!this.isAuthorized()) {
      await this.authorize();
    }

    req.headers.set("Authorization", `Bearer ${this.accessToken}`);
  }

  override async initialize() {
    if (this.accessTokenExpired || !this.accessToken) {
      await this.authorize();
    }
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
        request.post(authOptions, (err, res, body) => {
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

    this.accessToken = access_token;
    this.accessTokenExpiry = Date.now() + expires_in * 1000;
  }
}
