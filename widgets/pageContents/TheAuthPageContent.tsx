"use client";
import React from "react";

import Link from "next/link";

import { localeStore } from "@/store/LocaleStore";

const TheAuthPageContent: React.FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <header className="flex justify-center items-center mt-[40px]">
        <Link
          href={`/${localeStore.locale}`}
          className="flex items-center pl-[15px] pr-[18px] h-[65px] border-[2px] border-theme rounded-[15px] outline-none"
        >
          <img
            src="/static/GeneralIcons/HelldiversHelmet.svg"
            alt=""
            className="w-[40px] h-[40px]"
          />

          <p className="mmedium:mt-[2.5px] msmall:mt-[5px] ml-[10px] mlarge:ml-0 text-white text-[2rem] mlarge:text-[1.75rem] mmedium:text-[1.625rem] msmall:text-[1.5rem] font-secondary font-bold">
            HELLDIVERS <b className="text-theme">help</b>
          </p>
        </Link>
      </header>

      {children}
    </>
  );
};

export default TheAuthPageContent;
