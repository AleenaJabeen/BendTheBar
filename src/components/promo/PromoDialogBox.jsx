import React, { useState } from "react";
import { dropdown } from "../../assets";

function PromoDialog({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    promoCode: "Promo 123",
    userId: "#12345",
    name: "John",
    expiryDate: "",
    status: "In use",
    promoLimit: ["One-Time", "Multi"],
    selectedLimit: "One-Time",
    usedBy: [], // <-- now array
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle multi-select for usedBy
    if (name === "usedBy") {
      const options = Array.from(e.target.selectedOptions, (opt) => opt.value);
      setFormData({ ...formData, usedBy: options });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = () => {
    onSave(formData); // send back to parent
    onClose(); // close dialog
  };

  return (
    <div className="font-[Poppins] fixed inset-0 z-50 flex items-center justify-center bg-[#1F1F1F70] bg-opacity-80">
      <div className="bg-white max-w-[550px] xl:w-[60vw] md:w-[75vw] w-[85vw] h-[70vh] rounded-[10px] p-[35px] shadow-xl relative flex flex-col overflow-y-scroll no-scrollbar">
        <h2 className="text-2xl text-center text-[#000000] font-bold mb-4">
          Add Promo
        </h2>

        {/* Promo Code */}
        <label htmlFor="promoCode" className="font-medium text-lg py-2">
          Promo Code
        </label>
        <input
          type="text"
          name="promoCode"
          placeholder="Promo Code"
          value={formData.promoCode}
          onChange={handleChange}
          className="w-full text-[#4A4A4A] focus:outline-none text-xs py-5 border border-[#D93732] px-4 mb-3 rounded-[5px]"
        />

        {/* Expiry Date */}
        <label htmlFor="expiryDate" className="font-medium text-lg py-2">
          Expiry Date
        </label>
        <input
          type="date"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          className="w-full border text-xs border-[#D93732] text-[#4A4A4A] focus:outline-none px-4 py-5 mb-3 rounded-[5px]"
        />

        {/* Used By (Multi-select dropdown) */}
        <label htmlFor="usedBy" className="font-medium text-lg py-2">
          Used By
        </label>
        <div className="relative mb-3 text-xs">
          <select
            name="usedBy"
            value={formData.usedBy}
            onChange={handleChange}
            className="w-full border border-[#D93732] px-4 py-5 text-[#4A4A4A] focus:outline-none rounded-[5px] pr-8 appearance-none"
          >
            <option value="Bend the bar members only">
              Bend the bar members only
            </option>
            <option value="Other people not members">
              Other people not members
            </option>
            <option value="Everyone">Everyone</option>
          </select>
          <img
            src={dropdown}
            alt="Dropdown"
            className="absolute right-3 top-6 w-[16px] h-[8px] pointer-events-none"
          />
        </div>

        {/* Action buttons */}
        <div className="flex flex-col w-[80%] items-center gap-4 mx-auto mt-12">
          <button
            onClick={handleSubmit}
            className="cursor-pointer w-full p-4 text-[#FFFFFF] font-medium text-lg gradient-bg text-white rounded-[5px]"
          >
            Add Promo Code
          </button>
          <button
            onClick={onClose}
            className="cursor-pointer w-full p-4 bg-transparent gradient-text font-medium text-lg border border-[#D93732] rounded-[5px]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default PromoDialog;
