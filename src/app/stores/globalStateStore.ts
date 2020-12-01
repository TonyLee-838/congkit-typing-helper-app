import { makeAutoObservable } from "mobx";

export class GlobalStateStore {
  isSidebarExpanded: boolean = false;
  isListeningToKeyboard: boolean = true;
  isTransparent: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  toggleSidebarExpansion() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

  setListenToKeyboard(isListeningToKeyboard: boolean) {
    this.isListeningToKeyboard = isListeningToKeyboard;
  }

  toggleTransparent() {
    this.isTransparent = !this.isTransparent;
  }
}
