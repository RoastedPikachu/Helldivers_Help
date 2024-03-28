import { WeatherConditionsObject } from "@/utils/dataInterfaces";

export const weatherConditions: WeatherConditionsObject = {
  extremeCold: {
    id: 1,
    name: "Ужасный холод",
    description:
      "Ледяной холод снижает скорострельность, но замедляет перегрев оружия.",
    iconPath: "/static/weatherConditions/ExtremeColdIcon.png",
  },
  thickFog: {
    id: 2,
    name: "Густой туман",
    description: "Густой туман снижает видимость.",
    iconPath: "/static/weatherConditions/ThickFogIcon.png",
  },
  rainstorms: {
    id: 3,
    name: "Ливни",
    description: "Проливные дожди снижают видимость.",
    iconPath: "/static/weatherConditions/RainstormsIcon.png",
  },
  intenseHeat: {
    id: 4,
    name: "Сильная жара",
    description:
      "Высокие температуры повышают расход выносливости и ускоряют перегрев оружия.",
    iconPath: "/static/weatherConditions/IntenseHeatIcon.png",
  },
  tremors: {
    id: 5,
    name: "Толчки",
    description: "Частые землетрясения оглушают игроков и врагов.",
    iconPath: "/static/weatherConditions/TremorsIcon.png",
  },
  blizzards: {
    id: 6,
    name: "Метели",
    description: "Сильные метели снижают видимость.",
    iconPath: "/static/weatherConditions/BlizzardsIcon.png",
  },
  meteorStorms: {
    id: 7,
    name: "Метеоритные бури",
    description: "Падающие метеориты наносят огромный урон.",
    iconPath: "/static/weatherConditions/MeteorStormsIcon.png",
  },
  sandstorms: {
    id: 8,
    name: "Песчаные бури",
    description: "Плотные песчаные бури снижают видимость.",
    iconPath: "/static/weatherConditions/SandstormsIcon.png",
  },
  ionStorms: {
    id: 9,
    name: "Ионные бури",
    description: "Близость ионных бурь отключает стратагемы.",
    iconPath: "/static/weatherConditions/IonStormsIcon.png",
  },
  acidStorms: {
    id: 10,
    name: "Кислотные бури",
    description: "Яростные кислотные бури снижают видимость.",
    iconPath: "/static/weatherConditions/AcidStormsIcon.png",
  },
  volcanicActivity: {
    id: 11,
    name: "Сейсмическая активность",
    description: "Вулканы разбрасывают горящие камни по поверхности планеты.",
    iconPath: "/static/weatherConditions/VolcanicActivityIcon.png",
  },
  fireTornadoes: {
    id: 12,
    name: "Огненные торнадо",
    description: "На планете бушуют смертоносные огненые торнадо.",
    iconPath: "/static/weatherConditions/FireTornadoesIcon.png",
  },
};
