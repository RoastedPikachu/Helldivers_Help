"use client";
import React from "react";

import { ItemType } from "antd/es/breadcrumb/Breadcrumb";

import { Breadcrumb } from "antd";

const TheBreadcrumbs = () => {
  const breadcrumbItems = [
    {
      title: "Главная",
      href: "/",
    },
  ] as ItemType[];

  return <Breadcrumb items={breadcrumbItems} />;
};

export default TheBreadcrumbs;
