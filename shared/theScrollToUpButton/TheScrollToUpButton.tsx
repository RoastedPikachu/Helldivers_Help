"use client";
import React, { useState, useEffect } from "react";

import "./TheScrollToUpButton.css";

const TheScrollToUpButton = () => {
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
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className={`${isScrollButtonShowed ? "opacity-1" : "opacity-0 scroll-default"} buttonWrapper`}
    >
      <img
        src="/static/GeneralIcons/ArrowDownIcon.svg"
        alt="Кнопка: Вернуться к верху страницы"
        className="buttonImage"
      />
    </button>
  );
};

export default TheScrollToUpButton;
