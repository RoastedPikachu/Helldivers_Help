import { WeatherConditionsObject } from "@/utils/dataInterfaces";

export const weatherConditions: WeatherConditionsObject = {
  extremeCold: {
    name: "Ужасный холод",
    description:
      "Ледяной холод снижает скорострельность, но замедляет перегрев оружия.",
  },
  thickFog: {
    name: "Густой туман",
    description: "Густой туман снижает видимость.",
  },
  rainstorms: {
    name: "Ливни",
    description: "Проливные дожди снижают видимость.",
  },
  intenseHeat: {
    name: "Сильная жара",
    description:
      "Высокие температуры повышают расход выносливости и ускоряют перегрев оружия.",
  },
  tremors: {
    name: "Толчки",
    description: "Частые землетрясения оглушают игроков и врагов.",
  },
  blizzards: {
    name: "Метели",
    description: "Сильные метели снижают видимость.",
  },
  meteorStorms: {
    name: "Метеоритные бури",
    description: "Падающие метеориты наносят огромный урон.",
  },
  sandstorms: {
    name: "Песчаные бури",
    description: "Плотные песчаные бури снижают видимость.",
  },
  ionStorms: {
    name: "Ионные бури",
    description: "Близость ионных бурь отключает стратагемы.",
  },
  acidStorms: {
    name: "Кислотные бури",
    description: "Яростные кислотные бури снижают видимость.",
  },
  volcanicActivity: {
    name: "Сейсмическая активность",
    description: "Вулканы разбрасывают горящие камни по поверхности планеты.",
  },
  fireTornadoes: {
    name: "Огненные торнадо",
    description: "На планете бушуют смертоносные огненые торнадо.",
  },
};
