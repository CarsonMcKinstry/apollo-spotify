import { SearchResponse, Pagination } from "../../gql-types";
import { FullSearchResponse, APISearchResponse } from "../../types";
import { responseMapper } from "../../utils";

export const mapSearchResponse = <TItem>(
  response: APISearchResponse<TItem>,
  remap: string
) => {
  return {
    ...response,
    [remap]: (response.items ?? []).filter(Boolean),
  };
};

export const mapSearchResult = (
  result: FullSearchResponse
): Required<SearchResponse> => {
  const out = Object.fromEntries(
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

  for (const key in ["tracks", "albums", "artists"]) {
    if (!(key in out)) {
      out[key] = {
        limit: 1,
        offset: 0,
        next: 0,
        prev: 0,
        total: 0,
        [key]: [],
      };
    }
  }

  return out;
};

export const addNextPrevious = <TItem>(
  response: APISearchResponse<TItem>
): Pagination => {
  const { limit, offset, next: nextUri, previous: prevUri, ...rest } = response;

  const out: Pagination = {
    limit,
    offset,
    next: null,
    previous: null,
    ...rest,
  };

  if (nextUri !== null) {
    out.next = offset + limit;
  }

  if (prevUri !== null) {
    out.previous = offset - limit;
  }

  return out;
};
