import { makeAutoObservable } from "mobx";

class GlobalStateStore {
  isSidebarExpanded: boolean = false;
  isListeningToKeyboard: boolean = true;
  isTransparent: boolean = true;
  selectedButton: ControlButtonType = "";

  constructor() {
    makeAutoObservable(this);
  }

  toggleSidebarExpansion() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
    this.isListeningToKeyboard = !this.isSidebarExpanded;
  }

  toggleTransparent() {
    this.isTransparent = !this.isTransparent;
  }

  setSelectedButton(button: ControlButtonType) {
    this.selectedButton = this.selectedButton === button ? "" : button;
  }
}

export default GlobalStateStore;
