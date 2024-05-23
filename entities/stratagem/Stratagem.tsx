"use client";
import React, { useState, useRef, useEffect } from "react";

import { Direction } from "@/utils/generalInterfaces";
import { getTargetRotate } from "@/utils/generalFunctions";

import LoadingSpinner from "@/shared/loadingSpinner/LoadingSpinner";

import "./Stratagem.css";

interface StratagemProps {
  iconPath: string;
  videoPath?: string | undefined;
  videoPreviewPath?: string | undefined;
  name: string;
  description: string;
  price?: number | undefined;
  obtainingLevel?: number | undefined;
  callTime?: number | undefined;
  useCount?: number | undefined;
  reloadTime?: number | undefined;
  directions: Direction[];
}

const Stratagem: React.FC<StratagemProps> = ({
  iconPath,
  videoPath,
  videoPreviewPath,
  name,
  description,
  price,
  obtainingLevel,
  callTime,
  useCount,
  reloadTime,
  directions,
}) => {
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
        className={`rootStratagemBlock_Top ${isAdditionalInfoOpened ? "" : "z-30"}`}
      >
        <div className="rootStratagemBlock_Top_Left">
          <img
            src={`${iconPath}`}
            alt=""
            className="rootStratagemBlock_Top_Left_ImageWrapper_Image"
          />

          <h4 className="rootStratagemBlock_Top_Left_Title">{name}</h4>
        </div>

        <button className="rootStratagemBlock_Top_Button">
          <img
            src="/static/GeneralIcons/ArrowDownIcon.svg"
            alt=""
            className={`rootStratagemBlock_Top_Button_Image ${isAdditionalInfoOpened ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </div>

      <div
        className={`rootStratagemBlock_Bottom ${isAdditionalInfoOpened ? "opacity-1" : videoPath && videoPreviewPath ? "mt-[-315px] opacity-0 z-[-1]" : "mt-[-70px] opacity-0 z-[-1]"}`}
      >
        {videoPath && videoPreviewPath && (
          <div className="rootStratagemBlock_Bottom_Top">
            <div className="rootStratagemBlock_Bottom_Top_Left">
              <div className="rootStratagemBlock_Bottom_Top_Left_VideoWrapper">
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
                  className="rootStratagemBlock_Bottom_Top_Left_VideoWrapper_Video"
                ></video>

                <button
                  onClick={handlePlayButtonClick}
                  className="rootStratagemBlock_Bottom_Top_Left_VideoWrapper_Video_Button"
                >
                  {playButtonClicksCount % 2 === 0 ? (
                    isVideoLoading ? (
                      <LoadingSpinner />
                    ) : (
                      <img
                        src="/static/GeneralIcons/PauseVideoIcon.svg"
                        alt=""
                        className="rootStratagemBlock_Bottom_Top_Left_VideoWrapper_Video_Button_Pause"
                      />
                    )
                  ) : (
                    <img
                      src="/static/GeneralIcons/PlayVideoIcon.svg"
                      alt=""
                      className="rootStratagemBlock_Bottom_Top_Left_VideoWrapper_Video_Button_Play"
                    />
                  )}
                </button>
              </div>

              <div className="rootStratagemBlock_Bottom_Top_Left_ArrowsWrapper">
                <div className="rootStratagemBlock_Bottom_Top_Left_ArrowsWrapper_Block">
                  {directions.map((direction) => (
                    <img
                      key={direction.id}
                      src="/static/GeneralIcons/ArrowIcon.svg"
                      alt=""
                      className={`rootStratagemBlock_Bottom_Top_Left_ArrowsWrapper_Block_Arrow ${getTargetRotate(direction.orientation)}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="rootStratagemBlock_Bottom_Top_Right">
              <p className="rootStratagemBlock_Bottom_Top_Right_Text mt-[-5px]">
                <b className="rootStratagemBlock_Bottom_Top_Right_Text_Bold">
                  Открывается на:{" "}
                </b>
                {obtainingLevel} уровне
              </p>

              <div className="flex items-center">
                <p className="rootStratagemBlock_Bottom_Top_Right_Text">
                  <b className="rootStratagemBlock_Bottom_Top_Right_Text_Bold">
                    Цена:{" "}
                  </b>
                  {price}
                </p>

                <img
                  src="/static/Resources/RequisitesIcon.svg"
                  alt=""
                  className="mt-[10px] mlarge:mt-[5px] mmedium:mt-[7.5px] ml-[5px] w-[27.5px] mlarge:w-[25px] mmedium:w-[22.5px] msmall:w-[20px] h-[27.5px] mlarge:h-[25px] mmedium:h-[22.5px] msmall:h-[20px]"
                />
              </div>

              <p className="rootStratagemBlock_Bottom_Top_Right_Text">
                <b className="rootStratagemBlock_Bottom_Top_Right_Text_Bold">
                  Время вызова:{" "}
                </b>
                {callTime} сек.
              </p>

              <p className="rootStratagemBlock_Bottom_Top_Right_Text">
                <b className="rootStratagemBlock_Bottom_Top_Right_Text_Bold">
                  Применения:{" "}
                </b>
                {useCount === 0 ? "Неограниченно" : useCount}
              </p>

              <p className="rootStratagemBlock_Bottom_Top_Right_Text">
                <b className="rootStratagemBlock_Bottom_Top_Right_Text_Bold">
                  Время перезарядки:{" "}
                </b>
                {reloadTime} сек.
              </p>
            </div>
          </div>
        )}

        <p className="rootStratagemBlock_Bottom_Description">{description}</p>
      </div>
    </div>
  );
};

export default Stratagem;
