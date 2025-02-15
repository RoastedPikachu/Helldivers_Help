export function getRandomEntityInArray(entities: any, currentEntity: any) {
  let nextEntity = entities[Math.floor(Math.random() * entities.length)];

  while (nextEntity === currentEntity) {
    nextEntity = entities[Math.floor(Math.random() * entities.length)];
  }

  return nextEntity;
}

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
  return string.toLowerCase().replaceAll(" ", "_");
}

export function fromSlug(string = "") {
  return string.replaceAll("_", " ");
}

export const getTargetRotate = (direction: number) => {
  switch (direction) {
    case 1:
      return "";
    case 2:
      return "rotate-90";
    case 3:
      return "rotate-180";
    case 4:
      return "-rotate-90";
  }
};

export const simulateKeyPress = (keyCode: number) => {
  const event = new KeyboardEvent("keydown", {
    keyCode: keyCode,
    bubbles: true,
    cancelable: true,
  });

  document.dispatchEvent(event);
};

export const getUserLocale = () => {
  if (typeof window !== "undefined") {
    return window.navigator.languages[0].slice(0, 2);
  }
};

export const getIntlArray = (array: string) => {
  return JSON.parse(array);
};
