import React, { useState } from "react";
import PromoDialog from "./PromoDialogBox";
import { searchBtn, addIcon, deleteIcon, dropdown } from "../../assets";

const initialPromo = [
  {
    id: 1,
    userId: "#829777",
    name: "Willson",
    status: "In use",
    promoLimit: ["One-Time", "Multi"],
    promoCode: "Promo 123",
    expiryDate: "12/12/2025",
    usedBy: ["Bend the bar members only", "Other people not members"],
  },
  {
    id: 2,
    userId: "#829778",
    name: "Smith",
    status: "Expired",
    promoLimit: ["One-Time", "Multi"],
    promoCode: "Promo 456",
    expiryDate: "10/10/2025",
    usedBy: ["Bend the bar members only"],
  },
];

function PromoTable() {
  const [promo, setPromo] = useState(initialPromo);
  const [search, setSearch] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  // Delete promo
  const handleDelete = (id) => {
    setPromo(promo.filter((promoNo) => promoNo.id !== id));
  };

  // Toggle hide
  const handleAdd = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleSave = (newPromo) => {
    setPromo((prev) => [
      ...prev,
      { ...newPromo, id: prev.length + 1 }, // auto-generate ID
    ]);
  };

  // Handle promo limit change
  const handleLimitChange = (id, newLimit) => {
    setPromo((prev) =>
      prev.map((promoNo) =>
        promoNo.id === id ? { ...promoNo, selectedLimit: newLimit } : promoNo
      )
    );
  };

  const filteredPromo = promo.filter(
    (promoNo) =>
      promoNo.userId.toString().includes(search) ||
      promoNo.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-between items-center mt-2 pr-8">
        <h2 className="text-2xl font-semibold text-[#000000] text-nowrap">
          Promo Code List
        </h2>
        <button
          onClick={handleAdd}
          className="gradient-bg text-[#FFFFFF] cursor-pointer font-semibold text-base px-4 py-2 rounded-full"
        >
          Create New Promo
        </button>
      </div>
      <div className="font-[Poppins] rounded-[10px] bg-[#FFFFFF] mt-5">
        {/* Header */}
        <div className="flex lg:justify-end justify-center items-start mb-4 p-4 md:px-6 px-4">
          <div className="flex items-center border border-[#706D6D40] bg-[#FFFFFF]  rounded-[5px] px-3">
            <img src={searchBtn} alt="Search Icon" />
            <input
              type="text"
              placeholder="Ex : type by name or userId"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-3 text-[#0000006E] font-normal text-base py-2 w-[319px] focus:outline-none"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-scroll no-scrollbar">
          <table className="w-full text-nowrap border-collapse text-center mb-12">
            <thead className="xl:px-4 px-2">
              <tr className="font-[Poppins] gradient-bg px-4 text-sm font-semibold text-[#FFFFFF]">
                <th className="lg:px-8 py-4 px-2">SL</th>
                <th className="xl:p-4 px-2 py-4">PROMO CODE</th>
                <th className="xl:p-4 px-2 py-4">USER ID</th>
                <th className="xl:px-3 px-2 py-4">NAME</th>
                <th className="xl:p-4 px-2 py-4">EXPIRY DATE</th>
                <th className="xl:p-4 px-2 py-4">STATUS</th>
                <th className="xl:p-4 px-2 py-4">PROMO LIMIT</th>
                <th className="xl:p-4 px-2 py-4">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredPromo.map((promo, index) => (
                <tr key={promo.id} className={`text-sm `}>
                  <td className="px-8 py-4 font-semibold">{index + 1}</td>
                  <td className="p-4 font-normal">{promo.promoCode}</td>
                  <td className="p-3 py-4 font-normal">{promo.userId}</td>
                  <td className="p-4 font-normal">{promo.name}</td>
                  <td className="p-4 font-normal">{promo.expiryDate}</td>

                  {/* Status stays fixed text */}
                  <td className="font-medium  text-xs gradient-text">
                    <p className="bg-[#D9373126] w-[109px] h-[30px] rounded-full flex justify-center items-center">
                      {promo.status}
                    </p>
                  </td>
                  <td className="font-medium text-xs">
                    <div className="relative w-[109px] h-[30px] flex justify-center items-center gap-2 bg-[#D9373126] rounded-full">
                      <select
                        value={promo.selectedLimit || promo.promoLimit[0]}
                        onChange={(e) =>
                          handleLimitChange(promo.id, e.target.value)
                        }
                        className="px-3 py-1 w-full appearance-none bg-transparent gradient-text text-xs focus:outline-none rounded-full"
                      >
                        {promo.promoLimit.map((limit, index) => (
                          <option
                            key={index}
                            value={limit}
                            className="bg-[#D9373126] text-[#D93732] rounded-full border-none"
                          >
                            {limit}
                          </option>
                        ))}
                      </select>
                      <img
                        src={dropdown}
                        alt="Dropdown"
                        className="absolute right-3 w-[10px] h-[5px] pointer-events-none"
                      />
                    </div>
                  </td>

                  {/* Actions */}
                  <td>
                    <div className="flex items-center gap-2 relative">
                      {/* Hide Button */}
                      <button onClick={handleAdd}>
                        <div className="relative">
                          <img
                            src={addIcon}
                            alt="Hide"
                            className="cursor-pointer border border-[#E7104B] rounded-[5px] p-[5px] w-[26px] h-[26px]"
                          />
                        </div>
                      </button>

                      {/* Delete Button */}
                      <button onClick={() => handleDelete(promo.id)}>
                        <img
                          src={deleteIcon}
                          alt="Delete"
                          className="cursor-pointer border border-[#E7104B] rounded-[5px] p-[5px] w-[26px] h-[26px]"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {openDialog && <PromoDialog onClose={handleClose} onSave={handleSave} />}
    </>
  );
}

export default PromoTable;
