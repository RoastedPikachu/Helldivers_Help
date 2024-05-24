"use client";
import React from "react";

import {
  ImageOverlay,
  LayersControl,
  MapContainer,
  TileLayer,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./GalaxyMap.css";

const GalaxyMap = () => {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={10}
      minZoom={10}
      maxBounds={[
        [2, 12],
        [12, -12],
      ]}
      scrollWheelZoom={true}
      className="w-full h-full"
    >
      <TileLayer
        attribution="stars"
        url={`/static/GalaxyMapBackgroundImage.jpg`}
        tileSize={3000}
      />
      <ImageOverlay
        attribution="ellipsis"
        url={`/static/GalaxyEllipsisImage.png`}
        bounds={[
          [2.8, -0.475],
          [2.025, 0.475],
        ]}
      />
      <ImageOverlay
        attribution="superEarth"
        url={`/static/SuperEarthMapImage.png`}
        bounds={[
          [2.5025, -0.022],
          [2.4575, 0.022],
        ]}
      />

      <LayersControl position="bottomleft">
        <LayersControl.Overlay name="Marker with popup">
          <div></div>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
};

export default GalaxyMap;
