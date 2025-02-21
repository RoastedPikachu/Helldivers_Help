"use client";
import React, { useRef } from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import "./emote.css";

interface EmoteProps {
  id: number;
  videoPreviewPath: string;
  videoPath: string;
  price: number;
}

const Emote: React.FC<EmoteProps> = ({
  id,
  videoPreviewPath,
  videoPath,
  price,
}) => {
  const t = useTranslations("emotes");

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
      <div className="emote-contentContainer">
        <video
          poster={`${videoPreviewPath}`}
          src={`${videoPath}`}
          preload="auto"
          playsInline
          loop
          muted
          // @ts-ignore
          ref={videoRef}
          className="emote-contentContainer-video"
        ></video>

        {price && (
          <div className="emote-contentContainer-priceBlock">
            <p className="emote-contentContainer-priceBlock-text">{price}</p>

            <img
              src="/static/Resources/MedalIcon.svg"
              alt=""
              className="emote-contentContainer-priceBlock-icon"
            />
          </div>
        )}
      </div>

      <p className="emote-title">{getIntlArray(t("names"))[id - 1]}</p>
    </div>
  );
};

export default Emote;
