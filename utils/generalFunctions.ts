export function getRandomEntity<T extends { id: number }>(
  quotes: T[],
  currentEntity: T,
): T {
  let nextEntity = quotes[Math.floor(Math.random() * quotes.length)];

  while (nextEntity.id === currentEntity.id) {
    nextEntity = quotes[Math.floor(Math.random() * quotes.length)];
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
