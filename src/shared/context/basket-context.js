import React from "react";

const BasketContext = React.createContext({
  products: [],
  totalPrice: 0,
  addProduct: (product) => {},
  removeProduct: (id) => {},
});

export default BasketContext;