import { Stratagem } from "@/utils/generalInterfaces";

interface Biome {
  surface: string;
  description: string;
}

interface WeatherCondition {
  name: string;
  description: string;
}

export type BiomesObject = {
  [key: string]: Biome;
};

export type GalaxySectorsObject = {
  [key: string]: string;
};

export type WeatherConditionsObject = {
  [key: string]: WeatherCondition;
};

export type FractionsObject = {
  [key: number]: string;
};

export type GalaxySectorPathsObject = {
  [key: string]: string;
};

export interface ShipModule {
  id: number;
  title: string;
  levelImages: string[];
  improvementTitles: string[];
  improvementDescriptions: string[];
  improvementEffects: string[];
  improvementPrices: any;
  improvementAffectedStratagems: any;
}

interface Weapon {
  id: number;
  imagePath: string;
  name: string;
  price: number | string;
  damage: number;
}

export interface PrimaryOrSecondaryWeapon extends Weapon {
  magsCount: number;
  roundsPerMag: number;
  totalRounds: number;
  recoil: number;
  fireRate: number;
  totalDamage: number;
  dpm: number;
}

export interface Grenade extends Weapon {
  fuseTime: number;
  penetration: number;
  radius: number;
}
