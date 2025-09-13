import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", onetimepurchase: 0, freepromo: 0 },
  { name: "Feb", onetimepurchase: 14, freepromo: 6 },
  { name: "Mar", onetimepurchase: 20, freepromo: 18 },
  { name: "Apr", onetimepurchase: 13, freepromo: 8 },
  { name: "May", onetimepurchase: 28, freepromo: 15 },
  { name: "Jun", onetimepurchase: 29, freepromo: 36 },
];

const tabs = ["Daily", "Weekly", "Monthly", "Yearly"];

const RevenueReports = () => {
  const [activeTab, setActiveTab] = useState("Weekly");

  return (
    <>
      <h2 className="font-semibold font-[Poppins] text-2xl text-[#000000] py-4">Revenue Reports</h2> 
    <div className="lg:w-[75%] w-[100%]  bg-white py-4 rounded-[14px] shadow-md shadow-[#00000026]">
      {/* Tabs */}
      <div className="flex gap-8 pl-10 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="text-sm font-normal text-[#000000]"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
    <LineChart
  data={data}
  margin={{ top: 0, right: 80, left: -20, bottom: 0 }}
>
  <XAxis
    dataKey="name"
    tick={{ fontSize: 14, fill: "#000000" }}
    axisLine={false}
    tickLine={false}
  />
  <YAxis
    tick={{ fontSize: 14, fill: "#000000" }}
    axisLine={false}
    tickLine={false}
    domain={[0, 40]}
    ticks={[0, 5, 10, 15, 20, 25, 30, 35]}
  />
  <Tooltip
    contentStyle={{
      borderRadius: "8px",
      border: "none",
      boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
    }}
    formatter={(value) => `${value}`}
  />
  <Legend
    verticalAlign="top"
    align="right"
    iconType="circle"
    wrapperStyle={{
      fontSize: "14px",
      fontFamily: "Poppins",
      color: "#999",
    }}
    payload={[
      { value: "One-Time Purchase", type: "circle", id: "onetimepurchase", color: "#F99A43" },
      { value: "Free Promo Unlocks", type: "circle", id: "freepromo", color: "#D93732" },
    ]}
  />

  <Line
    type="monotone"
    dataKey="onetimepurchase"
    stroke="#F99A43"
    strokeWidth={3}
    dot={false}
    name="One-Time Purchase"
  />
  <Line
    type="monotone"
    dataKey="freepromo"
    stroke="#D93732"
    strokeWidth={3}
    dot={false}
    name="Free Promo Unlocks"
  />
</LineChart>

        </ResponsiveContainer>
      </div>
    </div>
    </>
  );
};

export default RevenueReports;
