import { responseMapper } from "..";

describe("responseMapper", () => {
  it("should change snake case keys to camel case", () => {
    expect(
      responseMapper({
        key_one: 1,
      })
    ).toEqual({
      keyOne: 1,
    });
  });
  it("should leave already camel case keys alone", () => {
    expect(
      responseMapper({
        keyOne: 1,
      })
    ).toEqual({ keyOne: 1 });
  });

  it("should recursively handle objects", () => {
    expect(
      responseMapper({
        key_one: {
          key_two: 2,
        },
      })
    ).toEqual({
      keyOne: {
        keyTwo: 2,
      },
    });
  });
  it("should leave arrays of scalars alone", () => {
    expect(
      responseMapper({
        key_one: [1, 2, 3],
      })
    ).toEqual({
      keyOne: [1, 2, 3],
    });
  });
  it("should recursively handle arrays of objects", () => {
    expect(
      responseMapper({
        key_one: [
          {
            key_two: 2,
          },
          {
            key_two: 3,
          },
        ],
      })
    ).toEqual({
      keyOne: [
        {
          keyTwo: 2,
        },
        {
          keyTwo: 3,
        },
      ],
    });
  });
});
