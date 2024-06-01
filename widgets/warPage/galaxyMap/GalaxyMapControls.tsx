"use client";
import React from "react";

import { useControls } from "react-zoom-pan-pinch";

const GalaxyMapControls = () => {
  const { zoomIn, zoomOut } = useControls();

  return (
    <div>
      <div className="absolute top-[15px] mlarge:top-[12.5px] mmedium:top-[10px] msmall:top-[7.5px] left-[15px] mlarge:left-[12.5px] mmedium:left-[10px] msmall:left-[7.5px] w-[40px] mlarge:w-[37.5px] mmedium:w-[35px] msmall:w-[32.5px] h-auto bg-[#07212f] border-2 border-[#2cc388] rounded-[5px] z-20">
        <button
          onClick={() => zoomIn()}
          className="flex justify-center items-center w-full h-[40px] mlarge:h-[37.5px] mmedium:h-[35px] msmall:h-[32.5px] border-b-2 border-[#2cc388] text-[#2cc388] text-[1.5rem] mlarge:text-[1.375rem] mmedium:text-[1.25rem] msmall:text-[1.125rem] font-['Insignia'] font-bold"
        >
          +
        </button>

        <button
          onClick={() => zoomOut()}
          className="flex justify-center items-center w-full h-[40px] mlarge:h-[37.5px] mmedium:h-[35px] msmall:h-[32.5px] text-[#2cc388] text-[1.5rem] mlarge:text-[1.375rem] mmedium:text-[1.25rem] msmall:text-[1.125rem] font-['Insignia'] font-bold"
        >
          –
        </button>
      </div>
    </div>
  );
};

export default GalaxyMapControls;
