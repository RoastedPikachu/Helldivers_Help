import { makeAutoObservable } from "mobx";

import { Booster } from "@/utils/generalInterfaces";

class BoostersStore {
  boosters = [
    {
      id: 1,
      iconPath: "/static/boosters/HellPodSpaceOptimizationIcon.png",
      title: "Оптимизация места в адской капсуле",
      effect: "",
      price: 0,
    },
    {
      id: 2,
      iconPath: "/static/boosters/VitalityIcon.png",
      title: "Повышение жизнеспособности",
      effect: "",
      price: 0,
    },
    {
      id: 3,
      iconPath: "/static/boosters/UAVReconIcon.png",
      title: "Усилитель разведки БПЛА",
      effect: "",
      price: 0,
    },
    {
      id: 4,
      iconPath: "/static/boosters/StaminaIcon.png",
      title: "Повышение выносливости",
      effect: "",
      price: 0,
    },
    {
      id: 5,
      iconPath: "/static/boosters/MuscleIcon.png",
      title: "Повышение мышечного тонуса",
      effect: "",
      price: 0,
    },
    {
      id: 6,
      iconPath: "/static/boosters/IncreasedReinforcementIcon.png",
      title: "Увеличенный бюджет на подкрепления",
      effect: "",
      price: 0,
    },
    {
      id: 7,
      iconPath: "/static/boosters/FlexibleReinforcementIcon.png",
      title: "Гибкий бюджет на подкрепления",
      effect: "",
      price: 0,
    },
    {
      id: 8,
      iconPath: "/static/boosters/LocalizationIcon.png",
      title: "Позиционное заблуждение",
      effect: "",
      price: 0,
    },
  ] as Booster[];

  constructor() {
    makeAutoObservable(this);
  }
}

export const boostersStore = new BoostersStore();
