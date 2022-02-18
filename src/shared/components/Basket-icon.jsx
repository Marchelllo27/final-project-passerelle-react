import React, {useContext} from "react";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BasketContext from "../context/basket-context";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    background: "#78BF35",
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));



export default function CustomizedBadges(props) {
  const basketCtx = useContext(BasketContext);

  const numberOfBasketProducts = basketCtx.products.reduce((curNumber, product) => {
    return curNumber + product.quantity
  }, 0)

  return (
    <IconButton sx={{ mx: "1.5rem", margin: 0 }} aria-label="cart" onClick={props.onClick}>
      <StyledBadge badgeContent={numberOfBasketProducts} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
