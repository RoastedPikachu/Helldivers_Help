import { StratagemType } from "@/utils/dataInterfaces";

export const stratagemTypes: { [key: string]: StratagemType } = {
  supportWeapon: {
    name: "Оружие поддержки",
    typeNumber: 0,
  },
  orbital: {
    name: "Орбитальные пушки",
    typeNumber: 1,
  },
  hangar: {
    name: "Ангар",
    typeNumber: 2,
  },
  bridge: {
    name: "Капитанский мостик",
    typeNumber: 3,
  },
  engineeringBay: {
    name: "Инженерный отсек",
    typeNumber: 4,
  },
  roboticsWorkshop: {
    name: "Мастерская роботов",
    typeNumber: 5,
  },
  warbonds: {
    name: "Боевые заслуги",
    typeNumber: 6,
  },
  mission: {
    name: "Стратагемы миссий",
    typeNumber: 7,
  },
};
