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
  const [planetRegenArray, setPlanetRegenArray] = useState([] as any);

  const [impactMultiplier, setImpactMultiplier] = useState(0);

  const getActiveCampaigns = () => {
    let result = [] as any[];

    axios
      .get("https://helldiverstrainingmanual.com/api/v1/war/campaign")
      .then((response) => {
        changeActiveCampaignsReceiveErrorStatus(false);
        changeActiveCampaignsLoadStatus(true);

        setActiveCampaigns(response.data);
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
      })
      .catch(() => {
        changePlanetsAdditionalDataReceiveErrorStatus(true);
      });
  };

  useEffect(() => {
    getActiveCampaigns();
    getPlanetsAdditionalData();

    let campaignInterval = setInterval(() => getActiveCampaigns(), 1000) as any;
    let planetsAdditionalDataInterval = setInterval(
      () => getPlanetsAdditionalData(),
      1000,
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
          activeCampaigns
            .slice(1, 2)
            .map((activeCampaign) => (
              <ActiveCampaign
                key={activeCampaign.planetIndex}
                planetName={activeCampaign.name}
                fraction={activeCampaign.faction}
                isDefense={activeCampaign.defense}
                expiresIn={activeCampaign?.expireDateTime}
                percentage={activeCampaign.percentage}
                playersCount={activeCampaign.players}
                planetRegenArray={planetRegenArray}
                impactMultiplier={impactMultiplier}
              />
            ))}
      </div>
    </section>
  );
};

export default CampaignsSection;
