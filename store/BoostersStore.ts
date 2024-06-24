import { makeAutoObservable } from "mobx";

import { Booster } from "@/utils/storeInterfaces";
import { obtainingTypes } from "@/data/obtainingTypes";

class BoostersStore {
  boosters = [
    {
      id: 1,
      iconPath: "/static/Boosters/HellPodSpaceOptimizationIcon.webp",
      title: "Оптимизация места в адской капсуле",
      effect:
        "Адские Десантники покидают Адскую Капсулу с полным запасом боеприпасов, гранат и стимов.",
      price: 15,
      obtainingTypeIcon: obtainingTypes[5].icon,
    },
    {
      id: 2,
      iconPath: "/static/Boosters/VitalityIcon.webp",
      title: "Повышение жизнеспособности",
      effect:
        "Позволяет Адскому Десанту лучше сопротивляться получаемым ранениям.",
      price: 20,
      obtainingTypeIcon: obtainingTypes[5].icon,
    },
    {
      id: 3,
      iconPath: "/static/Boosters/UAVReconIcon.webp",
      title: "Усилитель разведки БПЛА",
      effect: "Увеличивает радиус действия радаров всего Адского Десанта.",
      price: 40,
      obtainingTypeIcon: obtainingTypes[5].icon,
    },
    {
      id: 4,
      iconPath: "/static/Boosters/StaminaIcon.webp",
      title: "Повышение выносливости",
      effect:
        "Увеличивает запас и скорость восстановления выносливости Адского Десанта.",
      price: 75,
      obtainingTypeIcon: obtainingTypes[5].icon,
    },
    {
      id: 5,
      iconPath: "/static/Boosters/MuscleIcon.webp",
      title: "Повышение мышечного тонуса",
      effect:
        "Позволяет Адскому Десантнику с легкостью перемещаться по труднопроходимой местности.",
      price: 75,
      obtainingTypeIcon: obtainingTypes[5].icon,
    },
    {
      id: 6,
      iconPath: "/static/Boosters/IncreasedReinforcementIcon.webp",
      title: "Увеличенный бюджет на подкрепления",
      effect: "Увеличивает количество доступных подкреплений.",
      price: 150,
      obtainingTypeIcon: obtainingTypes[5].icon,
    },
    {
      id: 7,
      iconPath: "/static/Boosters/FlexibleReinforcementIcon.webp",
      title: "Гибкий бюджет на подкрепления",
      effect:
        "Сокращает время, необходимое для получения новых подкреплений после их исчерпания.",
      price: 75,
      obtainingTypeIcon: obtainingTypes[6].icon,
    },
    {
      id: 8,
      iconPath: "/static/Boosters/LocalizationIcon.webp",
      title: "Позиционное заблуждение",
      effect: "Увеличивает время между стычками с врагом.",
      price: 18,
      obtainingTypeIcon: obtainingTypes[7].icon,
    },
    {
      id: 9,
      iconPath: "/static/Boosters/FastExtractionIcon.webp",
      title: "Мастер воздушной эвакуации",
      effect:
        "Сокращает время, за которое шаттл эвакуации достигает эвакуационного маяка.",
      price: 55,
      obtainingTypeIcon: obtainingTypes[8].icon,
    },
    {
      id: 10,
      iconPath: "/static/Boosters/FastRecoveryIcon.webp",
      title: "Мотивирующий шок",
      effect:
        "Позволяет всем Адским Десантникам восстанавливаться быстрее после замедления, вызванного атакой, — например кислотой. Не устраняет последствия действующих по области эффектов, таких как ЭМ-удары.",
      price: 15,
      obtainingTypeIcon: obtainingTypes[9].icon,
    },
    {
      id: 11,
      iconPath: "/static/Boosters/ExperimentalInfusionIcon.webp",
      title: "Экспериментальная инъекция",
      effect: ".",
      price: 80,
      obtainingTypeIcon: obtainingTypes[10].icon,
    },
  ] as Booster[];

  constructor() {
    makeAutoObservable(this);
  }
}

export const boostersStore = new BoostersStore();
