import { mapResponse } from "../mapResponse";

describe("mapResponse", () => {
  it("should remap values from the response to result", () => {
    const out = mapResponse<{ value_one: any }, { valueOne: any }>(
      {
        value_one: 1,
      },
      [["value_one", "valueOne"]]
    );

    expect(out).toEqual({ valueOne: 1 });
  });

  it("should ignore values not listed in the keyMap", () => {
    const out = mapResponse<
      { value_one: any; value_two: any },
      { valueOne: any }
    >(
      {
        value_one: 1,
        value_two: 2,
      },
      [["value_one", "valueOne"]]
    );

    expect(out).toEqual({ valueOne: 1, value_two: 2 });
  });
});
