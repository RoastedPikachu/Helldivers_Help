"use client";

import React from "react";

interface ThePageTitleProps {
  title: string;
  additionalTitle: string;
}

const ThePageTitle: React.FC<ThePageTitleProps> = ({
  title,
  additionalTitle,
}) => {
  return (
    <h2 className="pageTitle">
      {title.toUpperCase()} {additionalTitle.toUpperCase()}
    </h2>
  );
};

export default ThePageTitle;
