"use client";
import React, { useState, useEffect } from "react";

import axios from "axios";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";
import ThePageTitle from "@/shared/ThePageTitle";

import ActiveCampaign from "@/entities/activeCampaign/ActiveCampaign";
import ActiveCampaignsError from "@/entities/activeCampaignsError/ActiveCampaignsError";

import "./War.css";

const Page = () => {
  const [activeCampaigns, setActiveCampaigns] = useState([] as any[]);
  const [planetRegenArray, setPlanetRegenArray] = useState([] as any);

  const getActiveCampaigns = () => {
    let result = [] as any[];

    axios
      .get("https://helldiverstrainingmanual.com/api/v1/war/campaign")
      .then((response) => {
        result = response.data;

        setActiveCampaigns(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    return result;
  };

  const getPlanetRegen = () => {
    axios
      .get("https://helldiverstrainingmanual.com/api/v1/war/status")
      .then((response) => {
        setPlanetRegenArray(response.data.planetStatus);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getActiveCampaigns();
    getPlanetRegen();

    let campaignInterval = setInterval(() => getActiveCampaigns(), 5000) as any;
    let planetRegenInterval = setInterval(() => getPlanetRegen(), 15000) as any;

    return () => {
      campaignInterval = null;
    };
  }, []);
  return (
    <>
      <TheHeader />

      <RunningLine />

      <main className="flex justify-between">
        <section className="galaxyMap">
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
        </section>

        <section>
          <ThePageTitle title={"активные сражения"} additionalTitle={""} />

          <div className="activeEfforts">
            {activeCampaigns.length ? (
              activeCampaigns.map((activeCampaign) => (
                <ActiveCampaign
                  key={activeCampaign.planetIndex}
                  planetIndex={activeCampaign.planetIndex}
                  fraction={activeCampaign.faction}
                  percentage={activeCampaign.percentage}
                  playersCount={activeCampaign.players}
                  planetRegenArray={planetRegenArray}
                  isDefense={activeCampaign.defense}
                />
              ))
            ) : (
              <ActiveCampaignsError />
            )}
          </div>
        </section>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
