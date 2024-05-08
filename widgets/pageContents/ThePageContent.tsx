"use client";
import React from "react";

import TheTopPageBlock from "@/widgets/topPageBlock/TheTopPageBlock";
import TheFooter from "@/widgets/footer/TheFooter";

import TheScrollToUpButton from "@/shared/theScrollToUpButton/TheScrollToUpButton";

const ThePageContent: React.FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <TheTopPageBlock />

      <TheScrollToUpButton />

      {children}

      <TheFooter />
    </>
  );
};

export default ThePageContent;
