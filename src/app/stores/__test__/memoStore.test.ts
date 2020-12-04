import MemoStore from "../memoStore";

jest.mock("../../../db/api/memo.js");
describe("memoStore", () => {
  const memoStore = new MemoStore();

  describe("isValidSubject method", () => {
    let subject: string;
    beforeEach(() => {
      subject = "Subject";
    });

    const execute = () => memoStore.isValidSubject(subject);

    it("should return false when user pass an empty string", () => {
      subject = "";

      const result = execute();
      expect(result).toBeFalsy();
    });
    it("should return true when user pass an valid string", () => {
      const result = execute();

      expect(result).toBeTruthy();
    });
  });

  describe("isValidEntity method", () => {
    let entity: string;
    beforeEach(() => {
      entity = "明＝日月";
    });

    const execute = () => memoStore.isValidEntity(entity);

    it("should return false if the first letter is omitted.", () => {
      entity = "=日月";

      const result = execute();

      expect(result).toBeFalsy();
    });
    it("should return false if there's no letter after the equal sign.", () => {
      entity = "明=";

      const result = execute();

      expect(result).toBeFalsy();
    });
    it("should also match english '=' sign and return true.", () => {
      entity = "明=日月";
      const result = execute();

      expect(result).toBeTruthy();
    });

    it("should take a valid input and return true.", () => {
      const result = execute();

      expect(result).toBeTruthy();
    });
  });
  describe("trimInput method", () => {
    let inputString: string;
    beforeEach(() => {
      inputString = "a=aa";
    });

    const execute = () => memoStore.trimInput(inputString);

    it("tests valid inputString with chinese character '＝' and return the correct result.", () => {
      inputString = "a＝aa";

      const result = execute();

      expect(result.char).toEqual("a");
      expect(result.input).toEqual("aa");
    });
    it("should test valid inputString, break it into 2 parts:char, input-code and return them as a object.", () => {
      const result = execute();

      expect(result.char).toEqual("a");
      expect(result.input).toEqual("aa");
    });
  });
});
