import { omitNull } from "../omitNull";

describe("omitNull", () => {
  it("should remove null values", () => {
    expect(
      omitNull({
        a: 1,
        b: null,
      })
    ).toEqual({
      a: 1,
    });
  });
  it("should remove undefined values", () => {
    expect(
      omitNull({
        a: 1,
        b: undefined,
      })
    ).toEqual({
      a: 1,
    });
  });
});
