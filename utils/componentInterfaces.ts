export interface Order {
  title: string;
  expiresIn: number;
  description: string;
  completedPlanets: number[];
  targetPlanets: number[];
  reward: number;
}
