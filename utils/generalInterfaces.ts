import { StratagemType } from "@/utils/dataInterfaces";

export interface Tip {
  id: number;
  text: string;
}

export interface Rank {
  id: number;
  iconPath: string;
  fromLevel: number;
  xpCount: number;
}

export interface Level {
  id: number;
  xpRequired: number;
  xpTotal: number;
}

export interface IResource {
  id: number;
  iconPath: string;
  title: string;
  difficulties: string;
  prices?: string[];
  obtainingMethod: string;
  applicationScope: string;
  maxAmount: string;
  isDependsOnDifficulty: boolean;
}

export interface Direction {
  id: number;
  orientation: number;
  isPressed: boolean;
}

// Здесь 4 keyCodes и 4 directions: 87-1-вверх, 68-2-право, 83-3-низ, 65-4-лево

export interface Stratagem {
  id: number;
  iconPath: string;
  videoPath?: string;
  videoPreviewPath?: string;
  type: StratagemType;
  name: string;
  description: string;
  price?: number;
  obtainingLevel?: number;
  callTime?: number;
  useCount?: number;
  reloadTime?: number;
  keyCodes: number[];
  directions: Direction[];
}

export interface Enemy {
  id: number;
  iconPath: string;
  imageStyleScale: string;
  title: string;
  engTitle: string;
  fraction: string;
  description: string;
  tactics: string;
  notes: string;
  types: string;
}

export interface ResourceTableTitle {
  id: number;
  name: string;
}
