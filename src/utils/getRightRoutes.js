import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Accueil from "../accueil/pages/Accueil";
import ProductDescription from "../products/components/ProductDescription";
import BackDropSpinner from "../shared/UIElements/BackDropSpinner";
import UpdateProductPage from "../admin/pages/UpdateProductPage";
import AddProductPage from "../admin/pages/AddProductPage"

const Drinks = React.lazy(() => import("../products/pages/Drinks"));
const Dishes = React.lazy(() => import("../products/pages/Dishes"));
const Desserts = React.lazy(() => import("../products/pages/Desserts"));
const Profile = React.lazy(() => import("../users/pages/Profile"));
const Signup = React.lazy(() => import("../users/pages/Signup"));
const Login = React.lazy(() => import("../users/pages/Login"));

const getRightRoutes = (userIsLoggedIn, isAdmin) => {
  let routes;
  if (userIsLoggedIn && !isAdmin) {

    routes = (
      <Suspense fallback={<BackDropSpinner />}>
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
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    );
  } else if (userIsLoggedIn && isAdmin) {
    console.log("admin routes")
    routes = (
      <Suspense fallback={<BackDropSpinner />}>
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

          <Route path="/admin/product/update/:id" exact>
            <UpdateProductPage />
          </Route>

          <Route path="/admin/product/add" exact>
            <AddProductPage />
          </Route>

          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    );
  } else {

    routes = (
      <Suspense fallback={<BackDropSpinner />}>
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
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    );
  }

  return routes;
};

export default getRightRoutes;
