// WorkoutPlan.jsx
import React, { useState } from "react";
import { blackArrow, exercise, calendar, warmup, helpIcon } from "../../assets";

const workoutsByDay = {
  Monday: {
    warmup: [
      { name: "Torso Twists", duration: "5 minutes", reps: "20s each" },
      { name: "Torso Twists", duration: "5 minutes", reps: "20s each" },
    ],
    main: [
      { name: "Push Ups", duration: "10 minutes", reps: "15 reps" },
      { name: "Squats", duration: "10 minutes", reps: "20 reps" },
    ],
  },
  Tuesday: {
    warmup: [
      { name: "Jumping Jacks", duration: "3 minutes", reps: "30s each" },
    ],
    main: [{ name: "Lunges", duration: "8 minutes", reps: "12 reps each leg" }],
  },
  Wednesday: {
    warmup: [{ name: "Arm Circles", duration: "4 minutes", reps: "15 reps" }],
    main: [{ name: "Plank", duration: "5 minutes", reps: "3x 60s hold" }],
  },
  Thursday: {
    warmup: [{ name: "Stretching", duration: "5 minutes", reps: "Full body" }],
    main: [{ name: "Pull Ups", duration: "10 minutes", reps: "12 reps" }],
  },
  Friday: {
    warmup: [{ name: "Jog in Place", duration: "5 minutes", reps: "2x" }],
    main: [{ name: "Burpees", duration: "8 minutes", reps: "15 reps" }],
  },
  Saturday: {
    warmup: [{ name: "Leg Swings", duration: "5 minutes", reps: "10 reps" }],
    main: [{ name: "Sit Ups", duration: "6 minutes", reps: "20 reps" }],
  },
  Sunday: {
    warmup: [{ name: "Yoga", duration: "10 minutes", reps: "Full body" }],
    main: [{ name: "Rest Day", duration: "-", reps: "-" }],
  },
};

export default function WorkoutPlan() {
  const [day, setDay] = useState("Monday");

  const data = workoutsByDay[day];

  return (
    <div className="bg-[#FFFFFF] rounded-[10px] p-4 mt-6  max-w-[707px] w-full">
      <div className="font-[Poppins] flex justify-between items-center mb-4">
        <h3 className="text-2xl text-[#000000] font-semibold">Workout Plan</h3>
        <button className="px-4 py-2 gradient-bg text-sm text-white rounded-full font-semibold">
          Regenerate Plan
        </button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-[Work_Sans] text-[#000000] font-bold text-xl">
          Workout Name
        </h2>
        <div className="flex items-center gap-2 border border-[#000000] rounded-full px-2 ">
          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="px-3 py-2 text-sm font-semibold font-[Poppins] appearance-none focus:outline-none"
          >
            {Object.keys(workoutsByDay).map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
          <img src={blackArrow} alt="Arrow" />
        </div>
      </div>
      <hr className="w-full text-[#0000001A] h-[1px] my-2" />

      {/* Filters */}
      <div className="font-[Poppins ]flex justify-between items-center mb-4">
        <div className="flex gap-2 flex-wrap">
          <div className="px-3 py-1 flex items-center gap-2 bg-[#FFAFAF1F] rounded-[7px] text-[#D93732] text-[13px] font-semibold">
            <img src={calendar} alt="Days" />
            <span>3 days</span>
          </div>
          <div className="px-3 py-1 flex items-center gap-2 bg-[#FFAFAF1F] rounded-[7px] text-[#D93732] text-[13px] font-semibold">
            <img src={exercise} alt="Exercise" />
            <span>20 Exercises</span>
          </div>
          <div className="px-3 py-1 flex items-center gap-2 bg-[#FFAFAF1F] rounded-[7px] text-[#D93732] text-[13px] font-semibold">
            <img src={calendar} alt="Level" />
            <span>Beginner</span>
          </div>
          <div className="px-3 py-1 flex items-center gap-2 bg-[#FFAFAF1F] rounded-[7px] text-[#D93732] text-[13px] font-semibold">
            <img src={exercise} alt="Reps" />
            <span>30x reps Each</span>
          </div>
        </div>
      </div>

      {/* Warm-up */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-4 font-[Work_Sans]">
          <h3 className="font-bold text-[#000000]  text-base">Warm-up</h3>
          <span className="text-sm text-[#000000] font-semibold">
            {data.warmup.length} Exercise
          </span>
        </div>
        <div className="flex gap-3">
          {data.warmup.map((ex, idx) => (
            <div
              key={idx}
              className="w-full bg-[#D9373117] flex items-center justify-between rounded-[12px] p-3 w-1/2"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-[56px] h-[50px]">
                  <img src={warmup} alt="Exercise" className="w-full h-full rounded-lg" />
                </div>
                <div className="font-[Work_Sans] flex flex-col">
                  <h4 className="font-semibold tex-base text-[#000000]">{ex.name}</h4>
                  <div className="font-semibold  flex items-center gap-4">
                    <p className="text-sm text-[#000000]">{ex.duration}</p>
                    <p className="text-sm text-[#000000]">{ex.reps}</p>
                  </div>
                </div>
              </div>
              <div>
                <img src={helpIcon} alt="Help" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main */}
      <div>
        <div className="flex justify-between items-center mb-4 font-[Work_Sans]">
          <h3 className="font-bold text-[#000000]  text-base">Main</h3>
          <span className="text-sm text-[#000000] font-semibold">
            {data.main.length} Exercise
          </span>
        </div>
        <div className="flex gap-3">
          {data.main.map((ex, idx) => (
             <div
              key={idx}
              className="w-full bg-[#D9373117] flex items-center justify-between rounded-[12px] p-3 w-1/2"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-[56px] h-[50px]">
                  <img src={warmup} alt="Exercise" className="w-full h-full rounded-lg" />
                </div>
                <div className="font-[Work_Sans] flex flex-col">
                  <h4 className="font-semibold tex-base text-[#000000]">{ex.name}</h4>
                  <div className="font-semibold  flex items-center gap-4">
                    <p className="text-sm text-[#000000]">{ex.duration}</p>
                    <p className="text-sm text-[#000000]">{ex.reps}</p>
                  </div>
                </div>
              </div>
              <div>
                <img src={helpIcon} alt="Help" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
