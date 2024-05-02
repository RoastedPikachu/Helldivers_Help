"use client";
import React from "react";

import TopPageBlock from "@/widgets/topPageBlock/TopPageBlock";
import TheFooter from "@/widgets/footer/TheFooter";
import MajorOrderSection from "@/widgets/warPage/majorOrderSection/MajorOrderSection";
import CampaignsSection from "@/widgets/warPage/campaignsSection/CampaignsSection";

import SectionTitle from "@/shared/sectionTitle/SectionTitle";

import "./WarPage.css";

const Page = () => {
  return (
    <>
      <TopPageBlock />

      <main className="flex justify-between">
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
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
