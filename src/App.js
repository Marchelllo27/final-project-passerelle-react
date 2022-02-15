import React from "react";
import { BrowserRouter } from "react-router-dom";

// import pages
// import Accueil from "./accueil/pages/Accueil";
// import Login from "./users/pages/Login";
// import Signup from "./users/pages/Signup";
// import Dishes from "./products/pages/Dishes";
// import Desserts from "./products/pages/Desserts";
// import Drinks from "./products/pages/Drinks";
// import Basket from "./orders/pages/Basket";
// import Profile from "./users/pages/Profile";
// import components
import MainHeader from "./shared/components/MainHeader";
import Footer from "./shared/components/Footer";
// import ProductDescription from "./products/components/ProductDescription";

import AuthContext from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import getRightRoutes from "./utils/getRightRoutes";


function App() {
  
  const {token, login, logout, contextValue, userIsLoggedIn} = useAuth();

  const routes = getRightRoutes(userIsLoggedIn);

  return (
    <BrowserRouter>
      <AuthContext.Provider value={contextValue}>
        <MainHeader />
        <main>{routes}</main>
        <Footer />
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
