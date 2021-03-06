import { makeAutoObservable } from "mobx";

// import { queryCharacter } from "../../db/api/dictionary";
import KeyStore from "./keyStore";
// import getKeyMap from "../helper/getKeyMap";
class SearchStore {
  keyMap: { [index: string]: string };
  terms: string = "";
  results: SearchResultType[] = [];

  constructor(keyStore: KeyStore) {
    makeAutoObservable(this);
    this.keyMap = { Q: "手" };
    // this.keyMap = getKeyMap(keyStore.keyInfo);
  }

  hasNoResult() {
    return !this.results.length;
  }

  clear() {
    this.terms = "";
    this.results = [];
  }

  search(terms: string) {
    this.terms = terms;

    const results: SearchResultType[] = [];
    terms.split("").forEach((term) => {
      const codeAlphanumeric: string[] = ["q"];
      const codeChinese = codeAlphanumeric.map(
        (letter) => this.keyMap[letter.toUpperCase()]
      );
      results.push({ term, codeAlphanumeric, codeChinese });
    });

    this.results = results;
  }
}

export default SearchStore;
