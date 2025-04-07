import * as React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className={classes.footer}>&copy; Copyright {currentYear}</footer>;
};

export default Footer;
