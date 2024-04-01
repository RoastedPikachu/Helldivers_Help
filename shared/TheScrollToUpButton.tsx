"use client";
import React, { useState, useEffect } from "react";

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
      className={`${isScrollButtonShowed ? "opacity-1" : "opacity-0 scroll-default"} fixed bottom-[170px] right-[15px] duration-[600ms] ease-in-out z-30`}
    >
      <img
        src="/static/GeneralIcons/ArrowDownIcon.svg"
        alt=""
        className="rotate-180 w-[40px] scale-y-[1.2]"
      />
    </button>
  );
};

export default TheScrollToUpButton;
