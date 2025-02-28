"use client";
import React from "react";

import { useTranslations } from "next-intl";

import "./MobileFooterContent.css";

const MobileFooterContent = () => {
  const t = useTranslations("Footer");
  return (
    <footer>
      <div className="footerTop mt-[20px]">
        <h3 className="footerTop_TextBlock_Title">{t("firstLinkTitle")}</h3>

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
      </div>

      <div className="footerTop mt-[50px]">
        <h3 className="footerTop_TextBlock_Title">{t("secondLinkTitle")}</h3>

        <a
          href="https://boosty.to/helldivers.help"
          target="_blank"
          className="footerTop_TextBlock_Link_EngLink"
        >
          Boosty
        </a>

        <a
          href="https://patreon.com/helldivershelp?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
          target="_blank"
          className="footerTop_TextBlock_Link_EngLink mt-[10px]"
        >
          Patreon
        </a>
      </div>

      <img
        src="/static/GeneralLogos/HelldiversLogo.png"
        alt="Логотип игры Helldivers 2"
        className="footerTop_Icon"
      />

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
          href="https://www.arrowheadgamestudios.com/"
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
  );
};

export default MobileFooterContent;
