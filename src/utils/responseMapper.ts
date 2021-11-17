import { camelCase } from "lodash";

export const responseMapper = <TResponse, TResult>(
  response: TResponse
): TResult => {
  const entries = Object.entries(response).map(([key, value]) => {
    if (value == null) {
      return [camelCase(key), value];
    }

    if (Array.isArray(value)) {
      return [camelCase(key), value.map(responseMapper)];
    }

    if (typeof value === "object") {
      return [camelCase(key), responseMapper(value)];
    }

    return [camelCase(key), value];
  });

  return Object.fromEntries(entries);
};
