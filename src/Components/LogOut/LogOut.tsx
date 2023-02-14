import React from "react";
import { LogOut } from "./LogOut.elements";

export default function Logoff() {

  const logOut = () => {
    window.localStorage.removeItem("token");
    window.location.href = "http://opara-v.space/playerapp/";

  };

  return <>{ <LogOut onClick={logOut}>Logout</LogOut>}</>;
}
