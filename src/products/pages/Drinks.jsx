import * as React from "react";

import ProductsList from "../components/ProductsList";
import "./sharedStyles.css"

const Drinks = props => {
  return (
    <>
      <h1 style={{ textAlign: "center" }} className="main-title-filter">
        Choisissez les boissons selon vos préférences
      </h1>
      <ProductsList product="all-drinks" pluralProductWord="drinks" singularProductWord="drink"/>
    </>
  );
};

export default Drinks;
