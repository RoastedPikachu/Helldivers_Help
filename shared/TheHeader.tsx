import React from "react";

import Link from "next/link";

const TheHeader = () => {
  return (
    <header className="flex justify-between items-center px-[5%] w-full h-[65px]">
      <Link
        href="/"
        className="text-[#ffffff] text-[2rem] font-['Insignia'] font-bold"
      >
        HELLDIVERS <b className="text-[#2cc384]">help</b>
      </Link>

      <nav className="flex items-center w-auto">
        <Link href="/">Home</Link>
      </nav>
    </header>
  );
};

export default TheHeader;
