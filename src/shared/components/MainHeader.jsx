import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// MUI
import {Box, Tooltip } from "@mui/material";

import AuthContext from "../context/auth-context";
import BasketContext from "../context/basket-context";
import BasketIcon from "./Basket-icon";
import Navigation from "./Navigation";
import AccountIcon from "./Account-Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import MobileMenu from "./MobileMenu";
import BackDrop from "../UIElements/BackDrop"
import classes from "./MainHeader.module.css";

const MainHeader = props => {
  const [basketIsHighlighted, setBasketIsHighlighted] = useState(false);
  const [mobileMenuOpen, setMobileMenu] = useState(false);
  const authCtx = useContext(AuthContext);
  const basketCtx = useContext(BasketContext);

  const { products } = basketCtx;

  useEffect(() => {
    if (products.length === 0) {
      return;
    }
    setBasketIsHighlighted(true);

    const timer = setTimeout(() => {
      setBasketIsHighlighted(false);
    }, 300);

    // it's not required here but still good practice clean up side effects like timer
    //because if element was removed timer will be ongoing
    return () => {
      clearTimeout(timer);
    };
  }, [products]);

  const onMobileMenuHandler = () => {
    setMobileMenu(state => !state);
  };

  return (
    <>
      <BackDrop />
      {mobileMenuOpen && (
        <MobileMenu>
          <nav></nav>
        </MobileMenu>
      )}

      <header className={classes.mainHeader}>
        <Link className={classes.logoBox} to="/">
          <img src="/logo.png" alt="Eat Smart logo" />
        </Link>
        <Navigation />
        <Box
          sx={{ display: "flex", alignItems: "center" }}
          className={classes.icons}
        >
          <Tooltip title="Panier" arrow>
            <div className={basketIsHighlighted && `${classes.bump}`}>
              <BasketIcon onClick={props.onShowBasket} />
            </div>
          </Tooltip>

          {authCtx.isLoggedIn && <AccountIcon onLogout={authCtx.logout} />}
        </Box>
        <FontAwesomeIcon
          icon={faUtensils}
          className={classes.mobileMenuIcon}
          onClick={onMobileMenuHandler}
        />
      </header>
    </>
  );
};

export default MainHeader;
