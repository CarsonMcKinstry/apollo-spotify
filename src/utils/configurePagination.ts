import { Pagination } from "../gql-types";
import { APIPaginationResponse } from "../SpotifyDataSource/types";

export const configurePagination = <T>(
  pagination: APIPaginationResponse<T>
) => {
  const {
    next: apiNext,
    previous: apiPrev,
    limit,
    offset,
    ...rest
  } = pagination;

  const out: Pagination & { items: T[]; total: number } = {
    limit,
    offset,
    next: null,
    previous: null,
    ...rest,
  };

  if (apiNext != null) {
    const { searchParams } = new URL(apiNext);

    if (searchParams.has("offset")) {
      out.next = parseInt(searchParams.get("offset")!);
    }
  }

  if (apiPrev != null) {
    const { searchParams } = new URL(apiPrev);

    if (searchParams.has("offset")) {
      out.previous = parseInt(searchParams.get("offset")!);
    }
  }

  return out;
};
