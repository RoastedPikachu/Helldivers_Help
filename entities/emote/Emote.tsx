"use client";
import React, { useRef } from "react";

import ObtainingTypeTag from "@/entities/obtainingTypeTag/ObtainingTypeTag";

import "./Emote.css";

interface EmoteProps {
  name: string;
  videoPreviewPath: string;
  videoPath: string;
  price: number;
  warbondIcon: string;
}

const Emote: React.FC<EmoteProps> = ({
  name,
  videoPreviewPath,
  videoPath,
  price,
  warbondIcon,
}) => {
  const videoRef = useRef<HTMLVideoElement>();

  const playVideo = () => {
    videoRef.current && videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current && videoRef.current.pause();
  };
  return (
    <div
      onMouseOver={() => playVideo()}
      onMouseOut={() => pauseVideo()}
      className="emote"
    >
      <video
        poster={`${videoPreviewPath}`}
        src={`${videoPath}`}
        preload="auto"
        playsInline
        loop
        muted
        // @ts-ignore
        ref={videoRef}
        className="emote_Video"
      ></video>

      <ObtainingTypeTag image={warbondIcon} />

      <div className="emote_PriceBlock">
        <p className="emote_PriceBlock_Text">{price}</p>

        <img
          src="/static/Resources/MedalIcon.svg"
          alt=""
          className="emote_PriceBlock_Icon"
        />
      </div>

      <p className="emote_Title">{name}</p>
    </div>
  );
};

export default Emote;
