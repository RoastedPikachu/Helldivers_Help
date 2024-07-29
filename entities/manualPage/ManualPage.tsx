"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";

import { useTranslations } from "next-intl";

import { getUserLocale } from "@/utils/generalFunctions";

import "./ManualPage.css";

interface ManualSectionProps {
  id: number;
  link: string;
}

const ManualPage: React.FC<ManualSectionProps> = ({ id, link }) => {
  const t = useTranslations("Pages");

  const [userLocale, setUserLocale] = useState("");

  useEffect(() => {
    setUserLocale(getUserLocale()!);
  }, []);

  return (
    <Link href={link} locale={userLocale}>
      <div className="manualPageBlock">
        <p className="manualPageBlock_Number">{id}.</p>

        <p className="manualPageBlock_Title">{t(`${id}Link`)}</p>
      </div>
    </Link>
  );
};

export default ManualPage;
