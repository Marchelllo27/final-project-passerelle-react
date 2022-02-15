import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Accueil from "../accueil/pages/Accueil";
import Drinks from "../products/pages/Drinks";
import Dishes from "../products/pages/Dishes";
import Desserts from "../products/pages/Desserts";
import ProductDescription from "../products/components/ProductDescription";
import Basket from "../orders/pages/Basket";
import Profile from "../users/pages/Profile";
import Signup from "../users/pages/Signup";
import Login from "../users/pages/Login"

const getRightRoutes = (userIsLoggedIn) => {
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
    )
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
    )
  }


  return routes;
}

export default getRightRoutes;