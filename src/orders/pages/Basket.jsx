import * as React from "react";

import Box from "@mui/material/Box";

import classes from "./Basket.module.css";
import BasketModal from "../components/BasketModal";

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
  const productItems = [
    { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
    { id: "c2", name: "Soupe", amount: 4, price: 22.3 },
  ].map((item, index) => <li key={index}>{item.name}</li>);

  return (
    <BasketModal show={props.onShow} onBackdropClick={props.onClose}>
      <Box sx={style}>
        <ul>{productItems}</ul>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>35.62</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>Fermer</button>
          <button className={classes.button}>Commander</button>
        </div>
      </Box>
    </BasketModal>
  );
};

export default Basket;
