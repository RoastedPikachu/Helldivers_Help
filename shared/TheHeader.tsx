import React from "react";

import Link from "next/link";

const TheHeader = () => {
  return (
    <header className="flex items-center px-[5%] w-full h-[65px]">
      <img src="/static/SkullIcon.svg" alt="" className="w-[40px] h-[40px]" />

      <Link
        href="/"
        className="ml-[10px] text-[#ffffff] text-[2rem] font-['Insignia'] font-bold"
      >
        HELLDIVERS <b className="text-[#2cc384]">help</b>
      </Link>
    </header>
  );
};

export default TheHeader;
