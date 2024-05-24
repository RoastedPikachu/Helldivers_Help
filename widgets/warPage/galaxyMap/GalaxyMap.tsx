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
import Image from "next/image";

const GalaxyMap = () => {
  return (
    <MapContainer
      center={[10, 10]}
      zoom={15}
      minZoom={10}
      maxBounds={[
        [2.5, 12.5],
        [2.5, 12.5],
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
          [10, 10],
          [10, 10],
        ]}
      />
      <ImageOverlay
        attribution="superEarth"
        url={`/static/SuperEarthMapImage.png`}
        bounds={[
          [10, 10],
          [10, 10],
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
