import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { Link, NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";

const useStyles = makeStyles({
  listRoot: {
    width: "8rem",
    display: "flex",
    flexDirection: "column",
  },
  liItem: {
    color: "#707070",
    fontWeight: "bold",
    width: "100%",
    justifyContent: "center",
    transition: "0.5",
    "&:hover": {
      color: "#78BF35",
    },
    "&:active": {
      color: "#78BF35",
    },
  },
});

const Navigation = props => {
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
    <nav>
      <ul>
        <li>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            size="small"
            endIcon={<ArrowDropDownIcon />}
            className={style.liItem}
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
            <MenuItem className={style.liItem} onClick={handleClose}>
              <Link to="/dishes">Plats</Link>
            </MenuItem>
            <MenuItem className={style.liItem} onClick={handleClose}>
              <Link to="/drinks">Boissons</Link>
            </MenuItem>
            <MenuItem className={style.liItem} onClick={handleClose}>
              <Link to="/desserts">Desserts</Link>
            </MenuItem>
          </Menu>
        </li>
        <li>
          <Link to="/signup">
            <Button className={style.liItem} size="small">Inscription</Button>
          </Link>
        </li>
        <li>
          <NavLink to="/login">
            <Button className={style.liItem} size="small">Connexion</Button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
