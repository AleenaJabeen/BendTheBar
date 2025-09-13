import React from "react";
import { door2 } from "../../assets";

function DoorCard({ door, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`font-[Lato] flex items-center gap-4 max-w-[280px]  h-[108px] p-4 rounded-lg cursor-pointer transition-all
        ${isSelected ? "gradient-bg text-white" : "bg-[#FFFFFF] shadow shadow-[#00000026]"}
      `}
    >
      <div
        className={`flex justify-center items-center p-4 rounded-lg ${
          isSelected ? "bg-white" : "bg-gray-100"
        }`}
      >
        <img src={door2} alt="Door Icon" />
      </div>
      <div>
        <h2
          className={`font-bold text-[20px] ${
            isSelected ? "text-white" : "text-black"
          }`}
        >
          {door.name}
        </h2>
        <h4
          className={`font-normal text-sm ${
            isSelected ? "text-white" : "text-gray-600"
          }`}
        >
          Total users: {door.totalUsers}
        </h4>
      </div>
    </div>
  );
}

export default DoorCard;
