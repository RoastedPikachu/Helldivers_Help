export interface Order {
  title: string;
  expiresIn: number;
  description: string;
  completedPlanets: number[];
  targetCount: number;
  targetPlanets: number[];
  reward: number;
}
