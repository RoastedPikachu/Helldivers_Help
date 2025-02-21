import { makeAutoObservable } from "mobx";

import { galaxySectors } from "@/data/galaxySectors";
import { weatherConditions } from "@/data/planetWeatherConditions";
import { biomes } from "@/data/planetBiomes";

import { CurrentPlanetInfo } from "@/utils/storeInterfaces";

class PlanetsStore {
  currentPlanetInfo = {} as CurrentPlanetInfo;

  constructor() {
    makeAutoObservable(this);
  }

  changeCurrentPlanetInfo(id: number, sector: any) {
    this.currentPlanetInfo = { id: id, sector: sector };
  }

  clearCurrentPlanetInfo() {
    this.currentPlanetInfo = {} as CurrentPlanetInfo;
  }
}

export const planetsStore = new PlanetsStore();
