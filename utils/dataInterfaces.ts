import { Stratagem } from "@/utils/generalInterfaces";

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
