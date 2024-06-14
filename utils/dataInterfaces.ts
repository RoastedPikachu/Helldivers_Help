// import { Stratagem } from "@/utils/generalInterfaces";

interface Biome {
  surface: string;
  description: string;
  imagePath: string;
}

interface WeatherCondition {
  id: number;
  name: string;
  description: string;
  iconPath: string;
}

export type BiomesObject = {
  [key: string]: Biome;
};

interface GalaxySector {
  name: string;
  terminidsActiveImage: string;
  terminidsInactiveImage: string;
  automatonsActiveImage: string;
  automatonsInactiveImage: string;
}

export type GalaxySectorsObject = {
  [key: string]: GalaxySector;
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
  improvementPrices: any[];
  improvementAffectedStratagems: any;
}

export interface TargetCount {
  id: number;
  value: number;
}

export interface Mission {
  id: number;
  imagePath: string;
  title: string;
  description: string;
  level: string;
  targetMissionCompletionCount?: TargetCount[];
}

export interface SecondaryMission {
  id: number;
  imagePath: string;
  title: string;
  description: string;
  effect: string;
  rewardEffect: string;
}

export interface WeaponType {
  name: string;
  typeNumber: number;
}

export interface Bonus {
  name: string;
  description: string;
}

export interface StratagemType {
  name: string;
  typeNumber: number;
}

export interface PlayerCard {
  id: number;
  name: string;
  image: string;
  price: number;
  warbondImage: string;
}

export interface ObtainingType {
  id: number;
  name: string;
  icon: string;
}

export interface Emote {
  id: number;
  name: string;
  videoPath: string;
  videoPreviewPath: string;
  price: number;
  warbondIcon: string;
}
