"use client";
import React, { useState, useEffect } from "react";

const TheFooter = () => {
  const [currentYear, setCurrentYear] = useState(2000);

  useEffect(() => {
    const currentDate = new Date();

    setCurrentYear(currentDate.getFullYear());
  }, []);

  return (
    <footer className="px-[5%] py-[20px] w-full h-[100px] bg-[#00293a] border-t-[1px] border-[#2cc384]">
      <div className="grid justify-items-center grid-rows-2 grid-cols-1">
        <span className="flex items-center w-auto text-[#5a7f8f] text-[1.25rem] font-['Insignia'] font-medium">
          <p>The rights to the HELLDIVERS2 game belong to</p>
          <a
            href="https://www.arrowheadgamestudios.com/"
            target="_blank"
            className="ml-[10px] text-[#ffffff] underline"
          >
            Arrowhead
          </a>
        </span>

        <span className="flex items-center w-auto mt-[5px] text-[#5a7f8f] text-[1.25rem] font-['Insignia'] font-medium">
          <p>{currentYear} by</p>

          <a
            href="https://github.com/RoastedPikachu"
            target="_blank"
            className="ml-[10px] text-[#ffffff] underline"
          >
            RoastedPikachu
          </a>
        </span>
      </div>
    </footer>
  );
};

export default TheFooter;
