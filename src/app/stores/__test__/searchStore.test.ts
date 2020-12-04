import { exec } from "child_process";
import KeyStore from "../keyStore";
import SearchStore from "../searchStore";

jest.mock("../../../db/api/dictionary.js");
jest.mock("../../../db/api/keyInfo.js");

describe("searchStore", () => {
  const keyStore = new KeyStore();
  let searchStore: SearchStore;
  beforeEach(() => {
    searchStore = new SearchStore(keyStore);
  });

  describe("clear method", () => {
    it("should clear all the results.", () => {
      searchStore.search("日");
      searchStore.clear();

      expect(searchStore.results.length).toBe(0);
    });
  });
  describe("search method", () => {
    let term: string;
    beforeEach(() => {
      term = "日";
    });

    const execute = () => {
      searchStore.search(term);
      return searchStore.results;
    };

    it("should not add any result if user pass empty string or string only with whitespace.", () => {
      term = " ";

      execute();

      expect(searchStore.results.length).toBe(0);
    });

    it("should store multiple results when it receives input string that has more than 1 character.", () => {
      term = "日明";

      const result = execute();

      expect(result.length).toBe(2);
      expect(result[0].term).toEqual("日");
      expect(result[0].codeAlphanumeric).toEqual(["a"]);
      expect(result[0].codeChinese).toEqual(["日"]);
    });
    it("should search the given single character from the db, turn it into alphanumeric form and chinese form and put it into the result state.", () => {
      const result = execute();

      expect(result).not.toBeNull();
      expect(result[0].term).toEqual("日");
      expect(result[0].codeAlphanumeric).toEqual(["a"]);
      expect(result[0].codeChinese).toEqual(["日"]);
    });
  });
});
