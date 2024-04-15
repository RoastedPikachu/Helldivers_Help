import { makeAutoObservable } from "mobx";

import { Booster } from "@/utils/storeInterfaces";

class BoostersStore {
  boosters: { [key: string]: Booster[] } = {
    helldiversMobilize: [
      {
        id: 1,
        iconPath: "/static/Boosters/HellPodSpaceOptimizationIcon.webp",
        title: "Оптимизация места в адской капсуле",
        effect:
          "Адские Десантники покидают Адскую Капсулу с полным запасом боеприпасов, гранат и стимов.",
        price: 15,
      },
      {
        id: 2,
        iconPath: "/static/Boosters/VitalityIcon.webp",
        title: "Повышение жизнеспособности",
        effect:
          "Позволяет Адскому Десанту лучше сопротивляться получаемым ранениям.",
        price: 20,
      },
      {
        id: 3,
        iconPath: "/static/Boosters/UAVReconIcon.webp",
        title: "Усилитель разведки БПЛА",
        effect: "Увеличивает радиус действия радаров всего Адского Десанта.",
        price: 40,
      },
      {
        id: 4,
        iconPath: "/static/Boosters/StaminaIcon.webp",
        title: "Повышение выносливости",
        effect:
          "Увеличивает запас и скорость восстановления выносливости Адского Десанта.",
        price: 75,
      },
      {
        id: 5,
        iconPath: "/static/Boosters/MuscleIcon.webp",
        title: "Повышение мышечного тонуса",
        effect:
          "Позволяет Адскому Десантнику с легкостью перемещаться по труднопроходимой местности.",
        price: 75,
      },
      {
        id: 6,
        iconPath: "/static/Boosters/IncreasedReinforcementIcon.webp",
        title: "Увеличенный бюджет на подкрепления",
        effect: "Увеличивает количество доступных подкреплений.",
        price: 150,
      },
    ],
    steeledVeterans: [
      {
        id: 1,
        iconPath: "/static/Boosters/FlexibleReinforcementIcon.webp",
        title: "Гибкий бюджет на подкрепления",
        effect:
          "Сокращает время, необходимое для получения новых подкреплений после их исчерпания.",
        price: 75,
      },
    ],
    cuttingEdge: [
      {
        id: 1,
        iconPath: "/static/Boosters/LocalizationIcon.webp",
        title: "Позиционное заблуждение",
        effect: "Увеличивает время между стычками с врагом.",
        price: 18,
      },
    ],
    democraticDetonation: [
      {
        id: 1,
        iconPath: "/static/Boosters/FastExtractionIcon.webp",
        title: "Мастер воздушной эвакуации",
        effect:
          "Сокращает время, за которое шаттл эвакуации достигает эвакуационного маяка.",
        price: 55,
      },
    ],
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export const boostersStore = new BoostersStore();
