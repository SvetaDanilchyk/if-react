import React, { useContext } from "react";

import "./Dropdown.css"; 

//context
import { AuthContext } from "../../context/Auth.context";

export const Dropdown = () => {
  const { logOut } = useContext(AuthContext); 

  return (
    <div  onClick={logOut} className="dropdown dropdown-menu">
     Sign out
    </div>
  );
};