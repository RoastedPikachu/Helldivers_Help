"use client";
import React from "react";

import { planetsStore } from "@/store/PlanetsStore";

import { observer, Observer } from "mobx-react-lite";

import Typewriter from "@/shared/Typewriter";

import "./PlanetAdditionalInfoModalWindow.css";

interface PlanetAdditionalInfoModalWindowProps {
  imagePath: string | undefined;
  name: string;
  weatherConditions: any;
  biomeDescription: string | undefined;
}

const PlanetAdditionalInfoModalWindow: React.FC<PlanetAdditionalInfoModalWindowProps> =
  observer(({ imagePath, name, weatherConditions, biomeDescription }) => {
    return (
      <Observer>
        {() => (
          <div className="sliderModal">
            <button
              onClick={() => planetsStore.clearCurrentPlanetInfo()}
              className="sliderModal_CloseButton mlarge:bg-[#00000080] mlarge:rounded-[5px]"
            >
              <img
                src="/static/GeneralIcons/CloseIcon.svg"
                alt=""
                className="sliderModal_CloseButton_Image"
              />
            </button>

            <div className="currentPlanet_Modal_Top">
              <div className="currentPlanet_Modal_Top_ImageWrapper">
                <img
                  src={imagePath || "/static/Biomes/BlankImage.png"}
                  alt=""
                  className="currentPlanet_Modal_Top_ImageWrapper_Image"
                />
              </div>

              <div className="currentPlanet_Modal_Top_TextBlock">
                <h2 className="currentPlanet_Modal_Top_TextBlock_Title">
                  {name}
                </h2>

                {weatherConditions.map((weatherCondition: any) => (
                  <div
                    key={weatherCondition.id}
                    className="currentPlanet_Modal_Top_TextBlock_WeatherConditionsBlock"
                  >
                    <img
                      src={`${weatherCondition.iconPath}`}
                      alt=""
                      className="currentPlanet_Modal_Top_TextBlock_WeatherConditionsBlock_Image"
                    />

                    <h2 className="currentPlanet_Modal_Top_TextBlock_WeatherConditionsBlock_Text">
                      {weatherCondition.name}
                    </h2>
                  </div>
                ))}
              </div>
            </div>

            <div className="currentPlanet_Modal_Bottom">
              <h3 className="currentPlanet_Modal_Bottom_Title">ОПИСАНИЕ:</h3>

              <p className="currentPlanet_Modal_Bottom_Text">
                <Typewriter
                  text={
                    biomeDescription ||
                    "Разведывательные дроны Супер-Земли еще не успели изучить данную планету"
                  }
                  delay={20}
                />
              </p>
            </div>
          </div>
        )}
      </Observer>
    );
  });

export default PlanetAdditionalInfoModalWindow;
