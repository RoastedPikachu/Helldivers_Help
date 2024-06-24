"use client";
import React from "react";

import Link from "next/link";

import "./Resource.css";

interface ResourceProps {
  id: number;
  iconPath: string;
  title: string;
  handleResourceBlockClick: (id: number) => void;
}

const Resource: React.FC<ResourceProps> = ({
  id,
  iconPath,
  title,
  handleResourceBlockClick,
}) => {
  return (
    <Link
      href="/resources#ResourceInfo"
      onClick={() => handleResourceBlockClick(id)}
      className="resource"
    >
      <img src={`${iconPath}`} alt="" className="resource_Icon" />

      <p className="resource_Title">{title}</p>
    </Link>
  );
};

export default Resource;
