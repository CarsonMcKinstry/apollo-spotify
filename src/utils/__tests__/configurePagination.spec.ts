import { configurePagination } from "../configurePagination";

describe("configurePagination", () => {
  it("should add previous and next when they are present", () => {
    const out = configurePagination({
      limit: 20,
      offset: 20,
      next: "https://api.spotify.com/v1/me/tracks?offset=40&limit=20",
      previous: "https://api.spotify.com/v1/me/tracks?offset=0&limit=20",
      items: [],
      total: 0,
    });

    expect(out).toEqual({
      limit: 20,
      offset: 20,
      next: 40,
      previous: 0,
      items: [],
      total: 0,
    });
  });

  it("should ignore previous if no link is provided", () => {
    const out = configurePagination({
      limit: 20,
      offset: 0,
      next: "https://api.spotify.com/v1/me/tracks?offset=20&limit=20",
      previous: null,
      items: [],
      total: 0,
    });
    expect(out).toEqual({
      limit: 20,
      offset: 0,
      next: 20,
      previous: null,
      items: [],
      total: 0,
    });
  });
  it("should ignore next if no link is provided", () => {
    const out = configurePagination({
      limit: 20,
      offset: 0,
      next: null,
      previous: "https://api.spotify.com/v1/me/tracks?offset=20&limit=20",
      items: [],
      total: 0,
    });
    expect(out).toEqual({
      limit: 20,
      offset: 0,
      next: null,
      previous: 20,
      items: [],
      total: 0,
    });
  });
  it("should ignore both next and previous if neither is provided", () => {
    const out = configurePagination({
      limit: 20,
      offset: 0,
      next: null,
      previous: null,
      items: [],
      total: 0,
    });
    expect(out).toEqual({
      limit: 20,
      offset: 0,
      next: null,
      previous: null,
      items: [],
      total: 0,
    });
  });
});
