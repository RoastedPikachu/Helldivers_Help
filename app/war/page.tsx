"use client";
import React, { useState } from "react";

import { observer, Observer } from "mobx-react-lite";

import { mobileStore } from "@/store/MobileStore";

import TopPageBlock from "@/widgets/topPageBlock/TopPageBlock";
import TheFooter from "@/widgets/footer/TheFooter";
import MajorOrderSection from "@/widgets/warPage/majorOrderSection/MajorOrderSection";
import CampaignsSection from "@/widgets/warPage/campaignsSection/CampaignsSection";

import SectionTitle from "@/shared/sectionTitle/SectionTitle";

import "./WarPage.css";

const Page = observer(() => {
  const [targetContentPage, setTargetContentPage] = useState(1);
  const getSpecificContentPage = () => {
    switch (targetContentPage) {
      case 1:
        return <CampaignsSection />;
      case 2:
        return <MajorOrderSection />;
    }
  };

  return (
    <Observer>
      {() => (
        <>
          <TopPageBlock />

          <main className="flex mlarge:block justify-between">
            {!mobileStore.isMobileDevice ? (
              <>
                <aside className="galaxyMap">
                  <SectionTitle text={"КАРТА ГАЛАКТИКИ"} />

                  <div className="galaxyMap_Wrapper">
                    <div className="galaxyMap_Wrapper_BlankBlock">
                      <p className="galaxyMap_Wrapper_BlankBlock_Text">
                        Здесь будет карта
                      </p>

                      <img
                        src="/static/GeneralIcons/BuildIcon.svg"
                        alt=""
                        className="galaxyMap_Wrapper_BlankBlock_Icon"
                      />
                    </div>
                  </div>

                  <MajorOrderSection />
                </aside>

                <CampaignsSection />
              </>
            ) : (
              getSpecificContentPage()
            )}

            {mobileStore.isMobileDevice && (
              <div className="fixed flex justify-between items-center left-0 bottom-[30px] px-[15px] mx-[calc((100%-245px)/2)] mmedium:mx-[calc((100%-225px)/2)] msmall:mx-[calc((100%-205px)/2)] w-[245px] mmedium:w-[225px] msmall:w-[205px] h-[50px] mmedium:h-[45px] msmall:h-[40px] bg-[#00293a] border-2 border-[#2cc388] rounded-[10px]">
                <button
                  onClick={() => setTargetContentPage(1)}
                  className="pr-[15px] h-full border-r-2 border-[#2cc388] text-[#ffffff] text-[1.125rem] mmedium:text-[1rem] msmall:text-[0.875rem] font-['Exo2'] font-medium"
                >
                  СРАЖЕНИЯ
                </button>

                <button
                  onClick={() => setTargetContentPage(2)}
                  className="h-full text-[#ffffff] text-[1.125rem] mmedium:text-[1rem] msmall:text-[0.875rem] font-['Exo2'] font-medium"
                >
                  ПРИКАЗЫ
                </button>
              </div>
            )}
          </main>

          <TheFooter />
        </>
      )}
    </Observer>
  );
});

export default Page;
