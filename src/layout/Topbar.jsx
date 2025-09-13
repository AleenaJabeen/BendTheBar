import React from "react";
import { searchIcon, notify, settings, profile } from "../assets";

function Topbar() {
  return (
    <div className="font-[Manrope] w-full flex justify-between items-center px-2">
        <div className="flex flex-col">
          <h3 className="text-[#64748B] text-[10px] font-normal">
            Good Morning
          </h3>
          <h2 className="font-semibold text-base text-[#475569]">
            Welcome Back!
          </h2>
        </div> 
      <div className="w-[70%] flex items-center justify-center gap-4">
        <div className="w-[85%] flex justify-center items-center gap-2 bg-[#F8FAFB] border border-[#F1F5F9] rounded-lg px-3">
          <img src={searchIcon} alt="Search Icon" className="w-[24px] h-[24px]"/>
          <input type="text" placeholder="Search" className="w-full focus:outline-none text-[#64748B] py-2" />
        </div>
        <div className="flex justify-center items-center gap-3">
          <img src={notify} alt="Notifications" className="w-[24px] h-[24px]"/>
          <img src={settings} alt="Settings" className="w-[24px] h-[24px]"/>
          <div>
            <img src={profile} alt="Profile" className="border border-[#0000001A] w-[40px] h-[40px] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
