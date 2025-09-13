import React, { useState } from "react";
import { searchBtn, hideIcon, deleteIcon,avatar } from "../../assets";
import UserDetails from "./UserDetails";

const initialUsers = [
  {
    id: 1,
    membershipId: "#829777",
    name:"Thomas Fletcher",
    gender: "Male",
    email: "john@gmail.com",
    status: "SUBSCRIBER",
    location:"Sydney, Australia",
    kisiDoor: "Door 1",
      weight:100,
      height:6.5,
      calories:500,
      weightLoss:25,
      age:34,
                subscription:"Basic Monthly Plan",
progress:80,
    registerDate: "July 23,2025",
    hidden: false,
    profile:avatar
  },
  {
    id: 2,
    membershipId: "#829778",
      name:"Thomas Fletcher",
    gender: "Male",
     location:"Sydney, Australia",
    email: "james@gmail.com",
    status: "SUBSCRIBER",
    weight:75,
    height:6.5,
      calories:500,
    progress:80,
          age:34,
          weightLoss:15,
          subscription:"Basic Monthly Plan",
    kisiDoor: "Door 1",
    registerDate: "Aug 5,2025",
    hidden: false,
    profile:avatar
  },
];



function UsersTable() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
   const [selectedUser, setSelectedUser] = useState(null);

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
      user.membershipId.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );
  if (selectedUser) {
    return (
      <UserDetails user={selectedUser} goBack={() => setSelectedUser(null)} />
    );
  }

  return (
    <div className="font-[Poppins] rounded-[10px] bg-[#FFFFFF] mt-5">
      {/* Header */}
      <div className="flex justify-between items-start mb-4 p-4 md:px-6 px-4">
        <h2 className="text-2xl font-semibold text-[#000000] text-nowrap">
          Users
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
          <thead className="xl:px-4 px-2">
            <tr className="font-[Poppins] gradient-bg px-4 text-sm font-semibold text-[#FFFFFF]">
              <td className="lg:px-8 py-4 px-2">SL</td>
              <td className="xl:p-4 px-2 py-4">REGISTERED ON</td>
              <td className="xl:p-4 px-2 py-4">MEMBERSHIP ID</td>
              <td className="xl:px-3 px-2 py-4">GENDER</td>
              <td className="xl:p-4 px-2 py-4">EMAIL</td>
              <td className="xl:p-4 px-2 py-4">STATUS</td>
              <td className="xl:p-4 px-2 py-4">KISI DOOR</td>
              <td className="xl:p-4 px-2 py-4">ACTIONS</td>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr
              key={user.id}
                onClick={() => setSelectedUser(user)}
             
                className={`text-sm cursor-pointer ${
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
      </div>
    </div>
  );
}

export default UsersTable;
