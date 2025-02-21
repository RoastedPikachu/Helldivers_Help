"use client";
import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import Link from "next/link";

import "./manualPage.css";

interface ManualSectionProps {
  id: number;
  link: string;
  image: string;
}

const ManualPage: React.FC<ManualSectionProps> = ({ id, link, image }) => {
  const t = useTranslations("Pages");

  return (
    <Link href={link}>
      <div className="manualPageBlock">
        {/*<img src={image} alt="" className="w-full h-full" />*/}

        <p className="manualPageBlock-title">
          {getIntlArray(t("links"))[id - 1]}
        </p>
      </div>
    </Link>
  );
};

export default ManualPage;
