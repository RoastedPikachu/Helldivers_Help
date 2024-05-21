"use client";
import React, { useState, useEffect } from "react";

import maplibregl from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";

import "./GalaxyMap.css";

const GalaxyMap = () => {
  const [zoom, setZoom] = useState(14);
  const [lattitude, setLattitude] = useState(0);
  const [longtitude, setLongtitude] = useState(0);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: "GalaxyMap",
      style: `https://api.maptiler.com/maps/streets-v2`,
      center: [longtitude, lattitude],
      zoom: zoom,
    });
  }, []);

  return (
    <div
      id="GalaxyMap"
      className="absolute w-full h-full bg-[url('/static/GalaxyMapBackgroundImage.jpg')]"
    ></div>
  );
};

export default GalaxyMap;
