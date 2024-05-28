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
    const uniqueSectors = {};

    for (const sector of capturedSectors) {
      const sectorName = sector.name;

      if (!uniqueSectors.hasOwnProperty(sectorName)) {
        uniqueSectors[sectorName] = sector as CapturedSector;
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
    const galaxySectorsInterval = setInterval(() => getCapturedSectors(), 5000);

    return () => clearInterval(galaxySectorsInterval);
  }, []);
  return (
    <MapContainer
      center={[-10, 0]}
      zoom={5}
      minZoom={5}
      maxZoom={7.5}
      zoomSnap={0.1}
      maxBounds={[
        [2, 12],
        [12, -12],
      ]}
      scrollWheelZoom={true}
      className="w-full h-full"
    >
      <TileLayer
        attribution="stars"
        url={`/static/GalaxyMap/GalaxyMapBackgroundImage.png`}
        tileSize={1800}
      />
      <ImageOverlay
        attribution="nebula"
        url={`/static/GalaxyMap/NebulaImage.png`}
        bounds={[
          [17, -12.5],
          [-3, 12.5],
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
          [19, -15.5],
          [-5, 15.5],
        ]}
      />
      <ImageOverlay
        attribution="automatonsText"
        url={`/static/GalaxyMap/AutomatonsTextImage.svg`}
        bounds={[
          [19, -15.5],
          [-5, 15.5],
        ]}
      />
      <ImageOverlay
        attribution="terminidsText"
        url={`/static/GalaxyMap/TerminidsTextImage.svg`}
        bounds={[
          [19, -15.5],
          [-5, 15.5],
        ]}
      />
      <ImageOverlay
        attribution="superEarth"
        url={`/static/GalaxyMap/SuperEarthMapImage.svg`}
        bounds={[
          [10, -1.25],
          [8.25, 1.25],
        ]}
      />

      <LayersControl position="topright" collapsed={false}>
        <LayersControl.Overlay name="" checked={true}>
          <ImageOverlay
            attribution="supplyLines"
            url={`/static/GalaxyMap/SupplyLinesImage.svg`}
            bounds={[
              [18.5, -14.5],
              [-4.5, 14.5],
            ]}
          />
        </LayersControl.Overlay>

        <LayersControl.Overlay name="" checked={true}>
          <LayerGroup>
            {getUniqueCapturedSectors().map((sector, index) => (
              <ImageOverlay
                key={index + 1}
                attribution={sector.name}
                url={`${getSectorImage(sector)}`}
                bounds={[
                  [19, -15.5],
                  [-5, 15.5],
                ]}
              />
            ))}
          </LayerGroup>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
};

export default GalaxyMap;
