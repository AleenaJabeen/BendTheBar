import React from "react";
import { mapIcon, weightLoss,Topology,fire2 } from "../../assets";

function UserProfile({ user }) {
// --- Calculate weight loss percentage ---
const initialWeight = user.weight;        // starting/original weight (e.g. 100kg)
const lostSoFar = user.weightLoss;        // how much has been lost (e.g. 25kg)
const currentWeight = initialWeight - lostSoFar;

const progress = (lostSoFar / initialWeight) * 100;

  // --- Calories ---
  const calories = user.calories || 0;
  const maxCalories = user.maxCalories || 2500;
  const caloriePercent = (calories / maxCalories) * 100;

  return (
    <>
      <div className="flex items-end gap-4 max-w-[707px] w-full">
        <div className="flex flex-col gap-2 w-[305px] px-2">
          {/* User bio */}
          <div className="flex items-center gap-2">
            <div className="w-[46px] h-[46px] rounded-[10px]">
              <img
                src={user.profile}
                alt="User Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="font-[Manrope] ">
              <h3 className="text-lg font-bold text-[#191C32]">{user.name}</h3>
              <div className="flex items-center gap-2">
                <img src={mapIcon} alt="" />
                <p className="text-sm text-[#9CA3AE]">{user.location}</p>
              </div>
            </div>
          </div>

          {/* User health Info */}
          <div className="font-[Manrope] flex justify-around items-center max-w-[305px] h-[78px] bg-[#FFFFFF] rounded-[10px]">
            <div className="flex flex-col items-center justify-center">
              <p className="flex items-center font-bold text-[#191C32] text-2xl">
                {user.weight-user.weightLoss}
                <span className="text-sm text-[#9CA3AE] font-semibold">kg</span>
              </p>
              <p className="text-[#6B6E7B] text-[15px] font-medium">Weight</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="flex items-center font-bold text-[#191C32] text-2xl">
                {user.height}
              </p>
              <p className="text-[#6B6E7B] text-[15px] font-medium">Height</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="flex items-center font-bold text-[#191C32] text-2xl">
                {user.age}
                <span className="text-sm text-[#9CA3AE] font-semibold">yrs</span>
              </p>
              <p className="text-[#6B6E7B] text-[15px] font-medium">Age</p>
            </div>
          </div>

          {/* Weight Loss */}
          <div className="font-[Manrope] flex justify-between px-3 items-center gap-3 max-w-[305px] h-[78px] bg-[#FFFFFF] rounded-[10px]">
            <img src={weightLoss} alt="Fire emoji" />
            <div>
              <p className="text-[#191C32] text-base font-semibold">
                Weight Loss
              </p>
              <p className="text-[#9DACC1] text-sm">
                {currentWeight}kg/{initialWeight}kg
              </p>
            </div>
            {/* weight percentage circle */}
            <div className="relative w-[50px] h-[50px]">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="25"
                  cy="25"
                  r="22"
                  stroke="#e5e7eb"
                  strokeWidth="5"
                  fill="transparent"
                />
                <circle
                  cx="25"
                  cy="25"
                  r="22"
                  stroke="#BE0D23"
                  strokeWidth="3"
                  fill="transparent"
                  strokeDasharray={2 * Math.PI * 22}
                  strokeDashoffset={
                    2 * Math.PI * 22 * (1 - progress / 100)
                  }
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-[12px] font-bold text-[#191C32]">
                {Math.round(progress)}%
              </div>
            </div>
          </div>
        </div>


        {/* Calories (Dynamic Gauge) */}
       <div className="relative gradient-bg rounded-[10px] flex flex-col items-center justify-center w-[200px] h-[170px] overflow-hidden">
  {/* Background topology image */}
  <img
    src={Topology}
    alt="Background pattern"
    className="absolute inset-0 z-50 w-full h-full object-contain"
  />

  {/* Foreground content */}
  <div className="font-[Manrope] relative z-10 flex flex-col items-center">
    {/* Title */}
    <div className="flex justify-self-start items-start gap-2  mb-2">
      <img src={fire2} alt="fire" />
      <p className="text-white  font-bold text-base">Calories</p>
    </div>

    {/* Semi-circle Gauge */}
    <div className="relative w-[140px] h-[70px]">
      <svg viewBox="0 0 100 50" className="w-full h-full">
        {/* Background arc */}
        <path
          d="M 10 50 A 40 40 0 0 1 90 50"
          fill="none"
          stroke="#FFFFFF4D"
          strokeWidth="18"
          strokeLinecap="round"
        />
        {/* Progress arc */}
        <path
          d="M 10 50 A 40 40 0 0 1 90 50"
          fill="none"
          stroke="#fff"
          strokeWidth="18"

          strokeDasharray="126"
          strokeDashoffset={126 - (126 * caloriePercent) / 100}
        />
        {/* Needle */}
        <line
          x1="50"
          y1="50"
          x2={50 + 35 * Math.cos(Math.PI * (1 - caloriePercent / 100))}
          y2={50 - 35 * Math.sin(Math.PI * (1 - caloriePercent / 100))}
          stroke="black"
          strokeWidth="2"
        />
        <circle cx="50" cy="50" r="4" fill="white" />
      </svg>
    </div>

    {/* Labels */}
    <p className="font-[Manrope] text-white text-sm mt-2 font-medium text-[#EDEDED99]">Today</p>
    <p className="font-[Manrope] text-white text-[13px] font-bold ">
      {caloriePercent < 100 ? "Under" : "Over"}
    </p>
  </div>
</div>

        {/* Subscription */}
        <div className="font-[Poppins] flex flex-col gap-2 bg-[#EC7E4A] rounded-[10px] py-6 px-4 max-w-[177px] h-[170px]">
          <div className="flex flex-col gap-1">
            <h3 className="text-[#FFFFFF] font-semibold text-base">
              SUBSCRIPTION
            </h3>
            <p className="text-[#FFFFFF99] text-sm font-medium">
              {user.subscription}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[#FFFFFF] font-semibold text-base text-nowrap">
              REGISTERED ON
            </h3>
            <p className="text-[#FFFFFF99] text-sm font-medium">
              {user.registerDate}
            </p>
          </div>
        </div>

      </div>
    </>
  );
}

export default UserProfile;
