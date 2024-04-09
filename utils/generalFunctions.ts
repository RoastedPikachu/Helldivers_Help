import { weaponsStore } from "@/store/WeaponsStore";
import { fractions } from "@/data/fractions";

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

export const getSpecificAutomatonImageScale = (
  fraction: string,
  id: number,
) => {
  if (fraction === fractions["2"]) {
    switch (id) {
      case 7:
        return "scale-x-125";
      case 8:
        return "scale-x-100";
      default:
        return "scale-x-150";
    }
  }
};

export function isMobileDevice() {
  return window.matchMedia("(max-width: 768px)").matches;
}

export function toSlug(string = "") {
  return string.toLowerCase().replaceAll(" ", "-");
}
