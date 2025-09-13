import React, { useState } from "react";
import PromoDialog from "../promo/PromoDialogBox";
import { searchBtn, dateIcon } from "../../assets";


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
const initialControl = [
  {
    id: 1,
    gate:"Gate No.01",
    username: "Willson",
    status: "Open",
    date: "12/12/2025",
    time:"23:00:00 AM"
  },
  {
    id: 2,
    gate:"Gate No.02",
    username: "Johney",
    status: "Close",
    date: "11/12/2025",
    time:"23:00:00 AM"
  }
];

function AccessControlReport() {
      const [promo, setPromo] = useState(initialPromo);
          const [control, setControl] = useState(initialControl);
const [nameSearch, setNameSearch] = useState("");
const [dateSearch, setDateSearch] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  
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



// helper: convert stored date (various formats) -> local YYYY-MM-DD
const parseControlDateToLocalYYYYMMDD = (raw) => {
  if (!raw) return "";

  let d;
  if (raw instanceof Date) {
    d = raw;
  } else if (typeof raw === "number" || /^\d+$/.test(String(raw))) {
    d = new Date(Number(raw));
  } else if (/^\d{4}-\d{2}-\d{2}/.test(raw)) {
    // ISO-ish (yyyy-mm-dd or full ISO)
    d = new Date(raw);
  } else if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(raw)) {
    // dd/mm/yyyy
    const [day, month, year] = raw.split("/");
    d = new Date(Number(year), Number(month) - 1, Number(day));
  } else {
    d = new Date(raw); // fallback
  }

  if (isNaN(d)) return "";
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

// helper: normalize the user's date search to YYYY-MM-DD
const normalizeSearchDate = (s) => {
  if (!s) return "";
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s; // already yyyy-mm-dd (from <input type="date" />)
  if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(s)) {
    const [day, month, year] = s.split("/");
    return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }
  return s; // fallback (no change)
};

// inside your component where you filter:
const normalizedDateSearch = normalizeSearchDate(dateSearch);

const filteredcontrol = control.filter((controlNo) => {
  const controlDate = parseControlDateToLocalYYYYMMDD(controlNo.date); // local YYYY-MM-DD
  const matchesName = controlNo.username
    .toLowerCase()
    .includes(nameSearch.toLowerCase());

  const matchesDate = normalizedDateSearch ? controlDate === normalizedDateSearch : true;

  return matchesName && matchesDate;
});




  return (
    <>
      <div className="flex justify-between items-center mt-2 pr-8">
        <h2 className="text-2xl font-semibold text-[#000000] text-nowrap">
       Membership & Access Control
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
       <div className="flex justify-between items-start mb-4 p-4 md:px-6 px-4"> 
  {/* Search by name */}
  <div className="flex items-center border border-[#706D6D40] bg-[#FFFFFF] rounded-[5px] px-3">
    <img src={searchBtn} alt="Search Icon" />
    <input
      type="text"
      placeholder="Ex : type by name"
      value={nameSearch}
      onChange={(e) => setNameSearch(e.target.value)}
      className="px-3 text-[#0000006E] font-normal text-base py-2 w-[319px] focus:outline-none"
    />
  </div>

  {/* Search by date */}
 <div className="flex items-center border border-[#706D6D40] bg-[#FFFFFF] rounded-[5px] px-3 relative">
  {/* Custom date icon */}
  <img
    src={dateIcon}
    alt="Search By Date"
    className="cursor-pointer"
    onClick={() => document.getElementById("hiddenDateInput").showPicker()} // 👈 triggers calendar
  />

  {/* Date input (no default icon) */}
  <input
    type="date"
    id="hiddenDateInput"
    placeholder="Search by date"
    value={dateSearch}
    onChange={(e) => setDateSearch(e.target.value)}
    className="px-3 text-[#0000006E] font-normal  text-base py-2 w-[319px] focus:outline-none appearance-none [&::-webkit-calendar-picker-indicator]:hidden" 
  />
</div>

</div>


        {/* Table */}
        <div className="overflow-x-scroll no-scrollbar">
          <table className="w-full text-nowrap border-collapse text-center mb-12">
            <thead className="xl:px-4 px-2">
              <tr className="font-[Poppins] gradient-bg px-4 text-sm font-semibold  text-[#FFFFFF]">
                <td className="lg:px-8 py-4 px-2">SL</td>
                <td className="xl:p-4 px-2 py-4">GATE</td>
                <td className="xl:p-4 px-2 py-4">USERNAME</td>
                <td className="xl:px-3 px-2 py-4">TIME</td>
                <td className="xl:p-4 px-2 py-4">DATE</td>
                <td className="xl:p-4 px-2 py-4">STATUS</td>
              </tr>
            </thead>
            <tbody>
              {filteredcontrol.map((control, index) => (
                <tr key={control.id} className={`text-sm `}>
                  <td className="px-8 py-4 font-semibold">{index + 1}</td>
                  <td className="p-4 font-normal">{control.gate}</td>
                  <td className="p-3 py-4 font-normal">{control.username}</td>
                  <td className="p-4 font-normal">{control.time}</td>
                  <td className="p-4 font-normal">{control.date}</td>

                  {/* Status stays fixed text */}
                  <td className="font-medium  text-xs gradient-text">
                      {control.status}
              
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

export default AccessControlReport;
