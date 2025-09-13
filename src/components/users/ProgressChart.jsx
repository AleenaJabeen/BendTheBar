// ProgressActivity.jsx
import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { downArr } from "../../assets";

// Different progress datasets
const progressOptions = {
  Weekly: [
    { name: "Cardio", value: 10, color: "#1AB0B0" },
    { name: "Stretching", value: 15, color: "#D93732" },
    { name: "Treadmill", value: 12, color: "#FF4D4D" },
    { name: "Strength", value: 8, color: "#8676FE" },
  ],
  Monthly: [
    { name: "Cardio", value: 40, color: "#1AB0B0" },
    { name: "Stretching", value: 50, color: "#D93732" },
    { name: "Treadmill", value: 35, color: "#FF4D4D" },
    { name: "Strength", value: 25, color: "#8676FE" },
  ],
  Yearly: [
    { name: "Cardio", value: 400, color: "#1AB0B0" },
    { name: "Stretching", value: 480, color: "#D93732" },
    { name: "Treadmill", value: 360, color: "#FF4D4D" },
    { name: "Strength", value: 250, color: "#8676FE" },
  ],
};

export default function ProgressChart() {
  const [selectedFilter, setSelectedFilter] = useState("Weekly");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const progressData = progressOptions[selectedFilter];

  return (
    <div className="bg-white rounded-[10px] max-w-[427px] w-full p-4 my-4 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Progress</h2>

        {/* Dropdown */}
        <div className="relative">
          <div
            className="flex items-center text-[#9D9D9D] font-[Manrope] gap-2 text-sm cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {selectedFilter} <img src={downArr} alt="Drop down" />
          </div>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-md w-28 z-10">
              {Object.keys(progressOptions).map((option) => (
                <p
                  key={option}
                  onClick={() => {
                    setSelectedFilter(option);
                    setDropdownOpen(false);
                  }}
                  className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  {option}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-start gap-4 items-center">
        {/* Progress Circle */}
        <div>
          <ResponsiveContainer width={160} height={160}>
            <PieChart>
              <Pie
                data={progressData}
                innerRadius={55}
                outerRadius={80}
                dataKey="value"
                paddingAngle={0}
              >
                {progressData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              {/* Center Label */}
              <text
                x="50%"
                y="40%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-sm font-semibold fill-[#9DACC1]"
              >
                {progressData[1].name}
                <tspan
                  x="50%"
                  dy="1.4em"
                  className="text-xl font-bold fill-[#191A1E] font-[Manrope]"
                >
                  {progressData[1].value}hrs
                </tspan>
              </text>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="w-full space-y-2">
          {progressData.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center gap-2 text-sm"
            >
              <div className="flex items-center gap-2">
                <p
                  className="w-[8px] h-[8px] rounded-full"
                  style={{ backgroundColor: item.color }}
                ></p>
                <p className="text-[#0A0A0A] text-sm font-[Manrope]">
                  {item.name}
                </p>
              </div>
              <div>
                <span className="ml-auto text-[#9D9D9D] font-medium text-sm font-[Manrope]">
                  {item.value} hrs
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}