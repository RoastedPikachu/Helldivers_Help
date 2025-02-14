"use client";
import React, { useMemo } from "react";

import { useParams, usePathname } from "next/navigation";

import { useTranslations } from "next-intl";

import { Observer, observer } from "mobx-react-lite";

import { fromSlug, getIntlArray } from "@/utils/generalFunctions";

import { weapons } from "@/data/weapons";
import { armorKits } from "@/data/armor";
import { capes } from "@/data/capes";

import { mobileStore } from "@/store/MobileStore";

import { Breadcrumb, ConfigProvider } from "antd";

import Link from "next/link";

import TheHeader from "@/widgets/header/TheHeader";

import RunningLine from "@/shared/runningLine/RunningLine";

import "./TheTopPageBlock.css";

const TheTopPageBlock = observer(() => {
  const pathname = usePathname();
  const params = useParams();

  const t = useTranslations("WeaponryPage");
  const t1 = useTranslations("weapons");
  const t2 = useTranslations("EquipmentPage");
  const t3 = useTranslations("ArmorPage");
  const t4 = useTranslations("armor");
  const t5 = useTranslations("CustomizationPage");
  const t6 = useTranslations("PlayerCardsPage");
  const t7 = useTranslations("BoostersPage");
  const t8 = useTranslations("CapesPage");
  const t9 = useTranslations("capes");

  const isRunningLineShowed = useMemo(() => {
    if (mobileStore.isMobileDevice) {
      return pathname !== "/stratagemTraining/";
    }
    return true;
  }, [pathname]);

  const getItems = () => {
    if (typeof window !== "undefined") {
      if (pathname.includes("weaponry") && Object.entries(params).length > 1) {
        return [
          {
            title: (
              <Link href={"/weaponry"}>
                {`${t("pageTitle")} ${t("pageAdditionalTitle")}`.toUpperCase()}
              </Link>
            ),
          },
          {
            title: getIntlArray(t1("names"))[
              weapons.find(
                (weapon) =>
                  weapon.devName.toLowerCase() ===
                  fromSlug(params.weaponName as string),
              )!.id - 1
            ],
          },
        ];
      }

      if (
        pathname.includes("equipment") &&
        pathname.includes("armor") &&
        Object.entries(params).length < 2
      ) {
        return [
          {
            title: (
              <Link href={"/equipment"}>{t2("pageTitle").toUpperCase()}</Link>
            ),
          },
          {
            title:
              `${t3("pageTitle")} ${t3("pageAdditionalTitle")}`.toUpperCase(),
          },
        ];
      }

      if (
        pathname.includes("equipment") &&
        pathname.includes("boosters") &&
        Object.entries(params).length < 2
      ) {
        return [
          {
            title: (
              <Link href={"/equipment"}>{t2("pageTitle").toUpperCase()}</Link>
            ),
          },
          {
            title: t7("pageTitle").toUpperCase(),
          },
        ];
      }

      if (
        pathname.includes("equipment") &&
        pathname.includes("capes") &&
        Object.entries(params).length < 2
      ) {
        return [
          {
            title: (
              <Link href={"/equipment"}>{t2("pageTitle").toUpperCase()}</Link>
            ),
          },
          {
            title: t8("pageTitle").toUpperCase(),
          },
        ];
      }

      if (
        pathname.includes("equipment") &&
        pathname.includes("armor") &&
        Object.entries(params).length > 1
      ) {
        return [
          {
            title: (
              <Link href={"/equipment"}>{t2("pageTitle").toUpperCase()}</Link>
            ),
          },
          {
            title: (
              <Link href={"/equipment/armor"}>
                {`${t3("pageTitle")} ${t3("pageAdditionalTitle")}`.toUpperCase()}
              </Link>
            ),
          },
          {
            title: getIntlArray(t4("names"))[
              armorKits.find(
                (armor) =>
                  armor.devName.toLowerCase() ===
                  fromSlug(params.armorName as string),
              )!.id - 1
            ],
          },
        ];
      }

      if (
        pathname.includes("equipment") &&
        pathname.includes("capes") &&
        Object.entries(params).length > 1
      ) {
        return [
          {
            title: (
              <Link href={"/equipment"}>{t2("pageTitle").toUpperCase()}</Link>
            ),
          },
          {
            title: (
              <Link href={"/equipment/capes"}>
                {t8("pageTitle").toUpperCase()}
              </Link>
            ),
          },
          {
            title: getIntlArray(t9("names"))[
              capes.find(
                (cape) =>
                  cape.devName.toLowerCase() ===
                  fromSlug(params.capeName as string),
              )!.id - 1
            ],
          },
        ];
      }

      if (
        pathname.includes("customization") &&
        pathname.includes("playercards")
      ) {
        return [
          {
            title: (
              <Link href={"/customization"}>
                {`${t2("pageTitle")} ${t2("pageAdditionalTitle")}`.toUpperCase()}
              </Link>
            ),
          },
          {
            title:
              `${t6("pageTitle")} ${t6("pageAdditionalTitle")}`.toUpperCase(),
          },
        ];
      }
    }
  };
  return (
    <Observer>
      {() => (
        <section className="topPageSection">
          <TheHeader />

          {isRunningLineShowed && <RunningLine />}

          <ConfigProvider
            theme={{
              components: {
                Breadcrumb: {
                  itemColor: "#9e9e9e",
                  linkColor: "#9e9e9e",
                  linkHoverColor: "#ffffff",
                  lastItemColor: "#ffffff",
                  separatorColor: "#ffffff",
                },
              },
            }}
          >
            <Breadcrumb
              items={getItems()}
              className="topPageSection-breadcrumb"
            />
          </ConfigProvider>
        </section>
      )}
    </Observer>
  );
});

export default TheTopPageBlock;
