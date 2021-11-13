import { Spotify } from ".";
import { Maybe } from "./gql-types";
import { Resolver } from "./types";

export const fieldResolver =
  <TParent extends { id: string }>(method: keyof Spotify) =>
  <TField extends keyof TParent>(field: TField): Resolver<TParent> =>
  async (parent, _, { dataSources: { spotify } }) => {
    if (field in parent) {
      return parent[field];
    }

    const resolver = spotify[method].bind(spotify);

    const result = await resolver(parent.id);

    return result[field] ?? null;
  };
