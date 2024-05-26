"use client";
import React from "react";

import {
  ImageOverlay,
  LayersControl,
  MapContainer,
  LayerGroup,
  TileLayer,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./GalaxyMap.css";

const GalaxyMap = () => {
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
        url={`/static/GalaxyMap/GalaxyMapBackgroundImage.png`}
        tileSize={1300}
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
        attribution="ellipsis"
        url={`/static/GalaxyMap/GalaxyEllipsisImage.svg`}
        bounds={[
          [19, -15.5],
          [-5, 15.5],
        ]}
      />
      <ImageOverlay
        attribution="superEarth"
        url={`/static/GalaxyMap/SuperEarthMapImage.svg`}
        bounds={[
          [10, -0.75],
          [8.5, 0.75],
        ]}
      />

      <LayersControl position="bottomleft">
        <LayersControl.Overlay name="Marker with popup" checked={true}>
          <ImageOverlay
            attribution="supplyLines"
            url={`/static/GalaxyMap/SupplyLinesImage.svg`}
            bounds={[
              [18.5, -14.5],
              [-4.5, 14.5],
            ]}
          />
        </LayersControl.Overlay>

          <LayersControl.Overlay name="Marker with popup" checked={true}>
              <LayerGroup></LayerGroup>
          </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
};

export default GalaxyMap;
