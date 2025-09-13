import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  dashboard1,
  dashboard2,
  users1,
  users2,
  promo1,
  promo2,
  access1,
  access2,
  kisidoor1,
  kisidoor2,
  subscription1,
  subscription2,
  help,
  logout
} from "../assets";

function Sidebar() {
  const location = useLocation();
  const options = [
    {
      name: "Dashboard",
      path: "/dashboard",
      image: dashboard1,
      image2: dashboard2,
    },
    { name: "Users", path: "/users", image: users1, image2: users2 },
    {
      name: "Promo Codes",
      path: "/promo-codes",
      image: promo1,
      image2: promo2,
    },
    {
      name: "Access Control",
      path: "/access-control",
      image: access1,
      image2: access2,
    },
    {
      name: "Kisi Door",
      path: "/kisi-door",
      image: kisidoor1,
      image2: kisidoor2,
    },
    {
      name: "Subscription",
      path: "/subscription",
      image: subscription1,
      image2: subscription2,
    },
  ];

  return (
    <div className="h-full flex flex-col justify-between items-center py-6">
      {/* Top Menu */}
      <div className="w-full flex flex-col gap-4 items-center mt-24">
        {options.map((option, index) => {
          const isActive = location.pathname === option.path;

          return (
            <Link to={option.path} key={index}>
              <div className="w-full px-4">
                <div
                  className={`flex gap-4 justify-start items-center w-[210px] h-[35px] px-6 py-6 rounded-xl ${
                    isActive
                      ? "bg-gradient-to-r from-[#D93732] to-[#D93731] text-white"
                      : "text-[#475569]"
                  }`}
                >
                  <img
                    src={isActive ? option.image : option.image2}
                    alt={option.name}
                  />
                  <h2 className="font-[Manrope] text-base font-medium">
                    {option.name}
                  </h2>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom Menu */}
      <div className="w-full flex flex-col gap-4 items-center">
        <div className="w-[192px] h-[48px] flex items-center justify-start gap-4 px-4">
          <img src={help} alt="Help Icon" />
          <p className="font-[Manrope] text-sm font-semibold text-[#475569]">
            Help
          </p>
        </div>
        <hr className="text-[#E2E8F0] h-[1px] w-[192px]" />
        <div className="w-[192px] h-[48px] flex items-center justify-start gap-4 px-4">
          <img src={logout} alt="Logout Icon" />
          <p className="font-[Manrope] text-sm font-semibold text-[#475569]">
            Logout
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
