import { makeAutoObservable } from "mobx";

import { makePersistable } from "mobx-persist-store";

import {
  Direction,
  Stratagem,
  stratagemStore,
  SuperDestroyerStratagem,
} from "@/store/StratagemStore";
import { mobileStore } from "@/store/MobileStore";

import { getRandomEntity, simulateKeyPress } from "@/utils/generalFunctions";

class StratagemTrainingStore {
  secondsInterval: ReturnType<typeof setInterval> | undefined | number;

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

  isStratagemInputSuccessful = true;
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

  // Методы отслеживания свайпов

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

  setTouchEventListeners = () => {
    document.addEventListener("touchstart", this.handleTouchStart);
    document.addEventListener("touchmove", this.handleTouchMove);
    document.addEventListener("touchend", this.handleTouchEnd);
  };

  clearTouchEventListeners = () => {
    document.removeEventListener("touchstart", this.handleTouchStart);
    document.removeEventListener("touchmove", this.handleTouchMove);
    document.removeEventListener("touchend", this.handleTouchEnd);
  };

  // Метод получения кода нажатой клавиши

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

  // Методы возвращения значений к первоначальным

  resetCurrentStratagemDirections = () => {
    stratagemStore.currentStratagem = {
      ...stratagemStore.currentStratagem,
      directions: stratagemStore.currentStratagem.directions.map(
        (direction: Direction) => {
          return { ...direction, isPressed: false };
        },
      ),
    };
  };

  // TODO: Пофиксить работоспособность этой функции

  resetStratagemsDirections = () => {
    Object.keys(stratagemStore.stratagems).forEach((key) => {
      // @ts-ignore
      stratagemStore.stratagems[key] = stratagemStore.stratagems[key].map(
        (stratagem: Stratagem | SuperDestroyerStratagem) => ({
          ...stratagem,
          directions: stratagem.directions.map((direction: Direction) => {
            return { ...direction, isPressed: false };
          }),
        }),
      );
    });
  };

  // Методы, отвечающие за ввод стратагем и их логику

  restartStratagemInput = () => {
    this.setCurrentStratagemKeyIndex(0);

    this.changeIsStratagemInputFailStatus(true);
    this.changeIsClearInputRoundStatus(false);

    setTimeout(() => {
      this.resetCurrentStratagemDirections();

      this.changeIsStratagemInputFailStatus(false);
    }, 150);
  };

  getNextStratagem = () => {
    document.addEventListener("keydown", this.handleStratagemKeyPress);

    this.resetStratagemsDirections();

    stratagemStore.setCurrentStratagem(stratagemStore.nextStratagemsArray[0]);
    stratagemStore.setNextStratagemsArray(
      stratagemStore.nextStratagemsArray.slice(1),
    );
  };

  handleCorrectStratagemInput = () => {
    document.removeEventListener("keydown", this.handleStratagemKeyPress);

    this.setCurrentScore(this.currentScore + 20);
    this.setCurrentStratagemKeyIndex(0);

    if (stratagemStore.nextStratagemsArray.length) {
      this.secondsLeft > 9
        ? this.setSecondsLeftCount(10)
        : this.setSecondsLeftCount(this.secondsLeft + 1);

      setTimeout(() => {
        this.getNextStratagem();
      }, 150);
    } else {
      this.handleRoundWin();
    }
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
            this.setTouchEventListeners();
          }
        }
      }

      this.changeIsRequiredKeyPressedStatus(true);

      setTimeout(() => this.changeIsGameStartedStatus(true), 300);

      this.handleRoundStart();
    }
  };

  handleGameLost = () => {
    this.resetStratagemsDirections();

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

      this.clearTouchEventListeners();

      if (this.secondsInterval !== 0) {
        clearInterval(this.secondsInterval);

        this.setSecondsInterval(0 as unknown as ReturnType<typeof setInterval>);
      }
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

    if (
      !stratagemStore.nextStratagemsArray.length &&
      stratagemStore.nextStratagemsArray.length !== this.currentRoundNumber + 4
    ) {
      for (let i = 0; i < 4 + this.currentRoundNumber; i++) {
        stratagemStore.setNextStratagemsArray([
          ...stratagemStore.nextStratagemsArray,
          getRandomEntity(stratagemsArray, currentStratagem),
        ]);
      }
    }

    if (!this.secondsInterval) {
      this.setSecondsInterval(
        setInterval(() => {
          this.setSecondsLeftCount(this.secondsLeft - 0.01);

          if (this.secondsLeft <= 0) {
            this.handleGameLost();
          }
        }, 10),
      );
    }

    document.addEventListener("keydown", this.handleStratagemKeyPress);
  };

  handleRoundWin = () => {
    this.changeIsRoundEndedStatus(true);
    this.changeIsResultsShowedStatus(true);

    this.setCurrentRoundNumber(this.currentRoundNumber + 1);

    if (this.secondsInterval !== 0) {
      clearInterval(this.secondsInterval);

      this.setSecondsInterval(0 as unknown as ReturnType<typeof setInterval>);
    }

    this.setRoundTimeBonus(10 * this.secondsLeft);
    this.setCurrentScore(
      this.currentScore +
        this.currentRoundBonus +
        Number(this.currentRoundTimeBonus.toFixed(0)),
    );

    if (this.isClearInputRound) {
      this.setCurrentScore(this.currentScore + 100);
    }

    this.resetStratagemsDirections();

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
        this.restartStratagemInput();
      }
    };
  })();
}

export const stratagemTrainingStore = new StratagemTrainingStore();
