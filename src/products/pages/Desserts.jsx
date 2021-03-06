import * as React from "react";

import ProductsList from "../components/ProductsList";
import "./sharedStyles.css"

const Desserts = props => {
  return (
    <>
      <h1 style={{ textAlign: "center" }} className="main-title-filter">
        Choisissez les desserts selon vos préférences
      </h1>
      <ProductsList product="all-desserts" pluralProductWord="desserts" singularProductWord="dessert"/>
    </>
  );
};

export default Desserts;
