import React, { useReducer } from "react";
import BasketContext from "./basket-context";

const defaultBasketState = {
  products: [],
  totalPrice: 0,
};

const basketReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalPrice =
      state.totalPrice + action.product.price * action.product.quantity;

    // we check if product is already in basket and we add just quantity of product but not a product entirely
    const existingProductIndex = state.products.findIndex(
      product => product.id === action.product.id
    );
    const existingProduct = state.products[existingProductIndex];

    let updatedProducts;

    if (existingProduct) {
      const updatedProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity + action.product.quantity,
      };
      updatedProducts = [...state.products];
      updatedProducts[existingProductIndex] = updatedProduct;
    } else {
      updatedProducts = state.products.concat(action.product);
    } //concat like push but create completely new array

    //we update state with new values
    return {
      products: updatedProducts,
      totalPrice: updatedTotalPrice,
    };
  }

  if (action.type === "REMOVE") {

    const productIndex = state.products.findIndex(product => product.id === action.id);
    const productToRemove = state.products[productIndex];

    let updatedProducts;
    if (productToRemove.quantity === 1) {
      updatedProducts = state.products.filter(product => product.id !== action.id)
    } else {
      const updatedProduct = {...productToRemove, quantity: productToRemove.quantity - 1}
      updatedProducts = [...state.products];
      updatedProducts[productIndex] = updatedProduct;
    }

    const updatedTotalPrice =
    state.totalPrice - productToRemove.price;

    return {
      products: updatedProducts,
      totalPrice: updatedTotalPrice
    }
  }

  return defaultBasketState;
};

const BasketProvider = props => {
  const [basketState, dispatchBasketAction] = useReducer(
    basketReducer,
    defaultBasketState
  );

  const addProductToCartHandler = product => {
    dispatchBasketAction({ type: "ADD", product: product });
  };

  const removeProductFromCartHandler = id => {
    dispatchBasketAction({ type: "REMOVE", id: id });
  };

  const basketContextValue = {
    products: basketState.products,
    totalPrice: basketState.totalPrice,
    addProduct: addProductToCartHandler,
    removeProduct: removeProductFromCartHandler,
  };

  return (
    <BasketContext.Provider value={basketContextValue}>
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
