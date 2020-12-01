import { makeAutoObservable } from "mobx";

import { getKeyInfo } from "../../db/api/keyInfo";

class KeyStore {
  keyInfo: KeyInfo[][];
  activeKey: string = "";
  listenToKeyboard: boolean = true;

  constructor() {
    makeAutoObservable(this);
    this.keyInfo = getKeyInfo();
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
