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

interface CapturedSector {
  name: string;
  fraction: string;
}

const GalaxyMap = () => {
  const [capturedSectors, setCapturedSectors] = useState(
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

  const getUniqueCapturedSectors = () => {
    const uniqueSectors = {} as { [key: string]: CapturedSector };

    for (const sector of capturedSectors) {
      const sectorName = sector.name;

      if (!uniqueSectors.hasOwnProperty(sectorName)) {
        uniqueSectors[sectorName] = sector;
      }
    }

    return Object.values(uniqueSectors);
  };

  const getCapturedSectors = () => {
    axios
      .get("https://api.helldivers2.dev/api/v1/planets", {
        headers: {
          "Accept-Language": "ru-RU",
          "X-Super-Client": "Helldivers Help",
          "X-Super-Contact": "gh/RoastedPikachu",
        },
      })
      .then((response) => {
        setCapturedSectors(
          response.data
            .filter((planetInfo: any) => planetInfo.currentOwner !== "Humans")
            .map((planetInfo: any) => {
              return {
                name: formatSectorName(planetInfo.sector),
                fraction: planetInfo.currentOwner,
              };
            }),
        );
      });
  };

  const getSectorImage = (sector: CapturedSector) => {
    return sector.fraction === "Terminids"
      ? galaxySectors[sector.name]?.terminidsImage
      : galaxySectors[sector.name]?.automatonsImage;
  };

  useEffect(() => {
    getCapturedSectors();

    const galaxySectorsInterval = setInterval(
      () => getCapturedSectors(),
      10000,
    );

    return () => clearInterval(galaxySectorsInterval);
  }, []);
  return (
    <MapContainer
      center={[-35.05, 35]}
      zoom={4.2}
      minZoom={4.2}
      maxZoom={6.5}
      zoomSnap={0.1}
      scrollWheelZoom={true}
      className="w-full h-full"
    >
      <TileLayer
        attribution="stars"
        url={`/static/GalaxyMap/StarfieldMapBackgroundImage.webp`}
        tileSize={2024}
      />
      <ImageOverlay
        attribution="nebula"
        url={`/static/GalaxyMap/NebulaImage.png`}
        bounds={[
          [-16.875, 15.78],
          [-45.075, 54.62],
        ]}
        opacity={0.5}
      />
      <ImageOverlay
        attribution="superEarthDecoration"
        url={`/static/GalaxyMap/SuperEarthDecorationImage.png`}
        bounds={[
          [10.9, -2.5],
          [7.4, 2.5],
        ]}
        opacity={0.5}
      />
      <ImageOverlay
        attribution="ellipsis"
        url={`/static/GalaxyMap/GalaxyEllipsisImage.svg`}
        bounds={[
          [-14.875, 7.78],
          [-51.075, 62.62],
        ]}
      />
      <ImageOverlay
        attribution="automatonsText"
        url={`/static/GalaxyMap/AutomatonsTextImage.svg`}
        bounds={[
          [-14.875, 7.78],
          [-51.075, 62.62],
        ]}
      />
      <ImageOverlay
        attribution="terminidsText"
        url={`/static/GalaxyMap/TerminidsTextImage.svg`}
        bounds={[
          [-14.875, 7.78],
          [-51.075, 62.62],
        ]}
      />
      <ImageOverlay
        attribution="superEarth"
        url={`/static/GalaxyMap/SuperEarthMapImage.svg`}
        bounds={[
          [10.1, -1.15],
          [8.35, 1.35],
        ]}
      />

      <LayersControl position="topright" collapsed={false}>
        <LayersControl.Overlay name="" checked={true}>
          <LayerGroup>
            {getUniqueCapturedSectors().map((sector, index) => (
              <ImageOverlay
                key={index + 1}
                attribution={sector.name}
                url={`${getSectorImage(sector)}`}
                bounds={[
                  [-14.875, 7.78],
                  [-51.075, 62.62],
                ]}
              />
            ))}
          </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name="" checked={true}>
          <ImageOverlay
            attribution="supplyLines"
            url={`/static/GalaxyMap/SupplyLinesImage.svg`}
            bounds={[
              [-14.875, 7.78],
              [-51.075, 62.62],
            ]}
          />
        </LayersControl.Overlay>
      </LayersControl>

      <ImageOverlay
        attribution="planets"
        url={`/static/GalaxyMap/PlanetsImage.svg`}
        bounds={[
          [-14.875, 7.78],
          [-51.075, 62.62],
        ]}
        zIndex={10}
      />
    </MapContainer>
  );
};

export default GalaxyMap;
