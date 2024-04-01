"use client";
import React from "react";

interface ThePageDescriptionProps {
  description: string;
}

const PageDescription: React.FC<ThePageDescriptionProps> = ({
  description,
}) => {
  return <p className="pageDescription">{description}</p>;
};

export default PageDescription;
