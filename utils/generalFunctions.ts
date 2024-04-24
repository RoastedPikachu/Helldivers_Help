import { enemiesStore } from "@/store/EnemiesStore";

export function getRandomEntity<T extends { id: number }>(
  entities: T[],
  currentEntity: T,
): T {
  let nextEntity = entities[Math.floor(Math.random() * entities.length)];

  while (nextEntity.id === currentEntity.id) {
    nextEntity = entities[Math.floor(Math.random() * entities.length)];
  }

  return nextEntity;
}

export function isMobileDevice() {
  return window.matchMedia("(max-width: 768px)").matches;
}

export function toSlug(string = "") {
  return string.toLowerCase().replaceAll(" ", "-");
}

export const getEnemyFractionPageLink = () => {
  return enemiesStore.currentEnemy.fraction === "Терминиды"
    ? "/enemy/terminids"
    : "/enemy/automatons";
};
