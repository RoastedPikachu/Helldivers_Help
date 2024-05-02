import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

class MobileStore {
  isMobileDevice = false;

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: "MobileStore",
      properties: ["isMobileDevice"],
      storage: window.localStorage,
    });
  }

  changeIsMobileDeviceStatus = (status: boolean) => {
    this.isMobileDevice = status;
  };
}

export const mobileStore = new MobileStore();
