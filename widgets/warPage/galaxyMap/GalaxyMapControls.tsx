"use client";
import React, { useState } from "react";

import { useControls } from "react-zoom-pan-pinch";
import { Simulate } from "react-dom/test-utils";
import change = Simulate.change;

const GalaxyMapControls = () => {
  const { zoomIn, zoomOut } = useControls();

  const [isLayerControlHovered, changeIsLayerControlHovered] = useState(false);

  return (
    <div>
      <div className="absolute top-[15px] left-[15px] w-[40px] h-auto bg-[#07212f] border-2 border-[#2cc388] rounded-[5px] z-20">
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

      <div
        onMouseOver={() => changeIsLayerControlHovered(true)}
        onMouseOut={() => changeIsLayerControlHovered(false)}
        className="absolute flex justify-center items-center top-[15px] right-[15px] w-[50px] h-[50px] bg-[#07212f] border-2 border-[#2cc388] rounded-[5px] cursor-pointer z-20"
      >
        {isLayerControlHovered ? (
          <div></div>
        ) : (
          <img
            src="/static/GalaxyMap/LayersControlIcon.svg"
            alt=""
            className="w-[37.5px] h-[37.5px]"
          />
        )}
      </div>
    </div>
  );
};

export default GalaxyMapControls;
