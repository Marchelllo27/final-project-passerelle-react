import React, { createContext, useCallback, useState } from "react";

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = props => {
  const [token, setToken] = useState(null);

  const userIsLoggedIn = !!token; 
  // const userIsLoggedIn = true; 
  const login = useCallback(token => {
    setToken(token);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
  }, []);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: login,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
