"use client";
import React, { useState, useEffect } from "react";

import { Quote } from "@/utils/generalInterfaces";
import { getRandomQuote } from "@/utils/generalFunctions";

import { quotes } from "@/improvised_db";

import TheHeader from "@/shared/TheHeader";
import TheFooter from "@/shared/TheFooter";

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState({} as Quote);

  useEffect(() => {
    setCurrentQuote(getRandomQuote(quotes, currentQuote));
  }, []);

  return (
    <>
      <TheHeader />

      <main className="w-full h-[850px]">
        <marquee
          behavior="scroll"
          direction="left"
          width="100%"
          height="65"
          bgcolor="#00293a"
          className="flex items-center border-y-[1px] border-[#2cc384] text-[#ffffff] text-[1.75rem] font-medium"
        >
          {currentQuote.text}
        </marquee>

        <div className="w-full h-[300px]">
          <h2 className="mt-[50px] text-[#ffffff] text-[2.5rem] text-center font-bold">
            Практика стратагем
          </h2>

          <div className="mt-[50px] mx-[25%] w-[50%] h-[150px] bg-[#00293a]">
            <img src="" alt="" />
          </div>
        </div>
      </main>

      <TheFooter />
    </>
  );
}
