"use client";
import React, { useState } from "react";

import { useTranslations } from "next-intl";

import dynamic from "next/dynamic";

import { observer, Observer } from "mobx-react-lite";

import { mobileStore } from "@/store/MobileStore";

import MajorOrderSection from "@/widgets/warPage/majorOrderSection/MajorOrderSection";
import CampaignsSection from "@/widgets/warPage/campaignsSection/CampaignsSection";

import SectionTitle from "@/shared/sectionTitle/SectionTitle";

import OrdersSection from "@/widgets/warPage/ordersSection/OrdersSection";

import "./TheWarContent.css";

const DynamicGalaxyMap = dynamic(
  () => import("@/widgets/warPage/galaxyMap/GalaxyMap"),
  { ssr: false },
);

const TheWarContent = observer(() => {
  const t = useTranslations("WarPage");

  const [targetContentPage, setTargetContentPage] = useState(1);
  const getSpecificContentPage = () => {
    switch (targetContentPage) {
      case 1:
        return <CampaignsSection />;
      case 2:
        return (
          <section className="relative mlarge:mt-[25px] w-full h-auto">
            <div className="w-full h-[90vw]">
              <DynamicGalaxyMap />
            </div>
          </section>
        );
      case 3:
        return <MajorOrderSection />;
    }
  };
  return (
    <Observer>
      {() => (
        <main className="flex mlarge:block justify-center items-center mlarge:mt-[115px]">
          {/*<div className="relative grid justify-items-center">*/}
          {/*  <p className="text-theme text-[2.5rem] mlarge:text-[2rem] mmedium:text-[1.875rem] msmall:text-[1.75rem] text-center font-primary">*/}
          {/*    {t("title1")}*/}
          {/*  </p>*/}

          {/*  <p className="mt-[20px] mlarge:mt-[30px] text-theme text-[2rem] mlarge:text-[1.5rem] mmedium:text-[1.375rem] msmall:text-[1.25rem] text-center font-primary">*/}
          {/*    {t("title2")}*/}
          {/*  </p>*/}
          {/*</div>*/}

          {/*<aside className="galaxyMap">*/}
          {/*  <DynamicGalaxyMap />*/}
          {/*  <MajorOrderSection />*/}
          {/*</aside>*/}

          {!mobileStore.isMobileDevice ? (
            <OrdersSection />
          ) : (
            // <CampaignsSection />
            getSpecificContentPage()
          )}

          {/*{mobileStore.isMobileDevice && (*/}
          {/*  <div className="fixed flex justify-between items-center left-0 bottom-[30px] px-[15px] mx-[calc((100%-320px)/2)] mmedium:mx-[calc((100%-300px)/2)] msmall:mx-[calc((100%-280px)/2)] w-[320px] mmedium:w-[300px] msmall:w-[280px] h-[50px] mmedium:h-[45px] msmall:h-[40px] bg-[#00293a] border-2 border-[#2cc388] rounded-[10px]">*/}
          {/*    <button*/}
          {/*      onClick={() => setTargetContentPage(1)}*/}
          {/*      className="pr-[15px] h-full border-r-2 border-[#2cc388] text-[#ffffff] text-[1.125rem] mmedium:text-[1rem] msmall:text-[0.875rem] font-['Exo2'] font-medium"*/}
          {/*    >*/}
          {/*      СРАЖЕНИЯ*/}
          {/*    </button>*/}

          {/*    <button*/}
          {/*      onClick={() => setTargetContentPage(2)}*/}
          {/*      className="px-[5px] w-[50px] h-[50px]"*/}
          {/*    >*/}
          {/*      <img*/}
          {/*        src="/GeneralIcons/GalaxyMapIcon.svg"*/}
          {/*        alt=""*/}
          {/*        className="w-full h-full scale-[1.2]"*/}
          {/*      />*/}
          {/*    </button>*/}

          {/*    <button*/}
          {/*      onClick={() => setTargetContentPage(3)}*/}
          {/*      className="pl-[15px] h-full border-l-2 border-[#2cc388] text-[#ffffff] text-[1.125rem] mmedium:text-[1rem] msmall:text-[0.875rem] font-['Exo2'] font-medium"*/}
          {/*    >*/}
          {/*      ПРИКАЗЫ*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*)}*/}
        </main>
      )}
    </Observer>
  );
});

export default TheWarContent;
