"use client";
import React from "react";

interface CodeRuleProps {
  id: number;
  text: string;
}

const CodeRule: React.FC<CodeRuleProps> = ({ id, text }) => {
  return (
    <div className="px-[30px] mlarge:px-[15px] pt-[20px] mlarge:pt-[10px] pb-[30px] mlarge:pb-[20px] w-full h-auto bg-[#00293a] border-2 border-[--theme-color] rounded-[10px]">
      <p className="text-[#2cc388] text-[2.5rem] mlarge:text-[2rem] mmedium:text-[1.875rem] msmall:text-[1.75rem] font-['Exo2'] font-bold">
        {id}.
      </p>

      <p className="mt-[15px] mlarge:mt-[5px] text-[#ffffff] text-[1.375rem] mlarge:text-[1.125rem] msmall:text-[1rem] font-['Exo2'] font-medium">
        {text}.
      </p>
    </div>
  );
};

export default CodeRule;
