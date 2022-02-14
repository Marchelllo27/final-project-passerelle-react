import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// import pages
import Accueil from "./accueil/pages/Accueil";
import Login from "./users/pages/Login";
import Signup from "./users/pages/Signup";
import MainHeader from "./shared/components/MainHeader";
import Dishes from "./products/pages/Dishes";
import Desserts from "./products/pages/Desserts";
import Drinks from "./products/pages/Drinks";
import Basket from "./orders/pages/Basket";
import Profile from "./users/pages/Profile";
// import components
import Footer from "./shared/components/Footer";
import ProductDescription from "./products/components/ProductDescription";

import AuthContext from "./shared/context/auth-context";
// import { AuthContextProvider } from "./shared/context/auth-context";

function App() {
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

  // const unsetAdmin = () => {
  //   setIsAdmin(false);
  // };

  const contextValue = {
    token: token,
    isAdmin: isAdmin,
    isLoggedIn: userIsLoggedIn,
    login,
    logout,
    setAdmin,
    // unsetAdmin,
  };

  let routes;
  if (userIsLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Accueil />
        </Route>
        <Route path="/dishes" exact>
          <Dishes />
        </Route>
        <Route path="/desserts" exact>
          <Desserts />
        </Route>
        <Route path="/drinks" exact>
          <Drinks />
        </Route>
        <Route path="/dishes/:id" exact>
          <ProductDescription productInUrl="dish" imgUrl="dishes" />
        </Route>
        <Route path="/desserts/:id" exact>
          <ProductDescription productInUrl="dessert" imgUrl="desserts" />
        </Route>
        <Route path="/drinks/:id" exact>
          <ProductDescription productInUrl="drink" imgUrl="drinks" />
        </Route>
        <Route path="/basket" exact>
          <Basket />
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Accueil />
        </Route>
        <Route path="/dishes" exact>
          <Dishes />
        </Route>
        <Route path="/desserts" exact>
          <Desserts />
        </Route>
        <Route path="/drinks" exact>
          <Drinks />
        </Route>
        <Route path="/dishes/:id" exact>
          <ProductDescription productInUrl="dish" imgUrl="dishes" />
        </Route>
        <Route path="/desserts/:id" exact>
          <ProductDescription productInUrl="dessert" imgUrl="desserts" />
        </Route>
        <Route path="/drinks/:id" exact>
          <ProductDescription productInUrl="drink" imgUrl="drinks" />
        </Route>
        <Route path="/basket" exact>
          <Basket />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

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
