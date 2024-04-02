"use client";
import React from "react";

import Link from "next/link";

interface ManualSectionProps {
  id: number;
  link: string;
  title: string;
}

const ManualSection: React.FC<ManualSectionProps> = ({ id, link, title }) => {
  return (
    <Link href={link}>
      <div className="px-[30px] pt-[20px] pb-[30px] w-full h-auto bg-[#00293a] border-2 border-[--theme-color] rounded-[10px] cursor-pointer">
        <p className="text-[--theme-color] text-[2.5rem] font-['Exo2'] font-bold">
          {id}.
        </p>

        <p className="mt-[15px] text-[#ffffff] text-[1.75rem] font-['Exo2'] font-bold">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default ManualSection;
