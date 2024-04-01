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
  grenade: {
    name: "Граната",
    typeNumber: 3,
  },
};
