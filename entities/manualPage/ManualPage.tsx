"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";

import { useTranslations } from "next-intl";

import { getUserLocale } from "@/utils/generalFunctions";

import "./ManualPage.css";

interface ManualSectionProps {
  id: number;
  link: string;
  image: string;
}

const ManualPage: React.FC<ManualSectionProps> = ({ id, link, image }) => {
  const t = useTranslations("Pages");

  const [userLocale, setUserLocale] = useState("");

  useEffect(() => {
    setUserLocale(getUserLocale()!);
  }, []);

  return (
    <Link href={link} locale={userLocale}>
      <div className="manualPageBlock">
        <img src={image} alt="" className="w-full h-full" />
      </div>

      <p className="manualPageBlock_Title">{t(`${id}Link`)}</p>
    </Link>
  );
};

export default ManualPage;
