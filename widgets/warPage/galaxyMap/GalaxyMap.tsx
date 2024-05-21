"use client";
import React, { useState, useEffect, useRef } from "react";

import maplibregl from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";

import "./GalaxyMap.css";

const GalaxyMap = () => {
  const mapContainer = useRef(null);

  const [zoom, setZoom] = useState(14);
  const [lattitude, setLattitude] = useState(80);
  const [longtitude, setLongtitude] = useState(80);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2`,
      center: [longtitude, lattitude],
      zoom: zoom,
      background: "",
    });
  }, []);

  return <div ref={mapContainer} className="absolute w-full h-full"></div>;
};

export default GalaxyMap;
