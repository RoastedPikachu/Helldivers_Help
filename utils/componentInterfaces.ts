export interface Order {
  title: string;
  expiresIn: number;
  description: string;
  completedPlanets: number[];
  targetCount: number;
  targetKillsCount: number;
  targetPlanets: number[];
  currentKillsCount: number;
  reward: number;
}
