"use client";
import React, { useEffect } from "react";

import axios from "axios";

import TheHeader from "@/shared/TheHeader";
import TheFooter from "@/shared/TheFooter";

const Page = () => {
  return (
    <>
      <TheHeader />

      <main className="w-full h-[850px]"></main>

      <TheFooter />
    </>
  );
};

export default Page;
