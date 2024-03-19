"use client";
import React from "react";

interface TerminidProps {
  id: number;
  imagePath: string;
  title: string;
}

const Terminid: React.FC<TerminidProps> = ({ id, imagePath, title }) => {
  return (
    <div className="grid justify-items-center px-[30px] py-[30px] w-full h-auto bg-[#00293a] border-2 border-[#2cc388] rounded-[10px] cursor-pointer">
      {imagePath ? (
        <img src={`${imagePath}`} alt="" className="w-[300px] h-[170px]" />
      ) : (
        <p className="mt-[15px] text-[#2cc388] text-[6rem] text-center font-['Insignia'] font-bold">
          ?
        </p>
      )}

      <p className="mt-[20px] text-[#ffffff] text-[1.75rem] text-center font-['Exo2'] font-bold">
        {title}
      </p>
    </div>
  );
};

export default Terminid;
