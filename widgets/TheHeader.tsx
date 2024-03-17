import React from "react";

import Link from "next/link";

const TheHeader = () => {
  return (
    <header className="relative flex justify-between items-center px-[5%] w-full h-[65px]">
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

      <nav className="flex justify-between w-[20%]">
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
          href="/manual"
          className="text-[#ffffff] text-[1.375rem] font-['Exo2'] font-bold"
        >
          СПРАВОЧНИК
        </Link>
      </nav>
    </header>
  );
};

export default TheHeader;
