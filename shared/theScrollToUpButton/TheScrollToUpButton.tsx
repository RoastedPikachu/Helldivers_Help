"use client";
import React, { useState, useEffect } from "react";

import { observer, Observer } from "mobx-react-lite";

import { mobileStore } from "@/store/MobileStore";

import "./TheScrollToUpButton.css";

const TheScrollToUpButton = observer(() => {
  const [isScrollButtonShowed, changeIsScrollButtonShowed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      changeIsScrollButtonShowed(window.scrollY > 300),
    );

    return () => {
      window.removeEventListener("scroll", () =>
        changeIsScrollButtonShowed(window.scrollY > 300),
      );
    };
  }, []);
  return (
    <Observer>
      {() => (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className={`${isScrollButtonShowed ? "opacity-1" : "opacity-0 scroll-default"} ${mobileStore.isMobileDevice ? "hidden" : "block"} buttonWrapper`}
        >
          <img
            src="/static/GeneralIcons/ArrowDownIcon.svg"
            alt="Кнопка: Вернуться к верху страницы"
            className="buttonImage"
          />
        </button>
      )}
    </Observer>
  );
});

export default TheScrollToUpButton;
