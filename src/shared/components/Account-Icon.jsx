import React, { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@mui/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Menu, MenuItem, Tooltip } from "@mui/material";

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

const AccountIcon = (props) => {
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
    props.onLogout();
  };

  return (
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
          <MenuItem onClick={handleClose}>Profil</MenuItem>
        </Link>
        <Link to="/">
          <MenuItem onClick={logOutHandler}>Se déconnecter</MenuItem>
        </Link>
      </Menu>
    </>
  );
};

export default AccountIcon;
