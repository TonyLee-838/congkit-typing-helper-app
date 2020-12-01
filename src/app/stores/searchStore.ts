import { makeAutoObservable } from "mobx";
import { KeyStore } from "./keyStore";
import getKeyMap from "../helper/getKeyMap";
import { queryCharacter } from "../../db/api/dictionary";

export class SearchStore {
  keyMap;
  terms: string = "";
  results: SearchResultType[] = [];

  constructor(keyStore: KeyStore) {
    makeAutoObservable(this);
    this.keyMap = getKeyMap(keyStore.keyInfo);
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
      const codeAlphanumeric: string[] = queryCharacter(term).split("");
      const codeChinese = codeAlphanumeric.map(
        (letter) => this.keyMap[letter.toUpperCase()]
      );
      results.push({ term, codeAlphanumeric, codeChinese });
    });

    this.results = results;
  }
}
