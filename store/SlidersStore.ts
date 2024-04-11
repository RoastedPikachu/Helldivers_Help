import { makeAutoObservable } from "mobx";

class SlidersStore {
  swiper;

  constructor() {
    makeAutoObservable(this);
  }

  setSwiper = (swiper: any) => {
    this.swiper = swiper;
  };

  handleCurrentSlideChange = (id: number) => {
    this.swiper.slideTo(id - 1);
  };
}

export const slidersStore = new SlidersStore();
