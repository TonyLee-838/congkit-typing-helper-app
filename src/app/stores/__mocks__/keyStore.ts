import { makeAutoObservable } from "mobx";

// import { getKeyInfo } from "../../db/api/keyInfo";

const keyInfo = [
  Array.from({ length: 10 }).map((_) => ({
    letter: "Q",
    character: "手",
    hints: "夫",
  })),
  Array.from({ length: 9 }).map((_) => ({
    letter: "Q",
    character: "手",
    hints: "夫",
  })),
  Array.from({ length: 7 }).map((_) => ({
    letter: "Q",
    character: "手",
    hints: "夫",
  })),
];
class KeyStore {
  keyInfo: KeyInfo[][];
  activeKey: string = "";
  listenToKeyboard: boolean = true;

  constructor() {
    makeAutoObservable(this);
    this.keyInfo = keyInfo;
  }

  setActiveKey(key: string) {
    this.activeKey = key;
  }

  clearActiveKey() {
    this.activeKey = "";
  }

  setListenToKeyboard(value: boolean) {
    this.listenToKeyboard = value;
  }

  setKeyInfo(keyInfo: KeyInfo[][]) {
    this.keyInfo = keyInfo;
    //talk to db...
  }
}

export default KeyStore;
