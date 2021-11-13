import { Spotify } from ".";
import { Resolver } from "./types";

export const fieldResolver =
  <TParent>(getRequestMethod: (spotify: Spotify) => Spotify[keyof Spotify]) =>
  <TField extends keyof TParent>(field: TField): Resolver<TParent[TField]> =>
  async (parent, _, { dataSources: { spotify } }) => {
    if (field in parent) {
      return parent[field];
    }

    const resolver = getRequestMethod(spotify).bind(spotify);

    const result = await resolver(parent.id);

    return result[field];
  };
