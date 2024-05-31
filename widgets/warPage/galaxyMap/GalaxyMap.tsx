"use client";
import React, { useEffect, useState } from "react";

import {
  MapContainer,
  TileLayer,
  ImageOverlay,
  LayersControl,
  LayerGroup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./GalaxyMap.css";
import axios from "axios";
import { galaxySectors } from "@/data/galaxySectors";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import GalaxyMapControls from "@/widgets/warPage/galaxyMap/GalaxyMapControls";

interface CapturedSector {
  name: string;
  fraction: string;
}

const GalaxyMap = () => {
  const [activeSectors, setActiveSectors] = useState([] as CapturedSector[]);
  const [inactiveSectors, setInactiveSectors] = useState(
    [] as CapturedSector[],
  );

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
      10000,
    );

    return () => clearInterval(galaxySectorsInterval);
  }, []);
  return (
    <TransformWrapper
      initialScale={1}
      initialPositionX={0}
      initialPositionY={0}
    >
      {/*<GalaxyMapControls />*/}

      <TransformComponent wrapperClass="transformWrapper">
        <div className="relative w-[718px] h-[581px]">
          <img
            src="/static/GalaxyMap/GalaxyEllipsisImage.svg"
            alt=""
            className="absolute w-full h-full"
          />

          <img
            src="/static/GalaxyMap/SupplyLinesImage.svg"
            alt=""
            className="absolute w-full h-full"
          />

          <img
            src="/static/GalaxyMap/PlanetsImage.svg"
            alt=""
            className="absolute w-full h-full"
          />

          <img
            src={`/static/GalaxyMap/SuperEarthPlanetImage.svg`}
            alt=""
            className="absolute w-full h-full"
          />

          <img
            src="/static/GalaxyMap/PlanetsTextImage.svg"
            alt=""
            className="absolute w-full h-full"
          />

          {getUniqueCapturedSectors(activeSectors).map((sector, index) => (
            <img
              src={`${getSectorImage(sector, true)}`}
              alt=""
              key={index + 1}
              className="absolute w-full h-full"
            />
          ))}

          {inactiveSectors.map((sector, index) => (
            <img
              src={`${getSectorImage(sector, false)}`}
              alt=""
              key={index + 1}
              className="absolute w-full h-full"
            />
          ))}
        </div>
      </TransformComponent>
    </TransformWrapper>
    // <MapContainer
    //   center={[-35.05, 35]}
    //   zoom={4.2}
    //   minZoom={4.2}
    //   maxZoom={6.5}
    //   zoomSnap={0.1}
    //   maxBounds={[
    //     [-14.875, 7.78],
    //     [-51.075, 62.62],
    //   ]}
    //   scrollWheelZoom={true}
    //   className="mlarge:mt-[25px] w-full h-full mlarge:border-2 mlarge:border-[#2cc388] mlarge:rounded-[10px]"
    // >
    //   <TileLayer
    //     attribution="stars"
    //     url={`/static/GalaxyMap/StarfieldMapBackgroundImage.webp`}
    //     tileSize={2024}
    //   />
    //   <ImageOverlay
    //     attribution="nebula"
    //     url={`/static/GalaxyMap/NebulaImage.png`}
    //     bounds={[
    //       [-16.875, 15.78],
    //       [-45.075, 54.62],
    //     ]}
    //     opacity={0.5}
    //   />
    //   <ImageOverlay
    //     attribution="superEarthDecoration"
    //     url={`/static/GalaxyMap/SuperEarthDecorationImage.png`}
    //     bounds={[
    //       [10.9, -2.5],
    //       [7.4, 2.5],
    //     ]}
    //     opacity={0.5}
    //   />
    //   <ImageOverlay
    //     attribution="ellipsis"
    //     url={`/static/GalaxyMap/GalaxyEllipsisImage.svg`}
    //     bounds={[
    //       [-14.875, 7.78],
    //       [-51.075, 62.62],
    //     ]}
    //   />
    //   <ImageOverlay
    //     attribution="automatonsText"
    //     url={`/static/GalaxyMap/AutomatonsTextImage.svg`}
    //     bounds={[
    //       [-14.875, 7.78],
    //       [-51.075, 62.62],
    //     ]}
    //   />
    //   <ImageOverlay
    //     attribution="terminidsText"
    //     url={`/static/GalaxyMap/TerminidsTextImage.svg`}
    //     bounds={[
    //       [-14.875, 7.78],
    //       [-51.075, 62.62],
    //     ]}
    //   />
    //
    //   <LayersControl position="topright" collapsed={false}>
    //     <LayersControl.Overlay name="" checked={true}>
    //       <LayerGroup>
    //         {getUniqueCapturedSectors(activeSectors).map((sector, index) => (
    //           <ImageOverlay
    //             key={index + 1}
    //             attribution={sector.name}
    //             url={`${getSectorImage(sector, true)}`}
    //             bounds={[
    //               [-14.875, 7.78],
    //               [-51.075, 62.62],
    //             ]}
    //           />
    //         ))}
    //
    //         {inactiveSectors.map((sector, index) => (
    //           <ImageOverlay
    //             key={index + 1}
    //             attribution={sector.name}
    //             url={`${getSectorImage(sector, false)}`}
    //             bounds={[
    //               [-14.875, 7.78],
    //               [-51.075, 62.62],
    //             ]}
    //           />
    //         ))}
    //       </LayerGroup>
    //     </LayersControl.Overlay>
    //
    //     <LayersControl.Overlay name="" checked={true}>
    //       <ImageOverlay
    //         attribution="supplyLines"
    //         url={`/static/GalaxyMap/SupplyLinesImage.svg`}
    //         bounds={[
    //           [-14.875, 7.78],
    //           [-51.075, 62.62],
    //         ]}
    //       />
    //     </LayersControl.Overlay>
    //   </LayersControl>
    //
    //   <ImageOverlay
    //     attribution="planets"
    //     url={`/static/GalaxyMap/PlanetsImage.svg`}
    //     bounds={[
    //       [-14.875, 7.78],
    //       [-51.075, 62.62],
    //     ]}
    //     zIndex={10}
    //   />
    //   <ImageOverlay
    //     attribution="superEarth"
    //     url={`/static/GalaxyMap/SuperEarthPlanetImage.svg`}
    //     bounds={[
    //       [-14.875, 7.78],
    //       [-51.075, 62.62],
    //     ]}
    //     zIndex={10}
    //   />
    //   <ImageOverlay
    //     attribution="planetsText"
    //     url={`/static/GalaxyMap/PlanetsTextImage.svg`}
    //     bounds={[
    //       [-14.875, 7.78],
    //       [-51.075, 62.62],
    //     ]}
    //     zIndex={11}
    //   />
    // </MapContainer>
  );
};

export default GalaxyMap;
