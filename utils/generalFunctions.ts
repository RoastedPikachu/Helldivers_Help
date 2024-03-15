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
