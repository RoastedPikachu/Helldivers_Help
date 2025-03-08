import React, { useEffect, useState } from "react";

import axios from "axios";

import SectionTitle from "@/shared/sectionTitle/SectionTitle";

import ActiveCampaignError from "@/entities/campaign/activeCampaignError/ActiveCampaignError";
import ActiveCampaign from "@/entities/campaign/activeCampaign/ActiveCampaign";
import ActiveCampaignBlank from "@/entities/campaign/activeCampaignBlank/ActiveCampaignBlank";

import "./campaignsSection.css";

const CampaignsSection = () => {
  const [isActiveCampaignsLoaded, changeActiveCampaignsLoadStatus] =
    useState(false);
  const [
    isActiveCampaignsReceiveError,
    changeActiveCampaignsReceiveErrorStatus,
  ] = useState(false);
  const [isPlanetsAdditionalDataLoaded, changePlanetsAdditionalDataLoadStatus] =
    useState(false);
  const [
    isPlanetsAdditionalDataReceiveError,
    changePlanetsAdditionalDataReceiveErrorStatus,
  ] = useState(false);

  const [activeCampaigns, setActiveCampaigns] = useState([] as any[]);
  const [planetRegenArray, setPlanetRegenArray] = useState([] as any[]);
  const [events, setEvents] = useState([] as any[]);

  const [impactMultiplier, setImpactMultiplier] = useState(0);
  const [totalPlayers, setTotalPlayers] = useState(0);

  const getActiveCampaigns = () => {
    let result = [] as any[];

    axios
      .get("https://helldiverstrainingmanual.com/api/v1/war/campaign")
      .then((response) => {
        changeActiveCampaignsReceiveErrorStatus(false);
        changeActiveCampaignsLoadStatus(true);

        setActiveCampaigns(response.data);
        setTotalPlayers(
          response.data
            .map((campaign: any) => campaign.players)
            .reduce((acc: number, value: number) => (acc += value), 0),
        );
      })
      .catch(() => {
        changeActiveCampaignsReceiveErrorStatus(false);
      });

    return result;
  };

  const getPlanetsAdditionalData = () => {
    axios
      .get("https://helldiverstrainingmanual.com/api/v1/war/status")
      .then((response) => {
        changePlanetsAdditionalDataReceiveErrorStatus(false);
        changePlanetsAdditionalDataLoadStatus(true);

        setImpactMultiplier(response.data.impactMultiplier);
        setPlanetRegenArray(response.data.planetStatus);
        setEvents(response.data.planetEvents);
      })
      .catch(() => {
        changePlanetsAdditionalDataReceiveErrorStatus(true);
      });
  };

  useEffect(() => {
    getActiveCampaigns();
    getPlanetsAdditionalData();

    let campaignInterval = setInterval(() => getActiveCampaigns(), 500) as any;
    let planetsAdditionalDataInterval = setInterval(
      () => getPlanetsAdditionalData(),
      500,
    ) as any;

    return () => {
      campaignInterval = null;
      planetsAdditionalDataInterval = null;
    };
  }, []);
  return (
    <section className="campaignsSection">
      <SectionTitle text={"АКТИВНЫЕ СРАЖЕНИЯ"} />

      {isActiveCampaignsReceiveError && <ActiveCampaignError />}

      <div className="campaignsSection_ActiveCampaigns">
        {!isActiveCampaignsLoaded &&
          !isActiveCampaignsReceiveError &&
          [1, 2, 3].map((blank, index) => (
            <ActiveCampaignBlank key={index + 1} />
          ))}

        {isActiveCampaignsLoaded &&
          !isActiveCampaignsReceiveError &&
          activeCampaigns.map((activeCampaign) => (
            <ActiveCampaign
              key={activeCampaign.planetIndex}
              campaign={activeCampaign}
              event={events.find(
                (event) => event.planetIndex === activeCampaign.planetIndex,
              )}
              totalPlayers={totalPlayers}
              planetRegenArray={planetRegenArray}
              impactMultiplier={impactMultiplier}
            />
          ))}
      </div>
    </section>
  );
};

export default CampaignsSection;
