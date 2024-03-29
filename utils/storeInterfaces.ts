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
  weaponType: number;
  name: string;
  description: string;
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

export type CurrentWeaponInfo =
  | {
      id: number;
      weaponType: number;
    }
  | {};

export type CurrentPlanetInfo =
  | {
      id: number;
      sector: any;
    }
  | {};
