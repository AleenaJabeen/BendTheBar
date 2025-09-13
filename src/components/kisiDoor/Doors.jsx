import React, { useState } from "react";
import DoorCard from "./DoorCard";
import UserList from "./UserList";

function Doors() {
  const doors = [
    { id: 1, name: "Kisi Door 1", totalUsers: 2 },
    { id: 2, name: "Kisi Door 2", totalUsers: 1 },
    { id: 3, name: "Kisi Door 3", totalUsers: 1 },
  ];

  const [selectedDoor, setSelectedDoor] = useState(doors[0].name);

  return (
    <div>
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-semibold text-[#000000] text-nowrap">
         Kisi Door
        </h2>
         <button
          className="gradient-bg text-[#FFFFFF] cursor-pointer font-semibold text-base px-4 py-2 rounded-full"
        >
          Create New Door
        </button>
      </div>
      {/* Door Cards */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 gap-3">
        {doors.map((door) => (
          <DoorCard
            key={door.id}
            door={door}
            isSelected={selectedDoor === door.name}
            onClick={() => setSelectedDoor(door.name)}
          />
        ))}
      </div>

      {/* User List */}
      <UserList selectedDoor={selectedDoor} />
    </div>
  );
}

export default Doors;
