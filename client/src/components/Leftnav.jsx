import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
function Leftnav() {
  return (
    <div className="p-1 flex flex-col justify-around rounded-full h-[200px] bg-white absolute left-8">
      <MessageIcon
        style={{ fontSize: "2.5rem", color: "#CBC6C6", margin: "0 12px" }}
      />
      <SearchIcon
        style={{ fontSize: "2.5rem", color: "#CBC6C6", margin: "0 12px" }}
      />
      <NotificationsIcon
        style={{ fontSize: "2.5rem", color: "#CBC6C6", margin: "0 12px" }}
      />
    </div>
  );
}

export default Leftnav;
