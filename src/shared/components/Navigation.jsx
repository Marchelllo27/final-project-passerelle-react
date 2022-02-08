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
  navButtons: {
    color: "#585858",
    fontWeight: "bold",
    width: "100%",
    justifyContent: "center",
    "&:hover": {
      color: "#78BF35",
    },
    "&:active": {
      color: "#78BF35",
    },
    "& li": {
      justifyContent: "center",
      fontWeight: "bold",
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
            className={style.navButtons}
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
            <Link className={style.navButtons} to="/dishes">
              <MenuItem onClick={handleClose}>Plats</MenuItem>
            </Link>
            <Link className={style.navButtons} to="/drinks">
              <MenuItem onClick={handleClose}>Boissons</MenuItem>
            </Link>

            <Link className={style.navButtons} to="/desserts">
              <MenuItem onClick={handleClose}>Desserts</MenuItem>
            </Link>
          </Menu>
        </li>
        <li>
          <Link to="/signup">
            <Button className={style.navButtons} size="small">
              Inscription
            </Button>
          </Link>
        </li>
        <li>
          <NavLink to="/login">
            <Button className={style.navButtons} size="small">
              Connexion
            </Button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
