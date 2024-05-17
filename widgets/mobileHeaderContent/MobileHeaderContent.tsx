"use client";
import React, { useState } from "react";

import "./MobileHeaderContent.css";
import Link from "next/link";
import { pages } from "@/data/pages/pages";

const MobileHeaderContent = () => {
  const [
    isAdditionalHeaderInfoOpened,
    changeIsAdditionalHeaderInfoOpenedStatus,
  ] = useState(false);

  return (
    <header>
      <div className="flex justify-center items-center w-full h-[50px]">
        <button
          onClick={() =>
            changeIsAdditionalHeaderInfoOpenedStatus((prev) => !prev)
          }
          aria-label={`Кнопка: ${isAdditionalHeaderInfoOpened ? "Закрыть" : "Открыть"} меню с ссылками на другие страницы`}
          className="absolute flex justify-center items-center left-[2.5%] w-[50px] h-[50px]"
        >
          <div className="relative w-[35px] mmedium:w-[32.5px] msmall:w-[30px] h-[28px] mmedium:h-[25px] msmall:h-[23px] duration-[400ms] ease-in-out">
            <span
              className={`absolute left-0 w-full h-[5px] bg-[#2cc388] rounded-[10px] duration-[250ms] ease-in-out ${isAdditionalHeaderInfoOpened ? "top-[11px] -rotate-45" : "top-0"}`}
            ></span>
            <span
              className={`absolute top-[11px] left-0 w-full h-[5px] bg-[#2cc388] rounded-[10px] duration-[250ms] ease-in-out ${isAdditionalHeaderInfoOpened ? "w-0 opacity-0" : ""}`}
            ></span>
            <span
              className={`absolute left-0 w-full h-[5px] bg-[#2cc388] rounded-[10px] duration-[250ms] ease-in-out ${isAdditionalHeaderInfoOpened ? "top-[11px] rotate-45" : "top-[22px]"}`}
            ></span>
          </div>
        </button>

        <Link href="/" className="headerLogoLink_Text">
          HELLDIVERS <b className="headerLogoLink_Text_Bold">help</b>
        </Link>
      </div>

      <div
        className={`absolute top-[115px] msmall:top-[110px] w-full h-[calc(100vh+115px)] bg-[#01212f] duration-[400ms] ease-in-out overscroll-contain ${isAdditionalHeaderInfoOpened ? "left-0" : "left-[-100vw]"}`}
      >
        <nav className="mt-[30px] px-[calc(2.5%+10px)]">
          <div className="flex justify-between items-center w-full">
            <Link
              href="/code"
              className="headerNavBlock_Link py-[10px] msmall:py-[5px] px-[15px] msmall:px-[10px] border-2 border-[#2cc388] rounded-[10px]"
            >
              КОДЕКС
            </Link>

            <img
              src="/static/GeneralIcons/SkullIcon.svg"
              alt=""
              className="headerLogoLink_Icon"
            />

            <Link
              href="/war"
              className="headerNavBlock_Link py-[10px] msmall:py-[5px] px-[15px] msmall:px-[10px] border-2 border-[#2cc388] rounded-[10px]"
            >
              ВОЙНА
            </Link>
          </div>

          <div className="flex justify-center items-center mt-[20px] w-full">
            <Link
              href="/stratagemTraining"
              className="headerNavBlock_Link py-[10px] msmall:py-[5px] px-[15px] msmall:px-[10px] border-2 border-[#2cc388] rounded-[10px]"
            >
              ТРЕНИРОВКА СТРАТАГЕМ
            </Link>
          </div>

          <div className="relative grid gap-y-[15px] mt-[30px] z-[40]">
            {pages.map((page) => (
              <Link
                key={page.id}
                href={`${page.link}`}
                className="block text-[#ffffff] text-[1.25rem] msmall:text-[1.125rem] text-left font-['Exo2'] font-bold outline-none"
              >
                {page.title.toUpperCase()}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MobileHeaderContent;
