import { getKeyInfo } from "../../../db/api/keyInfo";
import getKeyMap from "../getKeyMap";

jest.mock("../../../db/api/keyInfo.js");
describe("getKeyMap helper function", () => {
  it("should generate key map based on the given key information", () => {
    const result = getKeyMap(getKeyInfo());

    expect(Object.keys(result).length).toBe(26);
    expect(result["Q"]).toEqual("手");
  });
});
