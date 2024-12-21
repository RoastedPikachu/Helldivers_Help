"use client";
import React, { useEffect } from "react";

import MediaQuery from "react-responsive";

import { Observer, observer } from "mobx-react-lite";

import { useTranslations } from "next-intl";

import Link from "next/link";

import { mobileStore } from "@/store/MobileStore";

import MobileHeaderContent from "@/widgets/mobileHeaderContent/MobileHeaderContent";

import "./TheHeader.css";

const TheHeader = observer(() => {
  const t = useTranslations("Header");

  useEffect(() => {
    mobileStore.changeIsMobileDeviceStatus();
  }, []);
  return (
    <Observer>
      {() => (
        <MediaQuery maxWidth={480}>
          {(matches) =>
            matches ? (
              <MobileHeaderContent />
            ) : (
              <header>
                <Link href="/" className="headerLogoLink">
                  <img
                    src="/static/GeneralIcons/HelldiversHelmet.svg"
                    alt=""
                    className="headerLogoLink_Icon"
                  />

                  <p className="headerLogoLink_Text">
                    HELLDIVERS <b className="headerLogoLink_Text_Bold">help</b>
                  </p>
                </Link>

                <nav className="headerNavBlock">
                  <Link href="/news" className="headerNavBlock_Link mr-[50px]">
                    {t("Link1")}
                  </Link>

                  <Link href="/code" className="headerNavBlock_Link mr-[50px]">
                    {t("Link2")}
                  </Link>

                  <Link href="/war" className="headerNavBlock_Link mr-[50px]">
                    {t("Link3")}
                  </Link>

                  <Link
                    href="/stratagemTraining"
                    className="headerNavBlock_Link col-span-2"
                  >
                    {t("Link4")}
                  </Link>
                </nav>
              </header>
            )
          }
        </MediaQuery>
      )}
    </Observer>
  );
});

export default TheHeader;
