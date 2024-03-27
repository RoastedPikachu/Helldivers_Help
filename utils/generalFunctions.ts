import { weaponsStore } from "@/store/WeaponsStore";

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

export function getSpecificAutomatonImageScale(
  fractionType: number,
  id: number,
) {
  if (fractionType === 2) {
    switch (id) {
      case 7:
        return "scale-x-125";
      case 8:
        return "scale-x-100";
      default:
        return "scale-x-150";
    }
  }
}
