import { ArmorObtainingType, Bonus, WeaponType } from "@/utils/dataInterfaces";

export interface Achievement {
  id: number;
  iconPath: string;
  title: string;
  description: string;
  accomplishmentWay: string;
}

export interface Booster {
  id: number;
  iconPath: string;
  title: string;
  effect: string;
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
  type: string;
  name: string;
  obtainingType: ArmorObtainingType;
  obtainingMethod: string;
  description: string;
  price: number;
  armorRating: number;
  speed: number;
  staminaRegen: number;
  bonus: Bonus;
}

export interface CurrentArmorInfo {
  id: number;
  obtainingType: ArmorObtainingType;
}
