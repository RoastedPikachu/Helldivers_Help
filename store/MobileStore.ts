import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { isMobileDevice } from "@/utils/generalFunctions";

class MobileStore {
  isMobileDevice = false;

  constructor() {
    makeAutoObservable(this);

    if (typeof window !== "undefined") {
      makePersistable(this, {
        name: "MobileStore",
        properties: ["isMobileDevice"],
        storage: window.localStorage,
      });

      setInterval(() => this.changeIsMobileDeviceStatus(), 1000);
    }
  }

  changeIsMobileDeviceStatus = () => {
    if (isMobileDevice()) {
      this.isMobileDevice = true;
    } else {
      this.isMobileDevice = false;
    }
  };
}

export const mobileStore = new MobileStore();
