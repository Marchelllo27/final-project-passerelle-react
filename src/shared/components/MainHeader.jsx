import React, { useContext } from "react";
import { Link } from "react-router-dom";

// MUI

import {Box, Tooltip } from "@mui/material";


import AuthContext from "../context/auth-context";
import BasketIcon from "./Basket-icon"
import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import AccountIcon from "./Account-Icon";


const MainHeader = props => {
  const authCtx = useContext(AuthContext);

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
          <div>
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
