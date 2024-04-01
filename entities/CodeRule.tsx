"use client";
import React from "react";

interface CodeRuleProps {
  id: number;
  text: string;
}

const CodeRule: React.FC<CodeRuleProps> = ({ id, text }) => {
  return (
    <div className="px-[30px] pt-[20px] pb-[30px] w-full h-auto bg-[#00293a] border-2 border-[--theme-color] rounded-[10px]">
      <p className="text-[#2cc388] text-[2.5rem] font-['Exo2'] font-bold">
        {id}.
      </p>

      <p className="mt-[15px] text-[#ffffff] text-[1.375rem] font-['Exo2'] font-medium">
        {text}.
      </p>
    </div>
  );
};

export default CodeRule;
