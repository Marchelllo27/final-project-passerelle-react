import React, { createContext, useCallback, useState } from "react";

const AuthContext = createContext({
  token: "",
  isAdmin: false,
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  setAdmin: () => {},
  unsetAdmin: () => {},
});

export const AuthContextProvider = props => {
  const [token, setToken] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const userIsLoggedIn = !!token;

  const login = token => {
    setToken(token);
  };

  const logout = () => {
    setToken(null);
    setIsAdmin(false);
  };

  const setAdmin = () => {
    setIsAdmin(true);
  };

  const unsetAdmin = () => {
    setIsAdmin(false);
  };
  const contextValue = {
    token: token,
    isAdmin: isAdmin,
    isLoggedIn: userIsLoggedIn,
    login,
    logout,
    setAdmin,
    unsetAdmin,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
