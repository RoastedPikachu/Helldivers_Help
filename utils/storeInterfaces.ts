import { Bonus, WeaponType } from "@/utils/dataInterfaces";

export interface Achievement {
  id: number;
  iconPath: string;
  type: string;
}

export interface Booster {
  id: number;
  iconPath: string;
  price: number;
}

interface Weapon {
  id: number;
  imagePath: string;
  weaponType: WeaponType;
  name: string;
  description: string;
  price: number | string;
  damage: number;
  obtainingTypeIcon: string;
}

export interface WeaponWithAmmo extends Weapon {
  magsCount: number;
  roundsPerMag: number;
  totalRounds: number;
}

export interface PrimaryOrSecondaryWeapon extends WeaponWithAmmo {
  recoil: number;
  fireRate: number;
  totalDamage: number;
  dps: number;
}

export interface SupportWeapon extends WeaponWithAmmo {
  callTime: number;
  directions: any[];
  features: string[];
}

export interface Grenade extends Weapon {
  fuseTime: number;
  penetration: number;
  radius: number;
}

export type CurrentWeaponInfo = {
  id: number;
  weaponType: WeaponType;
};

export type CurrentPlanetInfo = {
  id: number;
  sector: any;
};

export interface ArmorKit {
  id: number;
  imagePath: string;
  typeIndex: number;
  devName: string;
  obtainingMethodIndex: number;
  price: number;
  armorRating: number;
  speed: number;
  staminaRegen: number;
  bonus: Bonus;
}

export interface CurrentArmorInfo {
  id: number;
  type: string;
}

export interface Coat {
  id: number;
  imagePath: string;
  name: string;
  description: string;
  price: number;
  armorRating: number;
  speed: number;
  staminaRegen: number;
  warbondIcon: string;
}

export interface CurrentCoatInfo {
  id: number;
}
