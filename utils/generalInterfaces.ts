export interface Tip {
  id: number;
  text: string;
}

export interface Rank {
  id: number;
  iconPath: string;
  title: string;
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
}

interface Direction {
  id: number;
  orientation: number;
  isPressed: boolean;
}

// Здесь 4 keyCodes и 4 directions: 87-1-вверх, 68-2-право, 83-3-низ, 65-4-лево

export interface Stratagem {
  id: number;
  name: string;
  image: string;
  keyCodes: number[];
  directions: Direction[];
}
