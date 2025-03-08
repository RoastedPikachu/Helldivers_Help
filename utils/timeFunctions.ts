export function timeFromNow(unixTimestamp: any) {
  const currentTime = Math.floor(Date.now() / 1000);
  const totalSeconds = unixTimestamp - currentTime;

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  if (hours === 0) {
    return (
      minutes.toString().padStart(2, "0") +
      "мин " +
      seconds.toString().padStart(2, "0") +
      "c"
    );
  }

  if (hours > 10) {
    return (
      hours.toString().padStart(2, "0") +
      "ч " +
      minutes.toString().padStart(2, "0") +
      "мин"
    );
  }

  return hours.toString() + "ч " + minutes.toString() + "мин";
}

export const calculateTimePercentage = (
  unixTimestamp: any,
  endUnixTimestamp: any,
  startUnixTimestamp: any,
) => {
  const currentTime = Math.floor(Date.now() / 1000);
  const secondsLeft = unixTimestamp - currentTime;

  const totalSeconds = endUnixTimestamp - startUnixTimestamp;

  return 99 - (secondsLeft / totalSeconds) * 100;
};
