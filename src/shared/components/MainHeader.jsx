import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

// MUI
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Menu, MenuItem, Box, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";

import AuthContext from "../context/auth-context";
import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const useStyles = makeStyles({
  accountMenu: {
    display: "flex",
    flexDirection: "column",
    "& a": {
      color: "#585858",
    },
    "& a:active": {
      color: "#78BF35",
    },
    "& a:hover": {
      color: "#78BF35",
    },
    "& a:last-child:hover": {
      color: "red",
    },
  },
  accountIcon: {
    cursor: "pointer",
    color: "#585858",
    "&:hover": {
      color: "#78BF35",
    },
  },
});

const MainHeader = props => {
  const authCtx = useContext(AuthContext);
  const style = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOutHandler = () => {
    setAnchorEl(null);
    authCtx.logout();
  };

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
        {/* <Tooltip title="Panier" arrow>
          <div>
            <BasketIcon onClick={props.onShowBasket} />
          </div>
        </Tooltip> */}

        {authCtx.isLoggedIn && (
          <>
            <Tooltip title="Espace personnel" arrow>
              <AccountCircleIcon
                fontSize="large"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className={style.accountIcon}
              />
            </Tooltip>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
                className: style.accountMenu,
              }}
            >
              <Link to="/profile">
                <MenuItem onClick={handleClose}>Profile</MenuItem>
              </Link>
              <Link to="/">
                <MenuItem onClick={logOutHandler}>Logout</MenuItem>
              </Link>
            </Menu>
          </>
        )}
      </Box>
    </header>
  );
};

export default MainHeader;
