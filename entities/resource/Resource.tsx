"use client";
import React from "react";

import { useTranslations } from "next-intl";

import Link from "next/link";

import "./Resource.css";

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
  const t = useTranslations("Resources");

  return (
    <Link
      href="/resources#ResourceInfo"
      onClick={() => handleResourceBlockClick(id)}
      className="resource"
    >
      <img src={`${iconPath}`} alt="" className="resource_Icon" />

      <p className="resource_Title">{t(`${id}Title`)}</p>
    </Link>
  );
};

export default Resource;
