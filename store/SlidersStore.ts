import { makeAutoObservable } from "mobx";

class SlidersStore {
  swiper: any;

  constructor() {
    makeAutoObservable(this);
  }

  setSwiper = (swiper: any) => {
    this.swiper = swiper;
  };

  handleCurrentSlideChange = (id: number) => {
    this.swiper.slideTo(id - 1);
  };

  handleClickOutsideSlider = (
    event: Event,
    sliderRef: any,
    currentEntityId: any,
    closeFunction: () => void,
  ) => {
    if (
      sliderRef.current &&
      !sliderRef.current.contains(event.target) &&
      currentEntityId
    ) {
      closeFunction();
    }
  };
}

export const slidersStore = new SlidersStore();
