"use client";
import React from "react";

import "./ObtainingMethodTag.css";

interface WarbondTagProps {
  image: string;
}

const ObtainingMethodTag: React.FC<WarbondTagProps> = ({ image }) => {
  return (
    <>
      {image.length && (
        <div className="warbondTagBlock">
          <img src={`${image}`} alt="" className="warbondTagBlock_Image" />
        </div>
      )}
    </>
  );
};

export default ObtainingMethodTag;
