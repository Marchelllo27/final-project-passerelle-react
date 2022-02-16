import { createContext } from "react";

const AuthContext = createContext({
  token: "",
  isAdmin: false,
  isLoggedIn: false,
  showSuccess: false,
  showSuccessModal: () => {},
  hideSuccessModal: () => {},
  login: token => {},
  logout: () => {},
  setAdmin: () => {},
});

export default AuthContext;
