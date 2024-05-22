"use client";
import React, { memo, useEffect, useState } from "react";

import { Observer, observer } from "mobx-react-lite";

import { mobileStore } from "@/store/MobileStore";

import TheHeader from "@/widgets/header/TheHeader";

import RunningLine from "@/shared/runningLine/RunningLine";

import "./TheTopPageBlock.css";

const TheTopPageBlock = observer(() => {
  const [isRunningLineShowed, changeIsRunningLineShowedStatus] = useState(true);

  useEffect(() => {
    let runningLineShowedStatusInterval: ReturnType<typeof setInterval>;

    if (typeof window !== "undefined" && mobileStore.isMobileDevice) {
      runningLineShowedStatusInterval = setInterval(
        () =>
          changeIsRunningLineShowedStatus(
            !window.location.href.includes("/stratagemTraining"),
          ),
        1000,
      );
    }

    return () => {
      clearInterval(runningLineShowedStatusInterval);
    };
  }, []);
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

const MemoizedTheTopPageBlock = memo(TheTopPageBlock);

export default MemoizedTheTopPageBlock;
