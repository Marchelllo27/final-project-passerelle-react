import * as React from "react";

import ProductsList from "../components/ProductsList";
const Desserts = props => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Choisissez les desserts selon vos préférences
      </h1>
      <ProductsList product="all-desserts" forWichProduct="desserts" />
    </>
  );
};

export default Desserts;
