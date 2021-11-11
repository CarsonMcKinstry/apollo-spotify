import { DataSource } from "apollo-datasource";

import { ClientAuth } from "./ClientAuth";
import { Artists } from "./Artists";

const clientAuth = new ClientAuth(
  process.env.SPOTIFY_CLIENT_ID,
  process.env.SPOTIFY_CLIENT_SECRET
);

export const dataSources = () => {
  return {
    spotifyClientAuth: clientAuth,
    artists: new Artists(),
  };
};

export type DataSources = ReturnType<typeof dataSources>;
