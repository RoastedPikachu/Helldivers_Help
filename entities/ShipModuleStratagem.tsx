import React from "react";

interface StratagemProps {
  iconPath: string;
  name: string;
}

const ShipModuleStratagem: React.FC<StratagemProps> = ({ iconPath, name }) => {
  return (
    <div className="flex items-center mt-[20px]">
      <img
        src={`${iconPath}`}
        alt=""
        className="w-[50px] h-[50px] rounded-[5px]"
      />

      <p className="ml-[20px] text-[#ffffff] text-[1.25rem] font-['Exo2'] font-bold">
        {name}
      </p>
    </div>
  );
};

export default ShipModuleStratagem;
