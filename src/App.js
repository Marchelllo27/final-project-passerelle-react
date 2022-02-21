import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import MainHeader from "./shared/components/MainHeader";
import Footer from "./shared/components/Footer";
import AuthContext from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import getRightRoutes from "./utils/getRightRoutes";
import Basket from "./orders/pages/Basket";
import BasketProvider from "./shared/context/basketProvider";

function App() {
  const [basketIsShown, setBasketIsShown] = useState(false);
  const { contextValue, userIsLoggedIn, isAdmin } = useAuth();

  const showBasketHandler = () => {
    setBasketIsShown(true);
  };

  const hideBasketHandler = () => {
    setBasketIsShown(false);
  };

  const routes = getRightRoutes(userIsLoggedIn, isAdmin);

  return (
    <BrowserRouter>
      <AuthContext.Provider value={contextValue}>
        <BasketProvider>
        <MainHeader onShowBasket={showBasketHandler}/>
        {basketIsShown && <Basket onShow={basketIsShown} onClose={hideBasketHandler}/>}
        <main>{routes}</main>
        <Footer />
        </BasketProvider>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
