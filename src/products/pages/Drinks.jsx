import * as React from "react";

import ProductsList from "../components/ProductsList";

const Drinks = props => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Choisissez les boissons selon vos préférences
      </h1>
      <ProductsList product="all-drinks" forWichProduct="drinks" />;
    </>
  );
};

export default Drinks;
