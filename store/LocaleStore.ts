import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

class LocaleStore {
  constructor() {
    makeAutoObservable(this);

    if (typeof window !== "undefined") {
      makePersistable(this, {
        name: "LocaleStore",
        properties: ["locale"],
        storage: window.localStorage,
      });

      if (this.locale.length === 0) {
        this.setInitialLocale();
      }
    }
  }

  locale = "";

  setInitialLocale = () => {
    if (navigator.languages !== undefined) {
      this.locale = navigator.languages[0].slice(0, 2);
    } else {
      this.locale = navigator.language.slice(0, 2);
    }
  };

  setLocale = (locale: string) => {
    this.locale = locale;
  };
}

export const localeStore = new LocaleStore();
