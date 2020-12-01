import { makeAutoObservable } from "mobx";
export class ConfigStore {
  darkMode: boolean = false;
  transparency: number = 0.5;
  isTransparent: boolean = false;

  constructor() {
    makeAutoObservable(this);
    this.getConfigFromDBAndUpdate();
  }

  // Call when store initializes.
  private getConfigFromDBAndUpdate() {}

  setDarkMode(value: boolean) {
    this.darkMode = value;
    console.log(this.darkMode);
    //push updated config to db.
  }

  setTransparency(value: number) {
    this.transparency = value;
    console.log(this.transparency);
    //push updated config to db.
  }

  toggleTransparent() {
    this.isTransparent = !this.isTransparent;
    console.log("this.isTransparent", this.isTransparent);
  }
}
