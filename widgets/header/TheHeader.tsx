"use client";
import React, { useEffect } from "react";

import MediaQuery from "react-responsive";

import { Observer, observer } from "mobx-react-lite";

import { useTranslations } from "next-intl";

import Link from "next/link";

import { mobileStore } from "@/store/MobileStore";

import MobileHeaderContent from "@/widgets/mobileHeaderContent/MobileHeaderContent";

import "./TheHeader.css";
import { getIntlArray } from "@/utils/generalFunctions";
import { ConfigProvider, Select } from "antd";
import { useParams } from "next/navigation";
import { useRouter } from "@/navigation";

const TheHeader = observer(() => {
  const router = useRouter();

  const params = useParams();

  const t = useTranslations("Header");

  const changeLanguage = (value: string) => {
    console.log(value.toLowerCase());
    router.push("/", { locale: value });
  };

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
                    {getIntlArray(t("links"))[0]}
                  </Link>

                  <Link href="/war" className="headerNavBlock_Link mr-[50px]">
                    {getIntlArray(t("links"))[1]}
                  </Link>

                  <Link
                    href="/stratagemtraining"
                    className="headerNavBlock_Link col-span-2 mr-[50px]"
                  >
                    {getIntlArray(t("links"))[2]}
                  </Link>

                  <ConfigProvider
                    theme={{
                      token: {
                        colorPrimary: "#ffe500",
                        colorBorder: "#ffe500",
                      },
                      components: {
                        Select: {
                          selectorBg: "#1e1e1e",
                          optionActiveBg: "transparent",
                          optionSelectedBg: "transparent",
                        },
                      },
                    }}
                  >
                    <Select
                      defaultValue={params.locale as string}
                      options={[
                        { value: "ru", label: "ru" },
                        { value: "en", label: "en" },
                      ]}
                      onChange={changeLanguage}
                      className="headerNavBlock_ChangeLanguageButton"
                    />
                  </ConfigProvider>
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
