"use client";
import React, { useEffect, useMemo } from "react";

import { Observer, observer } from "mobx-react-lite";

import { mobileStore } from "@/store/MobileStore";

import TheHeader from "@/widgets/header/TheHeader";

import RunningLine from "@/shared/runningLine/RunningLine";

import "./TheTopPageBlock.css";

const TheTopPageBlock = observer(() => {
  const isRunningLineShowed = useMemo(() => {
    if (typeof window !== "undefined" && mobileStore.isMobileDevice) {
      return !window.location.href.includes("/stratagemTraining");
    }
    return true;
  }, []);

  useEffect(() => {}, []);
  return (
    <Observer>
      {() => (
        <section className="topPageSection">
          <TheHeader />

          {isRunningLineShowed && <RunningLine />}
        </section>
      )}
    </Observer>
  );
});

export default TheTopPageBlock;
