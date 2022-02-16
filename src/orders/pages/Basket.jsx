import React, { useContext } from "react";

import Box from "@mui/material/Box";

import classes from "./Basket.module.css";
import BasketModal from "../components/BasketModal";
import BasketContext from "../../shared/context/basket-context";
import BasketItem from "../components/BasketItem";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Basket = props => {
  const basketCtx = useContext(BasketContext);

  const totalPrice = `${basketCtx.totalPrice.toFixed(2)} €`;
  const hasProductsInBasket = basketCtx.products.length > 0;

  const productItemRemoveHandler = id => {

  }

  const addProductItemHandler = product => {

  }

  const productItems = basketCtx.products.map(product => (
    <BasketItem
      key={product.id}
      name={product.name}
      quantity={product.quantity}
      price={product.price}
      onRemove={productItemRemoveHandler.bind(null, product.id)}
      onAdd={addProductItemHandler.bind(null, product)}
    />
  ));

  return (
    <BasketModal show={props.onShow} onBackdropClick={props.onClose}>
      <Box sx={style}>
        <ul>{productItems}</ul>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalPrice}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Fermer
          </button>
          {hasProductsInBasket && (
            <button className={classes.button}>Commander</button>
          )}
        </div>
      </Box>
    </BasketModal>
  );
};

export default Basket;
