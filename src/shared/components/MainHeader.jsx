import Navigation from "./Navigation";
import classes from "./MainHeader.module.css"

const MainHeader = props => {
  return <header className={classes.mainHeader}>
    <h1>LOGO</h1>
    <Navigation />
  </header>;
};

export default MainHeader;
