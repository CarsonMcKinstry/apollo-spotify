import { camelCase } from "lodash";

export const responseMapper = <TResponse, TResult>(
  response: TResponse
): TResult => {
  const entries = Object.entries(response).map(([key, value]) => {
    return [camelCase(key), value];
  });

  return Object.fromEntries(entries);
};
