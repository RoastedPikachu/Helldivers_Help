"use client";
import React from "react";

import Link from "next/link";

interface ResourceProps {
  id: number;
  iconPath: string;
  title: string;
  handleResourceBlockClick: (id: number) => void;
}

const Resource: React.FC<ResourceProps> = ({
  id,
  iconPath,
  title,
  handleResourceBlockClick,
}) => {
  return (
    <Link
      href="/resources#ResourceInfo"
      onClick={() => handleResourceBlockClick(id)}
      className="flex items-center py-[30px] mlarge:py-[15px] px-[30px] mlarge:px-[15px] w-full h-auto bg-[#00293a] border-2 border-[--theme-color] rounded-[10px] cursor-pointer"
    >
      <img
        src={`${iconPath}`}
        alt=""
        className="w-[50px] mlarge:w-[30px] mmedium:w-[27.5px] h-[50px] mlarge:h-[30px] mmedium:h-[27.5px]"
      />

      <p className="ml-[20px] text-[#ffffff] text-[1.75rem] mlarge:text-[1.5rem] mmedium:text-[1.375rem] font-['Exo2'] font-bold">
        {title}
      </p>
    </Link>
  );
};

export default Resource;
