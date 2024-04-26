import { WeaponType } from "@/utils/dataInterfaces";

export const weaponTypes: { [key: string]: WeaponType } = {
  primary: {
    name: "Основное",
    typeNumber: 1,
  },
  secondary: {
    name: "Вторичное",
    typeNumber: 2,
  },
  support: {
    name: "Вспомогательное",
    typeNumber: 3,
  },
  grenade: {
    name: "Граната",
    typeNumber: 4,
  },
};
