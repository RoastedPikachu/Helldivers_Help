import { makeAutoObservable } from "mobx";

import { makePersistable } from "mobx-persist-store";

import { stratagemStore } from "@/store/StratagemStore";
import { mobileStore } from "@/store/MobileStore";

import { getRandomEntity, simulateKeyPress } from "@/utils/generalFunctions";

class StratagemTrainingStore {
  secondsInterval: ReturnType<typeof setInterval> | undefined;

  initialX = 0;
  initialY = 0;
  finalX = 0;
  finalY = 0;

  currentStratagemKeyIndex = 0;

  currentRoundNumber = 1;

  secondsLeft = 10;

  currentScore = 0;
  finalGameScore = 0;
  highestGameScore = 0;

  currentRoundBonus = 75;
  currentRoundTimeBonus = 0;

  isRequiredKeyPressed = false;
  isGameStarted = false;
  isResultsShowed = false;

  isRoundEnded = false;
  isRoundLost = false;

  isClearInputRound = true;

  isStratagemInputSuccessful = false;
  isStratagemInputFail = false;

  isButtonsChoosen = true;

  constructor() {
    makeAutoObservable(this);

    if (typeof window !== "undefined") {
      makePersistable(this, {
        name: "StratagemTrainingStore",
        properties: ["highestGameScore", "isButtonsChoosen"],
        storage: window.localStorage,
      });
    }
  }

  // Action-ы для изменения переменной

  setSecondsInterval = (interval: ReturnType<typeof setInterval>) => {
    this.secondsInterval = interval;
  };

  setInitialX = (coordinate: number) => {
    this.initialX = coordinate;
  };

  setInitialY = (coordinate: number) => {
    this.initialY = coordinate;
  };

  setFinalX = (coordinate: number) => {
    this.finalX = coordinate;
  };

  setFinalY = (coordinate: number) => {
    this.finalY = coordinate;
  };

  setCurrentStratagemKeyIndex = (index: number) => {
    this.currentStratagemKeyIndex = index;
  };

  setCurrentRoundNumber = (roundNumber: number) => {
    this.currentRoundNumber = roundNumber;
  };

  setSecondsLeftCount = (count: number) => {
    this.secondsLeft = count;
  };

  setCurrentScore = (score: number) => {
    this.currentScore = score;
  };

  setFinalScore = (score: number) => {
    this.finalGameScore = score;
  };

  setHighestScore = (score: number) => {
    this.highestGameScore = score;
  };

  setCurrentRoundBonus = (bonus: number) => {
    this.currentRoundBonus = bonus;
  };

  setRoundTimeBonus = (bonus: number) => {
    this.currentRoundTimeBonus = bonus;
  };

  changeIsRequiredKeyPressedStatus = (status: boolean) => {
    this.isRequiredKeyPressed = status;
  };

  changeIsGameStartedStatus = (status: boolean) => {
    this.isGameStarted = status;
  };

  changeIsResultsShowedStatus = (status: boolean) => {
    this.isResultsShowed = status;
  };

  changeIsRoundEndedStatus = (status: boolean) => {
    this.isRoundEnded = status;
  };

  changeIsRoundLostStatus = (status: boolean) => {
    this.isRoundLost = status;
  };

  changeIsClearInputRoundStatus = (status: boolean) => {
    this.isClearInputRound = status;
  };

  changeIsStratagemInputSuccessfulStatus = (status: boolean) => {
    this.isStratagemInputSuccessful = status;
  };

  changeIsStratagemInputFailStatus = (status: boolean) => {
    this.isStratagemInputFail = status;
  };

  changeIsButtonChoosenStatus = (status: boolean) => {
    this.isButtonsChoosen = status;
  };

  // Методы с логикой игры

  handleTouchStart = (event: TouchEvent) => {
    this.setInitialX(event.touches[0].clientX);
    this.setInitialY(event.touches[0].clientY);
  };

