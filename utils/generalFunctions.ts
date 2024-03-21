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

export function replaceWhitespaces(string: string, requiredSymbol: string) {
  const replacedString = string.replace(
    /([А-Яа-я])\s([А-Яа-я])/g,
    requiredSymbol,
  );

  return replacedString;
}
