"use client";
import React from "react";

import { useTranslations } from "next-intl";

import { getIntlArray } from "@/utils/generalFunctions";

import Link from "next/link";

import "./resource.css";

interface ResourceProps {
  id: number;
  iconPath: string;
  handleResourceBlockClick: (id: number) => void;
}

const Resource: React.FC<ResourceProps> = ({
  id,
  iconPath,
  handleResourceBlockClick,
}) => {
  const t = useTranslations("resources");

  return (
    <Link
      href="/resources#ResourceInfo"
      onClick={() => handleResourceBlockClick(id)}
      className="resource"
    >
      <img src={`${iconPath}`} alt="" className="resource-icon" />

      <p className="resource-title">{getIntlArray(t("names"))[id - 1]}</p>
    </Link>
  );
};

export default Resource;
