import { useState, useCallback, useEffect } from "react";

let logoutTimer;

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [isAdmin, setIsAdmin] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const showSuccessModal = useCallback(() => {
    setShowSuccess(true);
  }, []);

  const hideSuccessModal = useCallback(() => {
    setShowSuccess(false);
  }, []);

  const userIsLoggedIn = !!token; //!!transform truthy or falsy value in true or false

  const setAdmin = useCallback(() => {
    setIsAdmin(true);
  }, []);

  const login = useCallback((userToken, role, existingExpirationDate) => {
    if (role === "ADMIN") {
      setAdmin();
    }
    setToken(userToken);
    // generate current date + 1hour      curDate in millisec  second min  hour
    const tokenExpirDate =
      existingExpirationDate || new Date(new Date().getTime() + 1000 * 60 * 60); //valid 1hour
    setTokenExpirationDate(tokenExpirDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        token: userToken,
        role: role,
        expiration: tokenExpirDate.toISOString(),
      })
      // toISO to not lose any data during stringify and parse back to new Date object
    );
  }, [setAdmin]);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setIsAdmin(false);
    localStorage.removeItem("userData");
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
      storedData.role &&
      new Date(storedData.expiration) > new Date()
      // check if expiration date is grater than current date
    ) {
      login(storedData.token, storedData.role, new Date(storedData.expiration));
    }
  }, [login]);

  const contextValue = {
    token: token,
    isAdmin: isAdmin,
    isLoggedIn: userIsLoggedIn,
    showSuccess,
    showSuccessModal,
    hideSuccessModal,
    login,
    logout,
    setAdmin,
  };

  return {
    token,
    userIsLoggedIn,
    login,
    logout,
    contextValue,
  };
};
