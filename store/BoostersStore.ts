import { makeAutoObservable } from "mobx";

import { Booster } from "@/utils/storeInterfaces";

class BoostersStore {
  boosters = [
    {
      id: 1,
      iconPath: "/static/boosters/HellPodSpaceOptimizationIcon.webp",
      title: "Оптимизация места в адской капсуле",
      effect:
        "Адские Десантники покидают Адскую Капсулу с полным запасом боеприпасов, гранат и стимов.",
      price: 15,
    },
    {
      id: 2,
      iconPath: "/static/boosters/VitalityIcon.webp",
      title: "Повышение жизнеспособности",
      effect:
        "Позволяет Адскому Десанту лучше сопротивляться получаемым ранениям.",
      price: 20,
    },
    {
      id: 3,
      iconPath: "/static/boosters/UAVReconIcon.webp",
      title: "Усилитель разведки БПЛА",
      effect: "Увеличивает радиус действия радаров всего Адского Десанта.",
      price: 40,
    },
    {
      id: 4,
      iconPath: "/static/boosters/StaminaIcon.webp",
      title: "Повышение выносливости",
      effect:
        "Увеличивает запас и скорость восстановления выносливости Адского Десанта.",
      price: 75,
    },
    {
      id: 5,
      iconPath: "/static/boosters/MuscleIcon.webp",
      title: "Повышение мышечного тонуса",
      effect:
        "Позволяет Адскому Десантнику с легкостью перемещаться по труднопроходимой местности.",
      price: 75,
    },
    {
      id: 6,
      iconPath: "/static/boosters/IncreasedReinforcementIcon.webp",
      title: "Увеличенный бюджет на подкрепления",
      effect: "Увеличивает количество доступных подкреплений.",
      price: 150,
    },
    {
      id: 7,
      iconPath: "/static/boosters/FlexibleReinforcementIcon.webp",
      title: "Гибкий бюджет на подкрепления",
      effect:
        "Сокращает время, необходимое для получения новых подкреплений после их исчерпания.",
      price: 75,
    },
    {
      id: 8,
      iconPath: "/static/boosters/LocalizationIcon.webp",
      title: "Позиционное заблуждение",
      effect: "Увеличивает время между стычками с врагом.",
      price: 18,
    },
  ] as Booster[];

  constructor() {
    makeAutoObservable(this);
  }
}

export const boostersStore = new BoostersStore();
