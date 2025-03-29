"use client";
import React, { useEffect, useRef, useState } from "react";

import axios from "axios";

import maplibregl from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";
import "./galaxyMap.css";

interface MapComponentProps {
  style?: React.CSSProperties;
}

const TheGalaxyMap: React.FC<MapComponentProps> = ({ style }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  const [activeSectors, setActiveSectors] = useState([]);
  const [inactiveSectors, setInactiveSectors] = useState([] as any[]);

  const formatSectorName = (string: string) => {
    // Удаление пробелов
    string = string.replace(/\s+/g, "");

    // Удаление символа '
    string = string.replace("'", "");

    // Преобразование первой буквы в Lowercase
    string = string.charAt(0).toLowerCase() + string.slice(1);

    return string;
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
        // setActivePlanets(
        //     response.data.map((campaign: any) =>
        //         formatPlanetName(campaign.planet.name),
        //     ),
        // );
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

  const getUniqueCapturedSectors = (sectors: any[]) => {
    const uniqueSectors = {} as { [key: string]: any };

    for (const sector of sectors) {
      const sectorName = sector.name;

      if (!uniqueSectors.hasOwnProperty(sectorName)) {
        uniqueSectors[sectorName] = sector;
      }
    }

    return Object.values(uniqueSectors);
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
                (activeSector: any) =>
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

    if (!mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {},
        layers: [],
      },
      center: [0, 0],
      zoom: 0,
      minZoom: 0, // Добавляем ограничения
      maxZoom: 10, // на масштабирование
      renderWorldCopies: false,
    });

    map.current.addControl(new maplibregl.NavigationControl(), "top-right");

    // @ts-ignore
    map.current.on("load", () => {
      if (!map.current) return;

      map.current.addSource("background", {
        type: "image",
        url: "/static/GalaxyMap/StarfieldMapBackgroundImage.webp",
        coordinates: [
          [-180, 85],
          [180, 85],
          [180, -85],
          [-180, -85],
        ],
      });

      map.current.addLayer({
        id: "background-layer",
        type: "raster",
        source: "background",
        paint: {
          "raster-opacity": 1,
        },
      });

      const pixelOffset = 50;
      const mapHeight = map.current.getContainer().offsetHeight;
      const latPerPixel = 180 / mapHeight; // Преобразование пикселей в градусы

      const nebulaShiftedCoords = [
        [-40, 30],
        [40, 30],
        [40, -30],
        [-40, -30],
      ].map((coord) => [coord[0], coord[1] + pixelOffset * latPerPixel]) as [
        [number, number],
        [number, number],
        [number, number],
        [number, number],
      ];

      map.current.addSource("nebula", {
        type: "image",
        url: "/static/GalaxyMap/NebulaImage.png",
        coordinates: nebulaShiftedCoords,
      });

      map.current.addLayer({
        id: "nebula-layer",
        type: "raster",
        source: "nebula",
        paint: {
          "raster-opacity": 0.1,
        },
      });

      const superEarthDecorationPixelOffset = 60;

      const superEarthDecorationShiftedCoords = [
        [-10, 7.5],
        [10, 7.5],
        [10, -7.5],
        [-10, -7.5],
      ].map((coord) => [
        coord[0],
        coord[1] + superEarthDecorationPixelOffset * latPerPixel,
      ]) as [
        [number, number],
        [number, number],
        [number, number],
        [number, number],
      ];

      map.current.addSource("superEarthDecoration", {
        type: "image",
        url: "/static/GalaxyMap/SuperEarthDecorationImage.png",
        coordinates: superEarthDecorationShiftedCoords,
      });

      map.current.addLayer({
        id: "superEarthDecoration-layer",
        type: "raster",
        source: "superEarthDecoration",
        paint: {
          "raster-opacity": 0.1,
        },
      });

      map.current.addSource("foreground", {
        type: "image",
        url: "/static/GalaxyMap/GalaxyEllipsisImage.png",
        coordinates: [
          [-100, 60],
          [100, 60],
          [100, -60],
          [-100, -60],
        ],
      });

      map.current.addLayer({
        id: "foreground-layer",
        type: "raster",
        source: "foreground",
        paint: {
          "raster-opacity": 0.6,
        },
      });

      map.current.addSource("pretexts", {
        type: "image",
        url: "/static/GalaxyMap/PlanetsTextImage.png",
        coordinates: [
          [-100, 60],
          [100, 60],
          [100, -60],
          [-100, -60],
        ],
      });

      map.current.addLayer({
        id: "pretexts-layer",
        type: "raster",
        source: "pretexts",
        minzoom: 2.75,
        maxzoom: 3.25,
        paint: {
          "raster-opacity": 0.5,
        },
      });

      map.current.addSource("texts", {
        type: "image",
        url: "/static/GalaxyMap/PlanetsTextImage.png",
        coordinates: [
          [-100, 60],
          [100, 60],
          [100, -60],
          [-100, -60],
        ],
      });

      map.current.addLayer({
        id: "texts-layer",
        type: "raster",
        source: "texts",
        minzoom: 3.25,
        paint: {
          "raster-opacity": 1,
        },
      });

      map.current.addSource("preSupplyLines", {
        type: "image",
        url: "/static/GalaxyMap/SupplyLinesImage.png",
        coordinates: [
          [-100, 60],
          [100, 60],
          [100, -60],
          [-100, -60],
        ],
      });

      map.current.addLayer({
        id: "preSupplyLines-layer",
        type: "raster",
        source: "preSupplyLines",
        minzoom: 2.75,
        maxzoom: 3.25,
        paint: {
          "raster-opacity": 0.5,
        },
      });

      map.current.addSource("supplyLines", {
        type: "image",
        url: "/static/GalaxyMap/SupplyLinesImage.png",
        coordinates: [
          [-100, 60],
          [100, 60],
          [100, -60],
          [-100, -60],
        ],
      });

      map.current.addLayer({
        id: "supplyLines-layer",
        type: "raster",
        source: "supplyLines",
        minzoom: 3.25,
        paint: {
          "raster-opacity": 1,
        },
      });

      map.current.addSource("planets", {
        type: "image",
        url: "/static/GalaxyMap/PlanetsImage.png",
        coordinates: [
          [-100, 60],
          [100, 60],
          [100, -60],
          [-100, -60],
        ],
      });

      map.current.addLayer({
        id: "planets-layer",
        type: "raster",
        source: "planets",
        paint: {
          "raster-opacity": 1,
        },
      });

      map.current.addSource("gloom", {
        type: "image",
        url: "/static/GalaxyMap/TerminidsGloomImage.png",
        coordinates: [
          [-100, 60],
          [100, 60],
          [100, -60],
          [-100, -60],
        ],
      });

      map.current.addLayer({
        id: "gloom-layer",
        type: "raster",
        source: "gloom",
        paint: {
          "raster-opacity": 1,
        },
      });

      const superEarthPixelOffset = 63;

      const superEarthShiftedCoords = [
        [-4.85, 4.95],
        [4.85, 4.95],
        [4.85, -4.95],
        [-4.85, -4.95],
      ].map((coord) => [
        coord[0],
        coord[1] + superEarthPixelOffset * latPerPixel,
      ]) as [
        [number, number],
        [number, number],
        [number, number],
        [number, number],
      ];

      map.current.addSource("superEarth", {
        type: "image",
        url: "/static/GalaxyMap/SuperEarthImage.png",
        coordinates: superEarthShiftedCoords,
      });

      map.current.addLayer({
        id: "superEarth-layer",
        type: "raster",
        source: "superEarth",
        paint: {
          "raster-opacity": 1,
        },
      });

      map.current.addSource("my-text", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: { type: "Point", coordinates: [5, 5] },
              properties: { message: "Hello Galaxy!" },
            },
          ],
        },
      });

      map.current.addLayer({
        id: "cool-text-layer",
        type: "symbol",
        source: "my-text",
        layout: {
          "text-field": "{message}",
          "text-font": ["Open Sans Bold"],
          "text-size": 24,
          "text-anchor": "center",
        },
        paint: {
          "text-color": "#FFD700",
          "text-halo-color": "#000",
          "text-halo-width": 2,
        },
      });

      // map.current.addSource("red-square", {
      //   type: "geojson",
      //   data: {
      //     type: "Feature",
      //     geometry: {
      //       type: "Polygon",
      //       coordinates: [
      //         [
      //           [-30 / 2, 30 / 2],
      //           [30 / 2, 30 / 2],
      //           [30 / 2, -30 / 2],
      //           [-30 / 2, -30 / 2],
      //           [-30 / 2, 30 / 2],
      //         ],
      //       ],
      //     },
      //     properties: {},
      //   },
      // });
      //
      // map.current.addLayer({
      //   id: "red-square-layer",
      //   type: "fill",
      //   source: "red-square",
      //   paint: {
      //     "fill-color": "#ff0000",
      //     "fill-opacity": 0.5,
      //   },
      // });

      map.current.fitBounds(
        [
          [-160, -80],
          [160, 80],
        ],
        {
          padding: 20,
          duration: 0,
          maxZoom: 5,
        },
      );
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }

      clearInterval(galaxySectorsInterval);
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{
        position: "absolute",
        marginTop: "-30px",
        width: "100%",
        height: "calc(100% - 320px)",
        borderRadius: "8px",
        ...style,
      }}
    />
  );
};

export default TheGalaxyMap;
