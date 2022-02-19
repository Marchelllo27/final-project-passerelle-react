import * as React from "react";

import ProductsList from "./../components/ProductsList";
import "./sharedStyles.css"

const Dishes = props => {
  return (
    <>
      <h1 style={{ textAlign: "center" }} className="main-title-filter">
        Choisissez les plats selon vos préférences
      </h1>
      <ProductsList product="all-dishes" pluralProductWord="dishes" singularProductWord="dish"/>
    </>
  );
};

export default Dishes;
