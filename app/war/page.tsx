"use client";
import React from "react";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";
import MajorOrderSection from "@/widgets/warPage/majorOrderSection/MajorOrderSection";
import CampaignsSection from "@/widgets/warPage/campaignsSection/CampaignsSection";

import RunningLine from "@/shared/RunningLine";
import ThePageTitle from "@/shared/ThePageTitle";

import "./WarPage.css";

const Page = () => {
  return (
    <>
      <TheHeader />

      <RunningLine />

      <main className="flex justify-between">
        <aside className="galaxyMap">
          <ThePageTitle title={"карта галактики"} additionalTitle={""} />

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
