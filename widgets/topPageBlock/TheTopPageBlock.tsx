"use client";
import React from "react";

import { Observer, observer } from "mobx-react-lite";

import { mobileStore } from "@/store/MobileStore";

import TheHeader from "@/widgets/header/TheHeader";

import RunningLine from "@/shared/runningLine/RunningLine";

import "./TheTopPageBlock.css";

const TheTopPageBlock = observer(() => {
  return (
    <Observer>
      {() => (
        <section className="topPageSection">
          <TheHeader />

          {typeof window !== "undefined" &&
            mobileStore.isMobileDevice &&
            !window.location.href.includes("/stratagemTraining") && (
              <RunningLine />
            )}
        </section>
      )}
    </Observer>
  );
});

export default TheTopPageBlock;
