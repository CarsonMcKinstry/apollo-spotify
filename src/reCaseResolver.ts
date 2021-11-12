import { snakeCase, camelCase } from "lodash";
import { Spotify } from "./SpotifyDataSource";
import { ReCaseResolver } from "./types";

export const reCaseResolver =
  (getRequestResolver: (dataSources: Spotify) => Spotify[keyof Spotify]) =>
  (field: string): ReCaseResolver => {
    const snakeCaseField = snakeCase(field);
    const camelCaseField = camelCase(field);

    return async (parent, _, { dataSources }) => {
      const resolver = getRequestResolver(dataSources.spotify);

      if (snakeCaseField in parent) {
        return parent[snakeCaseField];
      }

      if (camelCaseField in parent) {
        return parent[camelCaseField];
      }

      const result = await resolver(parent.id);

      if (snakeCaseField in result) {
        return result[snakeCaseField];
      }

      if (camelCaseField in result) {
        return result[camelCaseField];
      }
    };
  };
