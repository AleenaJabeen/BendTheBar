import React from "react";

function FeatureCard({ feature }) {
  return (
    <div className="flex gap-4 p-4 max-w-[280px] items-center rounded-xl bg-[#FFFFFF] shadow-sm shadow-[#00000026]">
      <div className="flex justify-center items-center bg-linear-to-r from-[#D93732] to-[#D93731] rounded-lg  px-4 h-[78px]">
        <img src={feature.icon} alt={feature.name} className="w-[43px] h-[43px] object-contain" />
      </div>
      <div className="flex flex-col">
        <div className="flex gap-4 items-center font-[Lato]">
          <h3 className="font-bold text-[29px] text-[#1E1B39]">{feature.number}</h3>
          <h4
            className={`${
              feature.percentage > 0 ? "text-[#6E39CB]" : "text-[#F93131]"
            } text-sm font-normal`}
          >
            {`${
              feature.percentage > 0
                ? "+" + feature.percentage
                : feature.percentage
            }`}
            %
          </h4>
        </div>
        <p className="text-[#89868D] text-sm font-normal font-[Lato]">
          {feature.name.toUpperCase()}
        </p>
      </div>
    </div>
  );
}

export default FeatureCard;
