import { makeAutoObservable } from "mobx";

import { Booster } from "@/utils/storeInterfaces";

class BoostersStore {
  boosters = [
    {
      id: 1,
      iconPath: "/static/boosters/icons/HellPodSpaceOptimizationIcon.webp",
      price: 15,
    },
    {
      id: 2,
      iconPath: "/static/boosters/icons/VitalityIcon.webp",
      price: 20,
    },
    {
      id: 3,
      iconPath: "/static/boosters/icons/UAVReconIcon.webp",
      price: 40,
    },
    {
      id: 4,
      iconPath: "/static/boosters/icons/StaminaIcon.webp",
      price: 75,
    },
    {
      id: 5,
      iconPath: "/static/boosters/icons/MuscleIcon.webp",
      price: 75,
    },
    {
      id: 6,
      iconPath: "/static/boosters/icons/IncreasedReinforcementIcon.webp",
      price: 150,
    },
    {
      id: 7,
      iconPath: "/static/boosters/icons/FlexibleReinforcementIcon.webp",
      price: 75,
    },
    {
      id: 8,
      iconPath: "/static/boosters/icons/LocalizationIcon.webp",
      price: 18,
    },
    {
      id: 9,
      iconPath: "/static/boosters/icons/FastExtractionIcon.webp",
      price: 55,
    },
    {
      id: 10,
      iconPath: "/static/boosters/icons/FastRecoveryIcon.webp",
      price: 15,
    },
    {
      id: 11,
      iconPath: "/static/boosters/icons/ExperimentalInfusionIcon.webp",
      price: 80,
    },
    {
      id: 12,
      iconPath: "/static/boosters/icons/FirebombHellpods.webp",
      price: 60,
    },
    {
      id: 13,
      iconPath: "/static/boosters/icons/DeadSprint.webp",
      price: 35,
    },
    {
      id: 14,
      iconPath: "/static/boosters/icons/ArmedResupplyPods.webp",
      price: 55,
    },
  ] as Booster[];

  constructor() {
    makeAutoObservable(this);
  }
}

export const boostersStore = new BoostersStore();
