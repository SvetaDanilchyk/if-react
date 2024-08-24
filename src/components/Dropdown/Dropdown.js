import React from "react";
import { useDispatch } from "react-redux";

import "./Dropdown.css";

//store
import { logout } from "../../store/slices/auth.slice";
import { resetSearchResults } from "../../store/slices/search.slice";

export const Dropdown = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetSearchResults());
  };

  return (
    <div onClick={handleLogout} className="dropdown dropdown-menu">
      Sign out
    </div>
  );
};
