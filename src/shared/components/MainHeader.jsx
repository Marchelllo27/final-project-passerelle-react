import * as React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Navigation from "./Navigation";
import Busket from "./Busket";
import classes from "./MainHeader.module.css";

const useStyles = makeStyles({
  accountMenu: {
    display: "flex",
    flexDirection: "column",
  },
  accountIcon: {
    cursor: "pointer",
    "&:hover": {
      color: "#78BF35"
    }
  }
});

const MainHeader = props => {
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
        <Busket />
        <Box>
          <AccountCircleIcon
            fontSize="large"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className={style.accountIcon}
          />
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
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Box>
    </header>
  );
};

export default MainHeader;
