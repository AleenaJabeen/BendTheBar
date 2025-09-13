import React, { useState } from "react";
import { searchIcon2, actionBtn, downloadBtn,downArrow } from "../../assets";

const paymentInformation = [
  {
    id: 1,
    plan: "Lite Plan",
    user: "John",
    status: "ACTIVE",
    payment: "PAID",
    subscribedDate: "Aug 5,2025",
  },
  {
    id: 2,
    plan: "Lite Plan",
    user: "Selena",
    status: "EXPIRED",
    payment: "PENDING",
    subscribedDate: "Aug 5,2025",
  },
];

function Payment() {
  const [payment, setPayment] = useState(paymentInformation);
  const [search, setSearch] = useState("");

  const filteredPayment = payment.filter((paymentInfo) =>
    paymentInfo.user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="font-[Poppins] rounded-[10px] bg-[#FFFFFF] mt-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between  lg:items-center mb-4 p-4 md:px-6 px-4">
        <h2 className="text-lg font-medium text-[#000000] text-nowrap pl-4">
          Payment Information
        </h2>
        <div className="flex items-center gap-2">
        <div className="flex items-center justify-between border border-[#706D6D40] bg-[#FFFFFF]  rounded-[5px]">
          <input
            type="text"
            placeholder="Ex : type by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 text-[#000000CC] font-normal text-base py-2 lg:w-[319px] w-48 focus:outline-none"
          />
          <div className="w-12 h-full   py-3 gradient-bg flex justify-center items-center rounded-tr-[5px] rounded-br-[5px]">
            <img src={searchIcon2} alt="Search Icon" />
          </div>
        </div>
        <div><button className="flex items-center gap-3 cursor-pointer border border-[#D93732] rounded-[5px] h-[44px] px-3 gradient-text tex-base">
          <img src={downloadBtn} alt="Download" />
          <p>Export</p>
          <img src={downArrow} alt="Dropdown arrow" />
          </button></div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-scroll no-scrollbar">
        <table className="w-full text-nowrap border-collapse text-center mb-12">
          <thead className="xl:px-4 px-2">
            <tr className="font-[Poppins] gradient-bg px-4 text-sm font-semibold text-[#FFFFFF]">
              <td className="lg:px-8 py-4 px-2">SL</td>
              <td className="xl:p-4 px-2 py-4">USER</td>
              <td className="xl:p-4 px-2 py-4">PLAN</td>
              <td className="xl:px-3 px-2 py-4">DATE SUBSCRIBED</td>
              <td className="xl:p-4 px-2 py-4">PAYMENT</td>
              <td className="xl:p-4 px-2 py-4">STATUS</td>
              <td className="xl:p-4 px-2 py-4">ACTIONS</td>
            </tr>
          </thead>
          <tbody>
            {filteredPayment.map((payment, index) => (
              <tr
                key={payment.id}
                className={`text-sm text-center ${
                  payment.hidden ? "line-through opacity-50" : ""
                }`}
              >
                <td className="px-8 py-4 font-semibold">{index + 1}</td>
                <td className="p-4 font-normal">{payment.user}</td>
                <td className="p-3 py-4 font-normal">{payment.plan}</td>
                <td className="p-4 font-normal">{payment.subscribedDate}</td>
                <td className="font-medium   text-xs text-[#D93732] ">
                  <p className="bg-[#FFECEC]  w-[109px] h-[30px] mx-auto rounded-full flex justify-center items-center">
                    {payment.payment}
                  </p>
                </td>
                <td className="font-medium mt-3  text-xs text-[#D93732]">
                  <p className="bg-[#FFECEC] w-[109px] h-[30px] mx-auto rounded-full flex justify-center items-center">
                    {payment.status}
                  </p>
                </td>
                <td>
                  <div className="flex justify-center items-center gap-2">
                    <button onClick={() => handleDelete(payment.id)}>
                      <img
                        src={actionBtn}
                        alt="Delete"
                        className="cursor-pointer rounded-[5px] p-[5px] w-[26px] h-[26px]"
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
  );
}

export default Payment;
