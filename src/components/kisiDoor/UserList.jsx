import React, { useState } from "react";
import { searchBtn, hideIcon, deleteIcon } from "../../assets";

const initialUsers = [
  {
    id: 1,
    membershipId: "#829777",
    gender: "Male",
    email: "john@gmail.com",
    status: "SUBSCRIBER",
    kisiDoor: "Kisi Door 1",
    registerDate: "July 23, 2023",
    hidden: false,
  },
  {
    id: 2,
    membershipId: "#829778",
    gender: "Male",
    email: "james@gmail.com",
    status: "SUBSCRIBER",
    kisiDoor: "Kisi Door 1",
    registerDate: "Aug 5, 2023",
    hidden: false,
  },
  {
    id: 3,
    membershipId: "#829779",
    gender: "Female",
    email: "anna@gmail.com",
    status: "SUBSCRIBER",
    kisiDoor: "Kisi Door 2",
    registerDate: "Sep 1, 2023",
    hidden: false,
  },
  {
    id: 4,
    membershipId: "#829780",
    gender: "Male",
    email: "mark@gmail.com",
    status: "SUBSCRIBER",
    kisiDoor: "Kisi Door 3",
    registerDate: "Sep 10, 2023",
    hidden: false,
  },
];

function UserList({ selectedDoor }) {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");

  // Delete user
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Toggle hide
  const handleHide = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, hidden: !user.hidden } : user
      )
    );
  };

  const filteredUsers = users.filter(
    (user) =>
      user.kisiDoor === selectedDoor &&
      (user.membershipId.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="font-[Poppins] rounded-[10px] bg-[#FFFFFF] mt-5 h-[660px]">
      {/* Header */}
      <div className="flex lg:justify-between justify-center lg:items-start items-start lg:gap-0 gap-2 lg:flex-row flex-col   mb-4 p-4 md:px-6 px-4">
        <h2 className="text-2xl font-semibold text-[#000000] text-nowrap">
          {selectedDoor} User List
        </h2>
        <div className="flex items-center border border-[#706D6D40] bg-[#FFFFFF]  rounded-[5px] px-3">
          <img src={searchBtn} alt="Search Icon" />
          <input
            type="text"
            placeholder="Ex : type by email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 text-[#0000006E] font-normal text-base py-2 lg:w-[319px] w-48 focus:outline-none"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-scroll no-scrollbar">
        <table className="w-full text-nowrap border-collapse text-center mb-12">
          <thead>
            <tr className="gradient-bg text-sm font-semibold text-[#FFFFFF]">
              <th className="lg:px-8 py-4 px-2">SL</th>
              <th className="xl:p-4 px-2 py-4">REGISTERED ON</th>
              <th className="xl:p-4 px-2 py-4">MEMBERSHIP ID</th>
              <th className="xl:px-3 px-2 py-4">GENDER</th>
              <th className="xl:p-4 px-2 py-4">EMAIL</th>
              <th className="xl:p-4 px-2 py-4">STATUS</th>
              <th className="xl:p-4 px-2 py-4">KISI DOOR</th>
              <th className="xl:p-4 px-2 py-4">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr
                key={user.id}
                className={`text-sm ${
                  user.hidden ? "line-through opacity-50" : ""
                }`}
              >
                <td className="px-8 py-4 font-semibold">{index + 1}</td>
                <td className="p-4 font-normal">{user.registerDate}</td>
                <td className="p-3 py-4 font-normal">{user.membershipId}</td>
                <td className="p-4 font-normal">{user.gender}</td>
                <td className="p-4 font-normal">{user.email}</td>
                <td className="p-4 font-medium text-xs gradient-text">
                  {user.status}
                </td>
                <td className="p-4 font-medium text-xs gradient-text">
                  {user.kisiDoor}
                </td>
                <td>
                  <div className="flex items-center gap-2 relative">
                    {/* Hide Button */}
                    <button onClick={() => handleHide(user.id)}>
                      <div className="relative">
                        <img
                          src={hideIcon}
                          alt="Hide"
                          className="cursor-pointer border border-[#E7104B] rounded-[5px] p-[5px] w-[26px] h-[26px]"
                        />
                        {user.hidden && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[20px] h-[2px] bg-red-600 rotate-45"></div>
                          </div>
                        )}
                      </div>
                    </button>

                    {/* Delete Button */}
                    <button onClick={() => handleDelete(user.id)}>
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
        {filteredUsers.length === 0 && (
          <p className="text-center py-4 text-gray-500">
            No users found for {selectedDoor}.
          </p>
        )}
      </div>
    </div>
  );
}

export default UserList;
