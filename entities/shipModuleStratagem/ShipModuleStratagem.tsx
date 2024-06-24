import React from "react";

import "./ShipModuleStratagem.css";

interface StratagemProps {
  iconPath: string;
  name: string;
}

const ShipModuleStratagem: React.FC<StratagemProps> = ({ iconPath, name }) => {
  return (
    <div className="shipModuleStratagem">
      <img src={`${iconPath}`} alt="" className="shipModuleStratagem_Icon" />

      <p className="shipModuleStratagem_Name">{name}</p>
    </div>
  );
};

export default ShipModuleStratagem;
