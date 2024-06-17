"use client";
import React from "react";

import "./ObtainingTypeTag.css";

interface WarbondTagProps {
  image: string;
}

const ObtainingTypeTag: React.FC<WarbondTagProps> = ({ image }) => {
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

export default ObtainingTypeTag;
