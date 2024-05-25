"use client";
import React, { useEffect } from "react";

import {
  ImageOverlay,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./GalaxyMap.css";

const GalaxyMap = () => {
  useEffect(() => {}, []);
  return (
    <MapContainer
      center={[0, 0]}
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
        url={`/static/GalaxyMapBackgroundImage.png`}
        tileSize={1300}
      />
      <ImageOverlay
        attribution="nebula"
        url={`/static/NebulaImage.png`}
        bounds={[
          [17, -12.5],
          [-3, 12.5],
        ]}
        opacity={0.5}
      />
      <ImageOverlay
        attribution="ellipsis"
        url={`/static/GalaxyEllipsisImage.png`}
        bounds={[
          [19, -15.5],
          [-5, 15.5],
        ]}
      />
      <ImageOverlay
        attribution="superEarth"
        url={`/static/SuperEarthMapImage.svg`}
        bounds={[
          [10, -0.75],
          [8.5, 0.75],
        ]}
      />

      <LayersControl position="bottomleft">
        <LayersControl.Overlay name="Marker with popup">
          <ImageOverlay
            attribution="supplyLines"
            url={`/static/SupplyLinesImage.svg`}
            bounds={[
              [18.5, -14.5],
              [-4.5, 14.5],
            ]}
          />
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
};

export default GalaxyMap;
