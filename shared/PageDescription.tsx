"use client";
import React from "react";

interface ThePageDescriptionProps {
  description: string;
}

const PageDescription: React.FC<ThePageDescriptionProps> = ({
  description,
}) => {
  return <span className="pageDescription">{description}</span>;
};

export default PageDescription;
