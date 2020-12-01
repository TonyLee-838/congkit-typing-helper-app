import { makeAutoObservable } from "mobx";
import { getConfig, updateConfig } from "../../db/api/config";

class ConfigStore {
  darkMode: boolean = false;
  transparency: number = 0.5;
  isTransparent: boolean = false;

  constructor() {
    makeAutoObservable(this);
    this.getConfigFromDBAndUpdate();
  }

  // Call when store initializes.
  private getConfigFromDBAndUpdate() {
    const { mode, transparency } = getConfig("appearance");
    this.darkMode = mode;
    this.transparency = transparency;
  }

  setDarkMode(value: boolean) {
    this.darkMode = value;
    console.log(this.darkMode);
    updateConfig("appearance.mode", value);
    //push updated config to db.
  }

  setTransparency(value: number) {
    this.transparency = value;
    console.log(this.transparency);
    //push updated config to db.
    updateConfig("appearance.transparency", value);
  }

  toggleTransparent() {
    this.isTransparent = !this.isTransparent;
    console.log("this.isTransparent", this.isTransparent);
  }
}

export default ConfigStore;
