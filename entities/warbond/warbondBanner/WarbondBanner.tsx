"use client";
import React from "react";

import { usePathname } from "next/navigation";

import { useTranslations } from "next-intl";

import Link from "next/link";

import { getIntlArray } from "@/utils/generalFunctions";

import { Warbond } from "@/data/warbonds";

import "./warbondBanner.css";

const WarbondBanner: React.FC<Warbond> = ({ id, title, image }) => {
  const pathname = usePathname();

  const t = useTranslations("data");

  return (
    <div key={id} className="warbondBanner">
      <Link href={`/warbonds/${title}`} className="warbondBanner-link">
        <img
          src={image}
          alt={`Изображение: ${getIntlArray(t("warbonds"))[id - 1]}`}
          title={getIntlArray(t("warbonds"))[id - 1]}
          className="warbondBanner-link-image"
        />
      </Link>

      <h4
        className={`warbondBanner-title ${pathname.includes("ru") ? "font-primary" : "font-en-secondary"}`}
      >
        {getIntlArray(t("warbonds"))[id - 1]}
      </h4>
    </div>
  );
};

export default WarbondBanner;
