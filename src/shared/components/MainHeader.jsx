import { Link } from "react-router-dom";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Navigation from "./Navigation";
import Busket from "./Busket";
import classes from "./MainHeader.module.css";

const MainHeader = props => {
  return (
    <header className={classes.mainHeader}>
      <Link className={classes.logoBox} to="/">
        <DinnerDiningIcon className={classes.logo} />
      </Link>
      <nav className="control-account">
      <Navigation />
        <Busket classes={classes.basketIcon} />
        <AccountCircleIcon fontSize="large" />
      </nav>
    </header>
  );
};

export default MainHeader;
