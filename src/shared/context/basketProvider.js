import React, { useReducer } from "react";
import BasketContext from "./basket-context";

const defaultBasketState = {
  products: [],
  totalPrice: 0,
};

const basketReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedProducts = state.products.concat(action.product);
    const updatedTotalPrice =
      state.totalPrice + action.product.price * action.product.quantity;
      return {
        products: updatedProducts,
        totalPrice: updatedTotalPrice,
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
