import { Spotify } from "./../SpotifyDataSource";
import { Resolver } from "../types";

export const fieldResolver =
  <TParent extends { id: string }>(
    getMethod: (spotify: Spotify) => Spotify[keyof Spotify]
  ) =>
  <TField extends keyof TParent>(field: TField): Resolver<TParent> =>
  async (parent, _, { dataSources: { spotify } }) => {
    if (field in parent) {
      return parent[field];
    }

    const resolver = (getMethod(spotify) as Function).bind(spotify);

    const result = await resolver(parent.id);

    return result[field] ?? null;
  };
