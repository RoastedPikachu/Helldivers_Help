"use client";
import React, { useState, useRef, useEffect } from "react";

import { Direction } from "@/utils/generalInterfaces";
import { getIntlArray, getTargetRotate } from "@/utils/generalFunctions";

import LoadingSpinner from "@/shared/loadingSpinner/LoadingSpinner";

import "./stratagem.css";
import { useTranslations } from "next-intl";

interface StratagemProps {
  id: number;
  iconPath: string;
  videoPath?: string | undefined;
  videoPreviewPath?: string | undefined;
  price?: number | undefined;
  obtainingLevel?: number | undefined;
  callTime?: number | undefined;
  useCount?: number | undefined;
  reloadTime?: number | undefined;
  directions: Direction[];
}

const Stratagem: React.FC<StratagemProps> = ({
  id,
  iconPath,
  videoPath,
  videoPreviewPath,
  price,
  obtainingLevel,
  callTime,
  useCount,
  reloadTime,
  directions,
}) => {
  const t = useTranslations("stratagems");
  const t1 = useTranslations("StratagemsPage");

  const [isAdditionalInfoOpened, changeIsAdditionalInfoOpened] =
    useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(false);

  const [playButtonClicksCount, setPlayButtonClicksCount] = useState(1);

  const videoRef = useRef<HTMLVideoElement>();

  const handlePlayButtonClick = () => {
    if (playButtonClicksCount % 2 === 0) {
      pauseVideo();
    } else {
      playVideo();
    }

    setPlayButtonClicksCount((prev) => prev + 1);
  };

  const playVideo = () => {
    videoRef.current && videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current && videoRef.current.pause();
  };

  useEffect(() => {
    if (!isAdditionalInfoOpened) {
      setPlayButtonClicksCount(3);
      pauseVideo();
    }
  }, [isAdditionalInfoOpened]);
  return (
    <div
      className={`rootStratagemBlock ${isAdditionalInfoOpened ? "" : "max-h-[85px] mlarge:max-h-[80px] mmedium:max-h-[70px]"}`}
    >
      <div
        onClick={() => changeIsAdditionalInfoOpened((prev) => !prev)}
        className={`rootStratagemBlock-top ${isAdditionalInfoOpened ? "" : "z-30"}`}
      >
        <div className="rootStratagemBlock-top-left">
          <img
            src={`${iconPath}`}
            alt=""
            className="rootStratagemBlock-top-left-imageWrapper-image"
          />

          <h4 className="rootStratagemBlock-top-left-title">
            {getIntlArray(t("names"))[id - 1]}
          </h4>
        </div>

        <button className="rootStratagemBlock-top-button">
          <img
            src="/static/GeneralIcons/ArrowDownIcon.svg"
            alt=""
            className={`rootStratagemBlock-top-button-image ${isAdditionalInfoOpened ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </div>

      <div
        className={`rootStratagemBlock-bottom ${isAdditionalInfoOpened ? "opacity-1" : videoPath && videoPreviewPath ? "mt-[-315px] opacity-0 z-[-1]" : "mt-[-70px] opacity-0 z-[-1]"}`}
      >
        {videoPath && videoPreviewPath && (
          <div className="rootStratagemBlock-bottom-top">
            <div className="rootStratagemBlock-bottom-top-left">
              <div className="rootStratagemBlock-bottom-top-left-videoWrapper">
                <video
                  poster={`${videoPreviewPath}`}
                  src={`${videoPath}`}
                  preload="none"
                  playsInline
                  loop
                  onLoadStart={() => setIsVideoLoading(true)}
                  onCanPlay={() => setIsVideoLoading(false)}
                  // @ts-ignore
                  ref={videoRef}
                  className="rootStratagemBlock-bottom-top-left-videoWrapper-video"
                ></video>

                <button
                  onClick={handlePlayButtonClick}
                  className="rootStratagemBlock-bottom-top-left-videoWrapper-video-button"
                >
                  {playButtonClicksCount % 2 === 0 ? (
                    isVideoLoading ? (
                      <LoadingSpinner />
                    ) : (
                      <img
                        src="/static/GeneralIcons/PauseVideoIcon.svg"
                        alt=""
                        className="rootStratagemBlock-bottom-top-left-videoWrapper-video-button-pause"
                      />
                    )
                  ) : (
                    <img
                      src="/static/GeneralIcons/PlayVideoIcon.svg"
                      alt=""
                      className="rootStratagemBlock-bottom-top-left-videoWrapper-video-button-play"
                    />
                  )}
                </button>
              </div>

              <div className="rootStratagemBlock-bottom-top-left-arrowsWrapper">
                <div className="rootStratagemBlock-bottom-top-left-arrowsWrapper-block">
                  {directions.map((direction) => (
                    <img
                      key={direction.id}
                      src="/static/GeneralIcons/ArrowIcon.svg"
                      alt=""
                      className={`rootStratagemBlock-bottom-top-left-arrowsWrapper-block-arrow ${getTargetRotate(direction.orientation)}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="rootStratagemBlock-bottom-top-right">
              <p className="rootStratagemBlock-bottom-top-right-text mt-[-5px]">
                <b className="rootStratagemBlock-bottom-top-right-text-bold">
                  {getIntlArray(t1("blockTitles"))[0]}{" "}
                </b>
                {obtainingLevel} {getIntlArray(t1("blockTitles"))[1]}
              </p>

              <div className="flex items-center">
                <p className="rootStratagemBlock-bottom-top-right-text">
                  <b className="rootStratagemBlock-bottom-top-right-text-bold">
                    {getIntlArray(t1("blockTitles"))[2]}{" "}
                  </b>
                  {price}
                </p>

                <img
                  src="/static/Resources/RequisitesIcon.svg"
                  alt=""
                  className="mt-[10px] mlarge:mt-[5px] mmedium:mt-[7.5px] ml-[5px] w-[27.5px] mlarge:w-[25px] mmedium:w-[22.5px] msmall:w-[20px] h-[27.5px] mlarge:h-[25px] mmedium:h-[22.5px] msmall:h-[20px]"
                />
              </div>

              <p className="rootStratagemBlock-bottom-top-right-text">
                <b className="rootStratagemBlock-bottom-top-right-text-bold">
                  {getIntlArray(t1("blockTitles"))[3]}{" "}
                </b>
                {callTime} {getIntlArray(t1("blockTitles"))[4]}
              </p>

              <p className="rootStratagemBlock-bottom-top-right-text">
                <b className="rootStratagemBlock-bottom-top-right-text-bold">
                  {getIntlArray(t1("blockTitles"))[5]}{" "}
                </b>
                {useCount === 0 ? getIntlArray(t1("blockTitles"))[6] : useCount}
              </p>

              <p className="rootStratagemBlock-bottom-top-right-text">
                <b className="rootStratagemBlock-bottom-top-right-text-bold">
                  {getIntlArray(t1("blockTitles"))[7]}{" "}
                </b>
                {reloadTime} {getIntlArray(t1("blockTitles"))[4]}
              </p>
            </div>
          </div>
        )}

        <p className="rootStratagemBlock-bottom-description">
          {getIntlArray(t("descriptions"))[id - 1]}
        </p>
      </div>
    </div>
  );
};

export default Stratagem;
