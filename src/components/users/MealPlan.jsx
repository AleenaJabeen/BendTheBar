// MealPlan.jsx
import React, { useState } from "react";
import { grayArrow, pizzaBurger, burger, burrito } from "../../assets";

const mealsByDay = {
  Monday: [
    {
      food: "Burrito",
      meal: "Pizza Burger",
      calories: "Receiving",
      time: "01:00 AM",
      carbs: "20 gm",
      image: burrito,
    },
    {
      food: "Burger",
      meal: "Pizza Burger",
      calories: "Receiving",
      time: "01:00 AM",
      carbs: "20 gm",
      image: burger,
    },
    {
      food: "Pizza Burger",
      meal: "Pizza Burger",
      calories: "Receiving",
      time: "01:00 AM",
      carbs: "20 gm",
      image: pizzaBurger,
    },
  ],
  Tuesday: [
    {
      food: "Salad",
      meal: "Veggie Mix",
      calories: "250 kcal",
      time: "12:00 PM",
      carbs: "15 gm",
      image: pizzaBurger,
    },
    {
      food: "Grilled Chicken",
      meal: "Protein Meal",
      calories: "400 kcal",
      time: "02:00 PM",
      carbs: "5 gm",
      image: burger,
    },
  ],
  Wednesday: [
    {
      food: "Omelette",
      meal: "Breakfast",
      calories: "200 kcal",
      time: "08:00 AM",
      carbs: "2 gm",
      image: burrito,
    },
    {
      food: "Sandwich",
      meal: "Lunch",
      calories: "350 kcal",
      time: "01:00 PM",
      carbs: "30 gm",
      image: burger,
    },
  ],
  Thursday: [
    {
      food: "Smoothie",
      meal: "Breakfast",
      calories: "180 kcal",
      time: "09:00 AM",
      carbs: "20 gm",
      image: burrito,
    },
    {
      food: "Pasta",
      meal: "Dinner",
      calories: "500 kcal",
      time: "07:00 PM",
      carbs: "40 gm",
      image: pizzaBurger,
    },
  ],
  Friday: [
    {
      food: "Steak",
      meal: "Protein Meal",
      calories: "450 kcal",
      time: "08:00 PM",
      carbs: "0 gm",
      image: burrito,
    },
    {
      food: "Rice",
      meal: "Carbs Meal",
      calories: "300 kcal",
      time: "01:00 PM",
      carbs: "45 gm",
      image: burger,
    },
  ],
  Saturday: [
    {
      food: "Toast",
      meal: "Breakfast",
      calories: "120 kcal",
      time: "08:00 AM",
      carbs: "15 gm",
      image: burrito,
    },
    {
      food: "Soup",
      meal: "Lunch",
      calories: "200 kcal",
      time: "12:00 PM",
      carbs: "10 gm",
      image: pizzaBurger,
    },
  ],
  Sunday: [
    {
      food: "Pizza",
      meal: "Cheat Meal",
      calories: "600 kcal",
      time: "07:00 PM",
      carbs: "70 gm",
      image: burrito,
    },
  ],
};

export default function MealPlan() {
  const [day, setDay] = useState("Monday");

  return (
    <div className="p-4 max-w-[707px] w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-[Poppins] text-2xl text-[#000000] font-semibold">Meal Plan</h2>
        <div className="flex items-center px-3 py-1 gap-4 border border-[#A8A8A899] rounded-full">
          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="appearance-none font-[Poppins] focus:outline-none text-base text-[#000000]"
          >
            {Object.keys(mealsByDay).map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
          <img src={grayArrow} alt="Select" />
        </div>
      </div>
      <div className=" flex justify-between items-center text-[#475569] font-[Manrope] font-bold text-sm px-4 mb-4">
        <div clas>Food</div>
        <div>Meal</div>
        <div>Calories</div>
        <div>Priorities</div>
        <div>Carbs</div>
      </div>

      <div className="space-y-3">
        {mealsByDay[day].map((meal, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center gap-4 bg-white rounded-sm shadow shadow-[#9F9F9F26] p-3 w-full h-[52px]"
          >
            <div className="font-[Manrope] flex items-center gap-3">
              <div className="flex items-center  gap-4">
              <div className="w-8 h-8 bg-[#FFEDD5] border-[0.5px] border-[#FDBA74] rounded-full flex items-center justify-center text-lg">
                <img src={meal.image} alt="Food Image" />
              </div>
             
              </div>
               <div className=" w-24">
                <h4 className="font-bold text-[#475569]">{meal.food}</h4>
              </div>
              <div>
                <p className="text-sm text-[#475569] font-medium">{meal.meal}</p>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-[#475569] font-medium">
              <p>{meal.calories}</p>
            </div>
            <div className="flex gap-6 text-sm text-[#475569] font-medium">
              <p>{meal.time}</p>
            </div>
            <div className="flex gap-6 text-sm text-[#475569] font-medium">
              <p>{meal.carbs}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
