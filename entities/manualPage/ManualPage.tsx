"use client";
import React from "react";

import Link from "next/link";

import "./ManualPage.css";

interface ManualSectionProps {
  id: number;
  link: string;
  title: string;
}

const ManualPage: React.FC<ManualSectionProps> = ({ id, link, title }) => {
  return (
    <Link href={link}>
      <div className="manualPageBlock">
        <p className="manualPageBlock_Number">{id}.</p>

        <p className="manualPageBlock_Title">{title}</p>
      </div>
    </Link>
  );
};

export default ManualPage;
