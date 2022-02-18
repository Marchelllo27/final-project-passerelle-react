import React from "react";
import ReactDOM from "react-dom";

import classes from "./MobileMenu.module.css";

const MobileMenu = props => {
  const sideMenu = (
    <aside className={classes.mobileMenu}>{props.children}</aside>
  );

  return ReactDOM.createPortal(
    sideMenu,
    document.getElementById("side-drawer")
  );
};

export default MobileMenu;
