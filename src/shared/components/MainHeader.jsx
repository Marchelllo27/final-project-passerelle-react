import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// MUI
import {Box, Tooltip } from "@mui/material";

import AuthContext from "../context/auth-context";
import BasketContext from "../context/basket-context";
import BasketIcon from "./Basket-icon"
import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import AccountIcon from "./Account-Icon";


const MainHeader = props => {
  const [basketIsHighlighted, setBasketIsHighlighted] = useState(false);
  const authCtx = useContext(AuthContext);
  const basketCtx = useContext(BasketContext);

  const {products} = basketCtx;

  useEffect(() => {
    if (products.length === 0) {
      return
    }
    setBasketIsHighlighted(true);

    const timer = setTimeout(() => {
      setBasketIsHighlighted(false)
    }, 300)

    // it's not required here but still good practice clean up side effects like timer 
    //because if element was removed timer will be ongoing
    return () => {
      clearTimeout(timer);
    }

  }, [products]);

  return (
    <header className={classes.mainHeader}>
      {authCtx.isAdmin && authCtx.isLoggedIn && (
        <p
          style={{
            color: "red",
            position: "absolute",
            left: "7rem",
            top: "2.8rem",
          }}
        >
          ADMIN
        </p>
      )}

      {authCtx.isLoggedIn && !authCtx.isAdmin && (
        <p
          style={{
            color: "red",
            position: "absolute",
            left: "7rem",
            top: "2.8rem",
          }}
        >
          USER
        </p>
      )}

      <Link className={classes.logoBox} to="/">
        <img src="/logo.png" alt="Eat Smart logo" />
      </Link>
      <Navigation />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Tooltip title="Panier" arrow>
          <div className={ basketIsHighlighted &&  `${classes.bump}`}>
            <BasketIcon onClick={props.onShowBasket} />
          </div>
        </Tooltip>

        {authCtx.isLoggedIn && (
         <AccountIcon onLogout={authCtx.logout}/>
        )}
      </Box>
    </header>
  );
};

export default MainHeader;
