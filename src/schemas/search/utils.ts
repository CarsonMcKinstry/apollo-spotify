import { SearchResponse, Pagination } from "../../gql-types";
import { FullSearchResponse, APISearchResponse } from "../../types";
import { responseMapper } from "../../responseMapper";

export const mapSearchResponse = <TItem>(
  response: APISearchResponse<TItem>,
  remap: string
) => {
  return {
    ...response,
    [remap]: (response.items ?? []).filter(Boolean),
  };
};

export const mapSearchResult = (result: FullSearchResponse): SearchResponse => {
  return Object.fromEntries(
    Object.entries(result)
      .map(([key, value]) => {
        return [key, mapSearchResponse<typeof value>(value, key)];
      })
      .map(([key, value]) => {
        return [key, addNextPrevious(value as any)];
      })
      .map(([key, value]) => {
        return [key, responseMapper(value)];
      })
  );
};

export const addNextPrevious = <TItem>(
  response: APISearchResponse<TItem>
): Pagination => {
  const { limit, offset } = response;

  const next = offset + limit;
  const previous = offset - limit > 0 ? offset - limit : 0;

  return {
    ...response,
    next,
    previous,
  };
};
