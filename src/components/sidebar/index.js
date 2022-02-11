import React from "react";
import useUser from "../../hooks/use-user";
import Suggestions from "./suggestions";
import User from "./user";

export default function Sidebar() {
  const {
    user: { fullName, username, userId },
  } = useUser();
  //console.log(username, fullName);

  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestions userId={userId} />
    </div>
  );
}