  handleTouchMove = (event: TouchEvent) => {
    this.setFinalX(event.touches[0].clientX);
    this.setFinalY(event.touches[0].clientY);
  };

  handleTouchEnd = () => {
    const deltaX = this.finalX - this.initialX;
    const deltaY = this.finalY - this.initialY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        simulateKeyPress(68);
      } else {
        simulateKeyPress(65);
      }
    } else {
      if (deltaY > 0) {
        simulateKeyPress(83);
      } else {
        simulateKeyPress(87);
      }
    }
  };

  clearCurrentStratagemDirections = () => {
    const { currentStratagem } = stratagemStore;

    stratagemStore.setCurrentStratagem({
      ...currentStratagem,
      directions: currentStratagem.directions.map((direction) => ({
        ...direction,
        isPressed: false,
      })),
    });
  };

  getKeyCode = (event: KeyboardEvent) => {
    switch (event.keyCode) {
      case 38:
        return 87;
      case 40:
        return 83;
      case 37:
        return 65;
      case 39:
        return 68;
      case 87:
      case 83:
      case 68:
      case 65:
        return event.keyCode;
    }
  };

  clearStratagemsDirections = (propName: any) => {
    const { stratagems } = stratagemStore;

    stratagems[propName] = stratagems[propName].map((stratagem) => ({
      ...stratagem,
      directions: stratagem.directions.map((direction) => {
        return { ...direction, isPressed: false };
      }),
    }));
  };

  restartStratagemInput = () => {
    this.changeIsStratagemInputFailStatus(true);
    this.changeIsClearInputRoundStatus(false);

    setTimeout(() => {
      this.clearCurrentStratagemDirections();

      this.changeIsStratagemInputFailStatus(false);
    }, 150);
  };

  handleCorrectStratagemInput = () => {
    this.setCurrentScore(this.currentScore + 20);
    this.setCurrentStratagemKeyIndex(0);

    if (stratagemStore.nextStratagemsArray.length) {
      setTimeout(() => {
        stratagemStore.currentStratagem.directions.forEach(
          (direction) => (direction.isPressed = false),
        );

        stratagemStore.setCurrentStratagem(
          stratagemStore.nextStratagemsArray[0],
        );
        stratagemStore.setNextStratagemsArray(
          stratagemStore.nextStratagemsArray.slice(1),
        );
      }, 250);
    } else {
      this.handleRoundWin();
    }

    this.secondsLeft > 9
      ? this.setSecondsLeftCount(10)
      : this.setSecondsLeftCount(this.secondsLeft + 1);

    this.changeIsStratagemInputSuccessfulStatus(true);
  };

  handleGameStart = (event: KeyboardEvent) => {
    if ((event.keyCode === 38 || event.keyCode === 87) && !this.isGameStarted) {
      if (typeof document !== "undefined") {
        document.removeEventListener("keydown", this.handleGameStart);

        if (mobileStore.isMobileDevice) {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

          if (!this.isButtonsChoosen) {
            document.addEventListener("touchstart", this.handleTouchStart);
            document.addEventListener("touchmove", this.handleTouchMove);
            document.addEventListener("touchend", this.handleTouchEnd);
          }
        }
      }

      this.changeIsRequiredKeyPressedStatus(true);

      setTimeout(() => this.changeIsGameStartedStatus(true), 300);

      this.handleRoundStart();
    }
  };

  handleGameLost = () => {
    this.changeIsRoundEndedStatus(true);
    this.changeIsRoundLostStatus(true);
    this.changeIsStratagemInputSuccessfulStatus(false);

    this.setCurrentRoundNumber(0);

    this.setFinalScore(this.currentScore);

    if (this.finalGameScore > this.highestGameScore) {
      this.setHighestScore(this.finalGameScore);
    }

    setTimeout(() => {
      this.changeIsRoundEndedStatus(false);
      this.changeIsRoundLostStatus(false);

      this.setFinalScore(0);

      document.addEventListener("keydown", this.handleGameStart);
    }, 3500);

    setTimeout(() => {
      this.setCurrentRoundNumber(1);
      this.setCurrentRoundBonus(75);
      this.setCurrentScore(0);

      this.changeIsGameStartedStatus(false);
      this.changeIsRequiredKeyPressedStatus(false);

      stratagemStore.setNextStratagemsArray([]);

      document.removeEventListener("keydown", this.handleGameStart);

      document.removeEventListener("touchstart", this.handleTouchStart);
      document.removeEventListener("touchmove", this.handleTouchMove);
      document.removeEventListener("touchend", this.handleTouchEnd);

      clearInterval(this.secondsInterval);
    }, 5);
  };

  handleCorrectKeyInput = () => {
    const { currentStratagem } = stratagemStore;

    const updatedDirections = [...currentStratagem.directions];
    updatedDirections[this.currentStratagemKeyIndex].isPressed = true;

    this.setCurrentStratagemKeyIndex(this.currentStratagemKeyIndex + 1);

    if (this.currentStratagemKeyIndex === currentStratagem.keyCodes.length) {
      this.handleCorrectStratagemInput();
    }

    stratagemStore.setCurrentStratagem({
      ...currentStratagem,
      directions: updatedDirections,
    });
  };

  handleRoundStart = () => {
    this.changeIsRoundEndedStatus(false);
    this.changeIsClearInputRoundStatus(true);

    this.setSecondsLeftCount(10);
    this.setRoundTimeBonus(0);

    this.setCurrentRoundBonus(this.currentRoundBonus + 25);

    const { currentStratagem } = stratagemStore;

    const stratagemsArray = Object.values(stratagemStore.stratagems)
      .map((shipModule) => [...shipModule])
      .flat();

    stratagemStore.setCurrentStratagem(
      getRandomEntity(stratagemsArray, currentStratagem),
    );

    for (let i = 0; i < 4 + this.currentRoundNumber; i++) {
      stratagemStore.setNextStratagemsArray([
        ...stratagemStore.nextStratagemsArray,
        getRandomEntity(stratagemsArray, currentStratagem),
      ]);
    }

    this.setSecondsInterval(
      setInterval(() => {
        this.setSecondsLeftCount(this.secondsLeft - 0.01);

        if (this.secondsLeft < 0) {
          this.handleGameLost();
        }
      }, 10),
    );

    Object.keys(stratagemStore.stratagems).map((key) =>
      this.clearStratagemsDirections(key),
    );

    document.addEventListener("keydown", this.handleStratagemKeyPress);
  };

  handleRoundWin = () => {
    document.removeEventListener("keydown", this.handleStratagemKeyPress);

    this.changeIsRoundEndedStatus(true);
    this.changeIsResultsShowedStatus(true);

    this.setCurrentRoundNumber(this.currentRoundNumber + 1);

    clearInterval(this.secondsInterval);

    this.setRoundTimeBonus(10 * this.secondsLeft);
    this.setCurrentScore(
      this.currentScore +
        this.currentRoundBonus +
        Number(this.currentRoundTimeBonus.toFixed(0)),
    );

    if (this.isClearInputRound) {
      this.setCurrentScore(this.currentScore + 100);
    }

    Object.keys(stratagemStore.stratagems).map((key) =>
      this.clearStratagemsDirections(key),
    );

    setTimeout(() => this.changeIsResultsShowedStatus(false), 3000);

    setTimeout(() => this.handleRoundStart(), 4500);
  };

  handleStratagemKeyPress = (() => {
    return (event: any) => {
      event.preventDefault();

      const targetKey =
        stratagemStore.currentStratagem.keyCodes[this.currentStratagemKeyIndex];

      if (this.getKeyCode(event) === targetKey) {
        this.handleCorrectKeyInput();
      } else {
        this.setCurrentStratagemKeyIndex(0);

        this.restartStratagemInput();
      }
    };
  })();
}

export const stratagemTrainingStore = new StratagemTrainingStore();
