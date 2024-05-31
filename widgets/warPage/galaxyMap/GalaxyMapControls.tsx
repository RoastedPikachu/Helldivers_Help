"use client";
import React from "react";

import { useControls } from "react-zoom-pan-pinch";

const GalaxyMapControls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="absolute top-[15px] left-[15px] w-[40px] h-auto bg-[#07212f] border-2 border-[#2cc388] rounded-[5px]">
      <button
        onClick={() => zoomIn()}
        className="flex justify-center items-center w-full h-[40px] border-b-2 border-[#2cc388] text-[#2cc388] text-[1.5rem] font-['Insignia'] font-bold"
      >
        +
      </button>

      <button
        onClick={() => zoomOut()}
        className="flex justify-center items-center w-full h-[40px] text-[#2cc388] text-[1.5rem] font-['Insignia'] font-bold"
      >
        –
      </button>
    </div>
  );
};

export default GalaxyMapControls;
