import React, { useState } from "react";
import {
  Cell,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { downArr } from "../../assets";

// Different activity datasets
// Different activity datasets
const activityOptions = {
  Weekly: [
    { name: "Mon", value: 20 },
    { name: "Tue", value: 40 },
    { name: "Wed", value: 25 },
    { name: "Thu", value: 35 },
    { name: "Fri", value: 50 },
    { name: "Sat", value: 40 },
    { name: "Sun", value: 20 },
  ],
  Monthly: [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 380 },
    { name: "Mar", value: 420 },
    { name: "Apr", value: 460 },
    { name: "May", value: 500 },
    { name: "Ju", value: 480 },
    { name: "Jul", value: 520 },
    { name: "Aug", value: 510 },
    { name: "Sep", value: 470 },
    { name: "Oct", value: 450 },
    { name: "Nov", value: 430 },
    { name: "Dec", value: 490 },
  ],
  Yearly: [
    { name: "2022", value: 5200 },
    { name: "2023", value: 5400 },
    { name: "2024", value: 5600 },
    { name: "2025", value: 5800 },
    { name: "2026", value: 6000 },
  ],
};

function ActivityChart() {
  const [selectedFilter, setSelectedFilter] = useState("Weekly");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeDay, setActiveDay] = useState("Fri");

  const activityData = activityOptions[selectedFilter];

  return (
    <div className="bg-white rounded-[10px] shadow p-4 max-w-[427px] w-full relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Activity</h2>

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
              {Object.keys(activityOptions).map((option) => (
                <p
                  key={option}
                  onClick={() => {
                    setSelectedFilter(option);
                    setDropdownOpen(false);
                    setActiveDay(activityOptions[option][0].name); // reset selection
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

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={activityData}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <Tooltip cursor={{ fill: "transparent" }} content={() => null} />
          <Bar
            dataKey="value"
            radius={[8, 8, 0, 0]}
            onClick={(data) => setActiveDay(data.name)}
          >
            {activityData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.name === activeDay ? "#FF844B" : "#E8F1FD"}
              />
            ))}
           <LabelList
  dataKey="value"
  content={({ x, y, value, index }) => {
    const entry = activityData[index];
    if (!entry || entry.name !== activeDay) return null;

    return (
      <g>
        <foreignObject x={x - 15} y={y - 30} width={40} height={20}>
          <div
            style={{
              background: "black",
              color: "white",
              fontSize: "12px",
              borderRadius: "6px",
              padding: "2px 6px",
              textAlign: "center",
            }}
          >
            {value}%
          </div>
        </foreignObject>
      </g>
    );
  }}
/>

          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ActivityChart;