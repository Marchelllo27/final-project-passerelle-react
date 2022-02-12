import React, { useContext } from "react";
import { Link } from "react-router-dom";

// MUI
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Menu, MenuItem, Box, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";

import AuthContext from "../context/auth-context";
import Navigation from "./Navigation";
import Basket from "./Basket-icon";
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
  const AuthCtx = useContext(AuthContext);
  const style = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className={classes.mainHeader}>
      <Link className={classes.logoBox} to="/">
        <img src="/logo.png" alt="Eat Smart logo" />
      </Link>
      <Navigation />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {/* , height: "5rem" */}
        <Tooltip title="Panier" arrow>
          <Link to="/basket">
            <Basket />
          </Link>
        </Tooltip>

        {AuthCtx.isLoggedIn && (
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
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Link>
            </Menu>
          </>
        )}
      </Box>
    </header>
  );
};

export default MainHeader;
