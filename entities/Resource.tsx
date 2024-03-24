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
      className="flex items-center px-[30px] py-[30px] w-full h-auto bg-[#00293a] border-2 border-[#2cc388] rounded-[10px] cursor-pointer"
    >
      <img src={`${iconPath}`} alt="" className="w-[50px] h-[50px]" />

      <p className="ml-[20px] text-[#ffffff] text-[1.75rem] font-['Exo2'] font-bold">
        {title}
      </p>
    </Link>
  );
};

export default Resource;
