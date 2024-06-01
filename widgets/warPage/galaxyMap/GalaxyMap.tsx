"use client";
import React, { useEffect, useState } from "react";

import axios from "axios";

import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

import { galaxySectors } from "@/data/galaxySectors";

import { planetsStore } from "@/store/PlanetsStore";

import GalaxyMapControls from "@/widgets/warPage/galaxyMap/GalaxyMapControls";

import SectionTitle from "@/shared/sectionTitle/SectionTitle";

import "./GalaxyMap.css";

interface CapturedSector {
  name: string;
  fraction: string;
}

const GalaxyMap = () => {
  const [activePlanets, setActivePlanets] = useState([] as string[]);

  const [activeSectors, setActiveSectors] = useState([] as CapturedSector[]);
  const [inactiveSectors, setInactiveSectors] = useState(
    [] as CapturedSector[],
  );

  const [isSupplyLinesShowed, changeIsSupplyLinesShowedStatus] = useState(true);
  const [isCapturedSectorsShowed, changeIsCapturedSectorsShowedStatus] =
    useState(true);
  const [isActivePlanetsShowed, changeIsActivePlanetsShowedStatus] =
    useState(true);

  const formatPlanetName = (string: string) => {
    // Преобразование строки в Lowercase
    string = string.toLowerCase();

    // Преобразование первой буквы в Uppercase
    string = string.charAt(0).toUpperCase() + string.slice(1);

    // Преобразование символов римских цифр в Uppercase
    string = string.replace(/[ivx]/g, (match) => match.toUpperCase());

    return string;
  };

  const formatSectorName = (string: string) => {
    // Удаление пробелов
    string = string.replace(/\s+/g, "");

    // Удаление символа '
    string = string.replace("'", "");

    // Преобразование первой буквы в Lowercase
    string = string.charAt(0).toLowerCase() + string.slice(1);

    return string;
  };

  const getUniqueCapturedSectors = (sectors: CapturedSector[]) => {
    const uniqueSectors = {} as { [key: string]: CapturedSector };

    for (const sector of sectors) {
      const sectorName = sector.name;

      if (!uniqueSectors.hasOwnProperty(sectorName)) {
        uniqueSectors[sectorName] = sector;
      }
    }

    return Object.values(uniqueSectors);
  };

  const getCapturedSectors = () => {
    axios
      .get("https://api.helldivers2.dev/api/v1/campaigns", {
        headers: {
          "Accept-Language": "ru-RU",
          "X-Super-Client": "Helldivers Help",
          "X-Super-Contact": "gh/RoastedPikachu",
        },
      })
      .then((response) => {
        setActivePlanets(
          response.data.map((campaign: any) =>
            formatPlanetName(campaign.planet.name),
          ),
        );
        setActiveSectors(
          response.data.map((campaign: any) => {
            return {
              name: formatSectorName(campaign.planet.sector),
              fraction: campaign.planet.currentOwner,
            };
          }),
        );
      });
  };

  const getSectorImage = (sector: CapturedSector, isActiveSectors: boolean) => {
    if (isActiveSectors) {
      return sector.fraction === "Terminids"
        ? galaxySectors[sector.name]?.terminidsActiveImage
        : galaxySectors[sector.name]?.automatonsActiveImage;
    }

    return sector.fraction === "Terminids"
      ? galaxySectors[sector.name]?.terminidsInactiveImage
      : galaxySectors[sector.name]?.automatonsInactiveImage;
  };

  useEffect(() => {
    axios
      .get("https://api.helldivers2.dev/api/v1/planets", {
        headers: {
          "Accept-Language": "ru-RU",
          "X-Super-Client": "Helldivers Help",
          "X-Super-Contact": "gh/RoastedPikachu",
        },
      })
      .then((response) =>
        setInactiveSectors(
          getUniqueCapturedSectors(
            response.data
              .filter((planetInfo: any) => planetInfo.currentOwner !== "Humans")
              .map((planetInfo: any) => {
                return {
                  name: formatSectorName(planetInfo.sector),
                  fraction: planetInfo.currentOwner,
                };
              }),
          ).filter(
            (sector) =>
              !activeSectors.some(
                (activeSector) =>
                  activeSector.name === sector.name &&
                  activeSector.fraction === sector.fraction,
              ),
          ),
        ),
      );
  }, [activeSectors]);

  useEffect(() => {
    getCapturedSectors();

    const galaxySectorsInterval = setInterval(
      () => getCapturedSectors(),
      60000,
    );

    return () => clearInterval(galaxySectorsInterval);
  }, []);
  return (
    <>
      <SectionTitle text={"КАРТА ГАЛАКТИКИ"} />

      <div className="galaxyMap_Wrapper">
        <TransformWrapper
          initialScale={1}
          initialPositionX={0}
          initialPositionY={0}
          minPositionX={100}
          centerOnInit={true}
          centerZoomedOut={true}
        >
          <GalaxyMapControls />

          <TransformComponent wrapperClass="transformWrapper">
            <div className="relative flex justify-center items-center w-[718px] h-[581px] mlarge:h-full">
              <img
                src="/static/GalaxyMap/NebulaImage.png"
                className="absolute w-[80%] mlarge:w-[60%] h-[80%] mlarge:h-[60%] opacity-50 z-0"
              />

              <img
                src="/static/GalaxyMap/GalaxyEllipsisImage.svg"
                alt=""
                className="absolute w-full h-full"
              />

              {isSupplyLinesShowed && (
                <img
                  src="/static/GalaxyMap/SupplyLinesImage.svg"
                  alt=""
                  className="absolute w-full h-full z-[10]"
                />
              )}

              {Object.values(planetsStore.planets)
                .slice(2)
                .map((planet, index) => (
                  <img
                    src={`${planet.image}`}
                    alt=""
                    key={index + 1}
                    className={`absolute w-full h-full z-[11] ${activePlanets.includes(planet.name) ? "" : `${isActivePlanetsShowed ? "brightness-50" : "hidden"}`}`}
                  />
                ))}

              <img
                src={`/static/GalaxyMap/SuperEarthPlanetImage.svg`}
                alt=""
                className="absolute w-full h-full z-[11]"
              />

              {isCapturedSectorsShowed && (
                <>
                  {getUniqueCapturedSectors(activeSectors).map(
                    (sector, index) => (
                      <img
                        src={`${getSectorImage(sector, true)}`}
                        alt=""
                        key={index + 1}
                        className="absolute w-full h-full"
                      />
                    ),
                  )}

                  {inactiveSectors.map((sector, index) => (
                    <img
                      src={`${getSectorImage(sector, false)}`}
                      alt=""
                      key={index + 1}
                      className="absolute w-full h-full"
                    />
                  ))}

                  <img
                    src="/static/GalaxyMap/AutomatonsTextImage.svg"
                    className="absolute w-full h-full"
                  />

                  <img
                    src="/static/GalaxyMap/TerminidsTextImage.svg"
                    className="absolute w-full h-full"
                  />
                </>
              )}
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>

      <div className="flex mlarge:block justify-around items-center mlarge:py-[15px] mmedium:py-[10px] mlarge:px-[20px] mmedium:px-[15px] w-full h-[50px] mlarge:h-auto bg-[#07212f] border-2 border-t-0 border-[#2cc388] rounded-b-[10px]">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            onChange={() => changeIsSupplyLinesShowedStatus((prev) => !prev)}
            checked={isSupplyLinesShowed}
            className="hidden"
          />

          <span className="relative block w-[17.5px] mmedium:w-[15px] h-[17.5px] mmedium:h-[15px]">
            <img
              src={`${isSupplyLinesShowed ? "/static/GalaxyMap/LayersControlCheckboxCheckedIcon.svg" : "/static/GalaxyMap/LayersControlCheckboxIcon.svg"}`}
              alt=""
              className="w-full h-full"
            />
          </span>

          <p className="pl-[15px] mmedium:pl-[10px] text-[#2cc388] text-[1rem] mmedium:text-[0.875rem] msmall:text-[0.75rem] font-['Exo2'] font-medium cursor-pointer">
            Показать линии снабжения
          </p>
        </label>

        <label className="flex items-center cursor-pointer mlarge:mt-[10px]">
          <input
            type="checkbox"
            onChange={() =>
              changeIsCapturedSectorsShowedStatus((prev) => !prev)
            }
            checked={isCapturedSectorsShowed}
            className="hidden"
          />

          <span className="relative block w-[17.5px] mmedium:w-[15px] h-[17.5px] mmedium:h-[15px]">
            <img
              src={`${isCapturedSectorsShowed ? "/static/GalaxyMap/LayersControlCheckboxCheckedIcon.svg" : "/static/GalaxyMap/LayersControlCheckboxIcon.svg"}`}
              alt=""
              className="w-full h-full"
            />
          </span>

          <p className="pl-[15px] mmedium:pl-[10px] text-[#2cc388] text-[1rem] mmedium:text-[0.875rem] msmall:text-[0.75rem] font-['Exo2'] font-medium cursor-pointer">
            Показать захваченные сектора
          </p>
        </label>

        <label className="flex items-center cursor-pointer mlarge:mt-[10px]">
          <input
            type="checkbox"
            onChange={() => changeIsActivePlanetsShowedStatus((prev) => !prev)}
            checked={isActivePlanetsShowed}
            className="hidden"
          />

          <span className="relative block w-[17.5px] mmedium:w-[15px] h-[17.5px] mmedium:h-[15px]">
            <img
              src={`${isActivePlanetsShowed ? "/static/GalaxyMap/LayersControlCheckboxCheckedIcon.svg" : "/static/GalaxyMap/LayersControlCheckboxIcon.svg"}`}
              alt=""
              className="w-full h-full"
            />
          </span>

          <p className="pl-[15px] mmedium:pl-[10px] text-[#2cc388] text-[1rem] mmedium:text-[0.875rem] msmall:text-[0.75rem] font-['Exo2'] font-medium">
            Показать неактивные планеты
          </p>
        </label>
      </div>
    </>
  );
};

export default GalaxyMap;
