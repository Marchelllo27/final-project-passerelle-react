import * as React from "react";

import ProductsList from "./../components/ProductsList";

const Dishes = props => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Choisissez les plats selon vos préférences
      </h1>
      <ProductsList product="all-dishes" forWichProduct="dishes" />
    </>
  );
};

export default Dishes;
