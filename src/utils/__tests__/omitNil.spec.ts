import { omitNil } from "../omitNil";

describe("omitNil", () => {
  it("should omit all null values", () => {
    expect(omitNil({ a: 1, b: null })).toEqual({ a: 1 });
  });
  it("should omit all undefinedd values", () => {
    expect(omitNil({ a: 1, b: undefined })).toEqual({ a: 1 });
  });
});
