import React, { useState, useEffect } from "react";

function SubscriptionDialogBox({ onClose, onSave, initialData = null, mode = "add" }) {
  const [formData, setFormData] = useState({
    name: "",
    monthlyPrice: "",
    yearlyPrice: "",
    description: "",
  });

  const [errors, setErrors] = useState({}); // store validation errors

  // Pre-fill if editing
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Subscription name is required.";
    if (!formData.monthlyPrice) newErrors.monthlyPrice = "Monthly price is required.";
    if (!formData.yearlyPrice) newErrors.yearlyPrice = "Yearly price is required.";
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSave(formData); // send back to parent
    onClose(); // close dialog
  };

  return (
    <div className="font-[Poppins] fixed inset-0 z-50 flex items-center justify-center bg-[#1F1F1F70] bg-opacity-80">
      <div className="bg-white md:w-[550px] w-[50vw] h-[80vh] rounded-[10px] p-[35px] shadow-xl relative flex flex-col overflow-y-scroll no-scrollbar">
        
        {/* Title */}
        <h2 className="text-2xl text-center text-[#000000] font-bold mb-4">
          {mode === "edit" ? "Update Subscription" : "Add Subscription"}
        </h2>

        {/* Name */}
        <label className="font-medium text-lg py-2">Subscription Name</label>
        <input
          type="text"
          name="name"
          placeholder="Subscription Name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full text-[#4A4A4A] focus:outline-none text-xs py-5 px-4 mb-1 rounded-[5px] border ${errors.name ? "border-red-500" : "border-[#D93732]"}`}
        />
        {errors.name && <p className="text-red-500 text-xs mb-2">{errors.name}</p>}

        {/* Monthly */}
        <label className="font-medium text-lg py-2">Monthly Price</label>
        <input
          type="number"
          name="monthlyPrice"
          placeholder="Monthly Price"
          value={formData.monthlyPrice}
          onChange={handleChange}
          className={`w-full text-[#4A4A4A] focus:outline-none text-xs py-5 px-4 mb-1 rounded-[5px] border ${errors.monthlyPrice ? "border-red-500" : "border-[#D93732]"}`}
        />
        {errors.monthlyPrice && <p className="text-red-500 text-xs mb-2">{errors.monthlyPrice}</p>}

        {/* Yearly */}
        <label className="font-medium text-lg py-2">Yearly Price</label>
        <input
          type="number"
          name="yearlyPrice"
          placeholder="Yearly Price"
          value={formData.yearlyPrice}
          onChange={handleChange}
          className={`w-full text-[#4A4A4A] focus:outline-none text-xs py-5 px-4 mb-1 rounded-[5px] border ${errors.yearlyPrice ? "border-red-500" : "border-[#D93732]"}`}
        />
        {errors.yearlyPrice && <p className="text-red-500 text-xs mb-2">{errors.yearlyPrice}</p>}

        {/* Description */}
        <label className="font-medium text-lg py-2">Description</label>
        <div className={`w-full py-4 px-4 mb-1 rounded-[5px] border ${errors.description ? "border-red-500" : "border-[#D93732]"}`}>
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full text-[#4A4A4A] block max-h-[163px] h-16 no-scrollbar focus:outline-none text-xs"
          />
        </div>
        {errors.description && <p className="text-red-500 text-xs mb-2">{errors.description}</p>}

        {/* Action buttons */}
        <div className="font-[Poppins] flex flex-col w-[80%] items-center gap-4 mx-auto mt-4">
          <button
            onClick={handleSubmit}
            className="cursor-pointer w-full p-4 text-[#FFFFFF] font-medium text-base gradient-bg text-white rounded-[5px]"
          >
            {mode === "edit" ? "Update Subscription" : "Add Subscription"}
          </button>
          <button
            onClick={onClose}
            className="cursor-pointer w-full p-4 bg-transparent gradient-text font-medium text-base border border-[#D93732] rounded-[5px]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionDialogBox;
