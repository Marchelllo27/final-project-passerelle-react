import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
// MUI
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import CakeIcon from "@mui/icons-material/Cake";

import BasketIcon from "../components/Basket-icon"
import AuthContext from "../context/auth-context";
import classes from "./MobileMenu.module.css";

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
    "@media (max-width: 15rem)": {
      fontSize: "0.7rem"
    },
    
  },
  logoutBtn: {
    "&:hover": {
      color: "red"
    },
    "@media (max-width: 15rem)": {
      fontSize: "0.6rem",
      textAlign: "center",
    },
  }
});

const MobileMenu = props => {
  const AuthCtx = useContext(AuthContext);
  const style = useStyles();

  const onCloseMobileMenu = () => {
    props.onClose();
  };

  const onLogoutClick = () => {
    AuthCtx.logout();
    props.onClose();
  };

  const onBasketClick = () => {
    props.onShowBasket();
    props.onClose();
  }

  const sideMenu = (
    <aside className={classes.mobileMenu}>
      <BasketIcon onClick={onBasketClick} />
      <p style={{textAlign: "center"}} className={style.productLinks}>Panier</p>
      <nav className={classes.navigation}>
        <ul className={classes.ulList}>
          <NavLink
            activeClassName="active-link"
            className={style.productLinks}
            to="/dishes"
            onClick={onCloseMobileMenu}
          >
            <MenuItem>
              Plats
              <DinnerDiningIcon />
            </MenuItem>
          </NavLink>
          <NavLink
            activeClassName="active-link"
            className={style.productLinks}
            to="/drinks"
            onClick={onCloseMobileMenu}
          >
            <MenuItem>
              Boissons
              <LocalBarIcon />
            </MenuItem>
          </NavLink>

          <NavLink
            activeClassName="active-link"
            className={style.productLinks}
            to="/desserts"
            onClick={onCloseMobileMenu}
          >
            <MenuItem>
              Desserts
              <CakeIcon />
            </MenuItem>
          </NavLink>
          <hr className={classes.separator}></hr>
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
                  onClick={onCloseMobileMenu}
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
                  onClick={onCloseMobileMenu}
                >
                  Connexion
                </Button>
              </li>
              <hr className={classes.separator}></hr>
            </>
          )}

          {AuthCtx.isLoggedIn && (
            <>
              <li className={classes.connectionButtons}>
                <Button
                  to="/profile"
                  color="inherit"
                  activeClassName="active-link"
                  className={style.navLinks}
                  size="small"
                  component={NavLink}
                  onClick={onCloseMobileMenu}
                >
                  Profil
                </Button>
              </li>
              <li>
                <Button
                  to="/"
                  color="inherit"
                  className={`${style.navLinks} ${style.logoutBtn}`}
                  size="small"
                  component={NavLink}
                  onClick={onLogoutClick}
                >
                  Se déconnecter
                </Button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </aside>
  );

  return ReactDOM.createPortal(
    sideMenu,
    document.getElementById("side-drawer")
  );
};

export default MobileMenu;

// <nav>
// <ul className={classes.ulList}>
//   <NavLink
//     activeClassName="active-link"
//     className={style.productLinks}
//     to="/dishes"
//   >
//     <MenuItem>
//       Plats
//       <DinnerDiningIcon />
//     </MenuItem>
//   </NavLink>

//   <NavLink
//     activeClassName="active-link"
//     className={style.productLinks}
//     to="/drinks"
//   >
//     <MenuItem>
//       Boissons
//       <LocalBarIcon />
//     </MenuItem>
//   </NavLink>

//   <NavLink
//     activeClassName="active-link"
//     className={style.productLinks}
//     to="/desserts"
//   >
//     <MenuItem>
//       Desserts
//       <CakeIcon />
//     </MenuItem>
//   </NavLink>
// </ul>
// </nav>
