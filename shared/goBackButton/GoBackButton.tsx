import React from "react";

import Link from "next/link";

import "./GoBackButton.css";

const GoBackButton: React.FC<{ designationLink: string }> = ({
  designationLink,
}) => {
  return (
    <Link
      href={`${designationLink}`}
      aria-label="Кнопка: Вернуться на прошлую страницу"
      className="buttonLink"
    >
      <img
        src="/static/GeneralIcons/LeftArrowIcon.svg"
        alt=""
        className="buttonLink_Icon"
      />
    </Link>
  );
};

export default GoBackButton;
