import { useState, useCallback, useEffect } from "react";

let logoutTimer;

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [isAdmin, setIsAdmin] = useState(false);

  const userIsLoggedIn = !!token; //!!transform truthy or falsy value in true or false

  const login = useCallback((userToken, existingExpirationDate) => {
    setToken(userToken);
    // generate current date + 1hour      curDate in millisec  second min  hour
    const tokenExpirDate =
      existingExpirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        token: userToken,
        expiration: tokenExpirDate.toISOString(),
      })
      // toISO to not lose any data during stringify and parse back to new Date object
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setIsAdmin(false);
    localStorage.removeItem("userData");
  }, []);

  const setAdmin = useCallback(() => {
    setIsAdmin(true);
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
      // check if expiration date is grater than current date
    ) {
      console.log("hoorey");
      login(storedData.token, new Date(storedData.expiration));
    }
  }, [login]);

  const contextValue = {
    token: token,
    isAdmin: isAdmin,
    isLoggedIn: userIsLoggedIn,
    login,
    logout,
    setAdmin,
  };


  return {
    token,
    userIsLoggedIn,
    login,
    logout,
    contextValue
  }

};
