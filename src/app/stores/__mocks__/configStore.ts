import { makeAutoObservable } from "mobx";

class ConfigStore {
  transparency: number = 0.5;

  constructor() {
    makeAutoObservable(this);
    // this.getConfigFromDBAndUpdate();
  }

  // Call when store initializes.
  //   private getConfigFromDBAndUpdate() {
  //     const { transparency } = getConfig("appearance");
  //     this.transparency = transparency;
  //   }

  setTransparency(value: number) {
    this.transparency = value;
    //push updated config to db.
    // updateConfig("appearance.transparency", value);
  }
}

export default ConfigStore;
