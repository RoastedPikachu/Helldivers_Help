"use client";
import React from "react";

import "./WarbondTag.css";

interface WarbondTagProps {
  image: string;
}

const WarbondTag: React.FC<WarbondTagProps> = ({ image }) => {
  return (
    <div className="warbondTagBlock">
      <img src={`${image}`} alt="" className="warbondTagBlock_Image" />
    </div>
  );
};

export default WarbondTag;
