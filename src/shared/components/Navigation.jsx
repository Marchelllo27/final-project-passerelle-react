import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";

import classes from "./Navigation.module.css";

const useStyles = makeStyles({
  root: { backgroundColor: "red" }, // a style rule
  listRoot: {
    fontWeight: "bold",
    width: "9rem",
    display: "flex",
    flexDirection: "column"
  },
  item: {
    color: "green",
    "&:hover": {
      color: "yellow"
    }
  }
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
      <ul>
        <li>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            variant="contained"
            size="small"
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
              className: style.listRoot
            }}
          >
            <MenuItem onClick={handleClose}><Link to='/dishes'>Plats</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to='/drinks'>Boissons</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to='/desserts'>Desserts</Link></MenuItem>
          </Menu>
        </li>
        <li>
          <Link to="/signup">
            <Button variant="contained" size="small">Inscription</Button>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <Button variant="contained" size="small">Connexion</Button>
          </Link>
        </li>
      </ul>
  );
};

export default Navigation;
