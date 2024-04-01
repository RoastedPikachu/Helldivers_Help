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
      {title.toUpperCase()}{" "}
      <b className="pageTitle_Bold">{additionalTitle.toUpperCase()}</b>
    </h2>
  );
};

export default ThePageTitle;
