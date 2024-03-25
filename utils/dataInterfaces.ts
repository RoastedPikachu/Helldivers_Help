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
  improvementPrices: {
    commonSampleCount: number;
    rareSampleCount?: number;
    superSampleCount?: number;
  };
  improvementAffectedStratagems: Stratagem[] | [];
}
