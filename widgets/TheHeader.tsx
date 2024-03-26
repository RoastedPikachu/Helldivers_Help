import React from "react";

import Link from "next/link";

const TheHeader = () => {
  return (
    <header className="relative flex justify-between items-center deskWide:mx-[calc((100%-1440px)/2)] px-[5%] deskWide:px-0 w-full max-w-[1440px] h-[65px]">
      <div className="flex items-center h-full">
        <img
          src="/static/generalIcons/SkullIcon.svg"
          alt=""
          className="w-[40px] h-[40px]"
        />

        <Link
          href="/"
          className="ml-[10px] text-[#ffffff] text-[2rem] font-['Insignia'] font-bold"
        >
          HELLDIVERS <b className="text-[#2cc384]">help</b>
        </Link>
      </div>

      <nav className="grid items-center grid-row-1 grid-cols-4 gap-x-[30px] w-auto">
        <Link
          href="/code"
          className="text-[#ffffff] text-[1.375rem] font-['Exo2'] font-bold"
        >
          КОДЕКС
        </Link>

        <Link
          href="/war"
          className="text-[#ffffff] text-[1.375rem] font-['Exo2'] font-bold"
        >
          ВОЙНА
        </Link>

        <Link
          href="/stratagemTraining"
          className="col-span-2 text-[#ffffff] text-[1.375rem] font-['Exo2'] font-bold"
        >
          ТРЕНИРОВКА СТРАТАГЕМ
        </Link>
      </nav>
    </header>
  );
};

export default TheHeader;
