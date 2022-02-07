import { Link } from "react-router-dom";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { spacing } from '@mui/system';

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
        <Busket/>
        <AccountCircleIcon fontSize="large" />
      </nav>
    </header>
  );
};

export default MainHeader;
