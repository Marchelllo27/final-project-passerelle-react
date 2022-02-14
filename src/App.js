import React, { useCallback, useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

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
// import context
import AuthContext from "./shared/context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;
  if (isLoggedIn) {
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
        <Redirect to="/"></Redirect>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Accueil />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/login" exact>
          <Login />
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
        <Redirect to="/"></Redirect>
      </Switch>
    );
  }

  return (
    <BrowserRouter>
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
        <MainHeader />
        <main>{routes}</main>
        <Footer />
    </AuthContext.Provider>
      </BrowserRouter>
  );
}

export default App;
