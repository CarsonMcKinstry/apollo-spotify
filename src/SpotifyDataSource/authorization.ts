import { Maybe } from "../types";
import {
  ClientGrant,
  isClientGrant,
  AuthFailure,
  isAuthFailure,
} from "./types";
import request from "request";

export let accessToken: Maybe<string> = null;
let accessTokenExpiry: number = Date.now();

/**
 * Tells where or not the access token has expired
 */
const accessTokenExpired = () => {
  return Date.now() > accessTokenExpiry;
};

/**
 * Shortcut for determining if the
 */
export const isAuthorized = () => {
  return accessToken && !accessTokenExpired();
};

export const authorize = async (clientId: string, clientSecret: string) => {
  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(clientId + ":" + clientSecret).toString("base64"),
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
            "Unknown error occurred while authenticating to the Spotify API:"
          )
        );
      });
    }
  );

  accessToken = access_token;
  accessTokenExpiry = Date.now() + expires_in * 1000;
};
