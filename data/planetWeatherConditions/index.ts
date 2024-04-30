import { WeatherConditionsObject } from "@/utils/dataInterfaces";

export const weatherConditions: WeatherConditionsObject = {
  extremeCold: {
    id: 1,
    name: "Ужасный холод",
    description:
      "Ледяной холод снижает скорострельность, но замедляет перегрев оружия.",
    iconPath: "/static/WeatherConditions/ExtremeColdIcon.png",
  },
  thickFog: {
    id: 2,
    name: "Густой туман",
    description: "Густой туман снижает видимость.",
    iconPath: "/static/WeatherConditions/ThickFogIcon.png",
  },
  rainstorms: {
    id: 3,
    name: "Ливни",
    description: "Проливные дожди снижают видимость.",
    iconPath: "/static/WeatherConditions/RainstormsIcon.png",
  },
  intenseHeat: {
    id: 4,
    name: "Сильная жара",
    description:
      "Высокие температуры повышают расход выносливости и ускоряют перегрев оружия.",
    iconPath: "/static/WeatherConditions/IntenseHeatIcon.png",
  },
  tremors: {
    id: 5,
    name: "Толчки",
    description: "Частые землетрясения оглушают игроков и врагов.",
    iconPath: "/static/WeatherConditions/TremorsIcon.png",
  },
  blizzards: {
    id: 6,
    name: "Метели",
    description: "Сильные метели снижают видимость.",
    iconPath: "/static/WeatherConditions/BlizzardsIcon.png",
  },
  meteorStorms: {
    id: 7,
    name: "Метеоритные бури",
    description: "Падающие метеориты наносят огромный урон.",
    iconPath: "/static/WeatherConditions/MeteorStormsIcon.png",
  },
  sandstorms: {
    id: 8,
    name: "Песчаные бури",
    description: "Плотные песчаные бури снижают видимость.",
    iconPath: "/static/WeatherConditions/SandstormsIcon.png",
  },
  ionStorms: {
    id: 9,
    name: "Ионные бури",
    description: "Близость ионных бурь отключает стратагемы.",
    iconPath: "/static/WeatherConditions/IonStormsIcon.png",
  },
  acidStorms: {
    id: 10,
    name: "Кислотные бури",
    description: "Яростные кислотные бури снижают видимость.",
    iconPath: "/static/WeatherConditions/AcidIcon.png",
  },
  volcanicActivity: {
    id: 11,
    name: "Сейсмическая активность",
    description: "Вулканы разбрасывают горящие камни по поверхности планеты.",
    iconPath: "/static/WeatherConditions/VolcanicActivityIcon.png",
  },
  fireTornadoes: {
    id: 12,
    name: "Огненные торнадо",
    description: "На планете бушуют смертоносные огненые торнадо.",
    iconPath: "/static/WeatherConditions/FireTornadoesIcon.png",
  },
};
