"use client";
import React from "react";

import MediaQuery from "react-responsive";

import { useTranslations } from "next-intl";

import MobileFooterContent from "@/widgets/mobileFooterContent/MobileFooterContent";

import "./TheFooter.css";

const TheFooter = () => {
  const t = useTranslations("Footer");

  return (
    <MediaQuery maxWidth={480}>
      {(matches) =>
        matches ? (
          <MobileFooterContent />
        ) : (
          <footer>
            <div className="footerTop">
              <div className="footerTop_TextBlock">
                <h3 className="footerTop_TextBlock_Title">
                  {t("firstLinkTitle")}
                </h3>

                <a
                  href="https://t.me/helldivers_help_support"
                  target="_blank"
                  className="footerTop_TextBlock_RusLink"
                >
                  {t("firstLink")}
                </a>

                <a
                  href="https://discord.gg/SBntR38EKW"
                  target="_blank"
                  className="footerTop_TextBlock_RusLink mt-[10px]"
                >
                  {t("secondLink")}
                </a>

                <a
                  href="https://github.com/RoastedPikachu/Helldivers_Help"
                  target="_blank"
                  className="footerTop_TextBlock_Link_EngLink mt-[10px]"
                >
                  Github
                </a>
              </div>

              <img
                src="/static/GeneralLogos/HelldiversLogo.png"
                alt="Логотип игры Helldivers 2"
                className="footerTop_Icon"
              />

              <div className="footerTop_TextBlock">
                <h3 className="footerTop_TextBlock_Title">
                  {t("secondLinkTitle")}
                </h3>

                <a
                  href="https://boosty.to/helldivers.help"
                  target="_blank"
                  className="footerTop_TextBlock_Link_EngLink text-right mlarge:text-left"
                >
                  Boosty
                </a>

                <a
                  href="https://patreon.com/helldivershelp?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
                  target="_blank"
                  className="footerTop_TextBlock_Link_EngLink mt-[10px] text-right mlarge:text-left"
                >
                  Patreon
                </a>
              </div>
            </div>

            <span className="footerBottom">
              <p>HELLDIVERS.HELP is independent of </p>
              <a
                href="https://www.arrowheadgamestudios.com/"
                target="_blank"
                className="footerBottom_Link"
              >
                Arrowhead game Studios
              </a>
              &nbsp;&nbsp;and
              <a
                href="https://www.playstation.com/en-us/"
                target="_blank"
                className="footerBottom_Link"
              >
                Sony.
              </a>
              <p className="ml-[10px]">
                Trademarks belong to their respective owners.
              </p>
            </span>
          </footer>
        )
      }
    </MediaQuery>
  );
};

export default TheFooter;
