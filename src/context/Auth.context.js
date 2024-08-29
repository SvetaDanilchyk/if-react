import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//routers
import { PATH } from "../constans/paths";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const logIn = (email, password) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {
      setIsAuthenticated(true);
      setUser(savedUser);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  const logOut = () => {
    setIsAuthenticated(false);
    setUser(null);
    navigate(PATH.login);
  };

  const register = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setIsAuthenticated(true);
    setUser(userData);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, logIn, logOut, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
