"use client";
import React from "react";

import { useTranslations } from "next-intl";

import Link from "next/link";

import "./ManualPage.css";

interface ManualSectionProps {
  id: number;
  link: string;
}

const ManualPage: React.FC<ManualSectionProps> = ({ id, link }) => {
  const t = useTranslations("Pages");
  return (
    <Link href={link}>
      <div className="manualPageBlock">
        <p className="manualPageBlock_Number">{id}.</p>

        <p className="manualPageBlock_Title">{t(`${id}Link`)}</p>
      </div>
    </Link>
  );
};

export default ManualPage;
