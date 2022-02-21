import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";

// MUI
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import CakeIcon from "@mui/icons-material/Cake";

import classes from "./Navigation.module.css";
import AuthContext from "../context/auth-context";

const useStyles = makeStyles({
  listRoot: {
    width: "9rem",
    display: "flex",
    flexDirection: "column",
  },
  productLinks: {
    color: "#585858",
    fontWeight: "bold",
    width: "100%",
    "&:hover": {
      color: "#78bf35",
    },
    "&:active": {
      color: "#78bf35",
    },
    "& li": {
      justifyContent: "space-between",
      fontWeight: "bold",
    },
  },
  navLinks: {
    fontWeight: "bold",
    color: "#585858",
    "&:hover": {
      color: "#78bf35",
    },
    "&:active": {
      color: "#78bf35",
    },
  },
});

const Navigation = props => {
  const history =useHistory();
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
  const onAddClick =()=>{
    history.push("/admin/product/add");
  }

  return (
    <nav className={classes.navigation}>
      <ul className={classes.navLinks}>
        <li>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            size="small"
            endIcon={<ArrowDropDownIcon />}
            color="inherit"
            className={style.navLinks}
          >
            Nos produits
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
              className: style.listRoot,
            }}
          >
            <NavLink
              activeClassName="active-link"
              className={style.productLinks}
              to="/dishes"
            >
              <MenuItem onClick={handleClose}>
                Plats
                <DinnerDiningIcon />
              </MenuItem>
            </NavLink>
            <NavLink
              activeClassName="active-link"
              className={style.productLinks}
              to="/drinks"
            >
              <MenuItem onClick={handleClose}>
                Boissons
                <LocalBarIcon />
              </MenuItem>
            </NavLink>

            <NavLink
              activeClassName="active-link"
              className={style.productLinks}
              to="/desserts"
            >
              <MenuItem onClick={handleClose}>
                Desserts
                <CakeIcon />
              </MenuItem>
            </NavLink>
          </Menu>
        </li>
        {!AuthCtx.isLoggedIn && (
          <>
            <li>
              <Button
                to="/signup"
                color="inherit"
                activeClassName="active-link"
                className={style.navLinks}
                size="small"
                component={NavLink}
              >
                Inscription
              </Button>
            </li>
            <li>
              <Button
                to="/login"
                color="inherit"
                activeClassName="active-link"
                className={style.navLinks}
                size="small"
                component={NavLink}
              >
                Connexion
              </Button>
            </li>
          </>
        )}
      </ul>

      {AuthCtx.isAdmin && (
        <Button
        onClick={onAddClick}
          
          color="inherit"
          // activeClassName="active-link"
          className={style.navLinks}
          size="small"
        >
          Ajoutez un produits
        </Button>
      )}
    </nav>
  );
};

export default Navigation;
