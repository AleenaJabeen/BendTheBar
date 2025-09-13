import React from "react";

function MonthlyProgress({ progress }) {
  const totalChunks = 40; // number of chunks
  const activeChunks = Math.round((progress / 100) * totalChunks);
  const arcAngle = (220 * Math.PI) / 180; // arc angle in radians (~220°)
  const radiusOuter = 90;
  const radiusInner = 70;
  const centerX = 100;
  const centerY = 100;

  return (
    <div className="p-6 bg-white rounded-2xl mt-4 shadow flex flex-col items-center max-w-[427px] w-full h-[304px] rounded-[10px]">
      <h3 className="text-lg font-semibold mb-6 self-start">Monthly Progress</h3>

      {/* Chunked Arc */}
      <div className="relative w-60 h-40 flex items-center justify-center">
        <svg viewBox="0 0 200 150" className="w-full h-full">
          {Array.from({ length: totalChunks }).map((_, i) => {
            // FIXED: Start from left side and sweep clockwise
            const angle = (-arcAngle / 2) + (i / (totalChunks - 1)) * arcAngle;

            // Rotate arc so it stands upright (shift by -90°)
            const rotatedAngle = angle - Math.PI / 2;

            const x1 = centerX + radiusInner * Math.cos(rotatedAngle);
            const y1 = centerY + radiusInner * Math.sin(rotatedAngle);
            const x2 = centerX + radiusOuter * Math.cos(rotatedAngle);
            const y2 = centerY + radiusOuter * Math.sin(rotatedAngle);

            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={i < activeChunks ? "#FF7443" : "#E5E7EB"}
                strokeWidth="6"
                strokeLinecap="round"
              />
            );
          })}
        </svg>

        {/* Percentage in Center */}
        <div className="absolute top-17 flex flex-col items-center">
          <span className="text-[36px] font-semibold text-[#191C32]">
            {progress}%
          </span>
        </div>
      </div>

      <p className="font-[Manrope] text-lg mt-1 text-[#9DACC1] text-center">
        You have achieved{" "}
        <span className="text-[#FF7443]">{progress}%</span> of your goal this month
      </p>
    </div>
  );
}

export default MonthlyProgress;
