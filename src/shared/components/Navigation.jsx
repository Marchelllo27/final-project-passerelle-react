import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

import classes from "./Navigation.module.css";

const useStyles = makeStyles({
  root: {backgroundColor: "red"}, // a style rule
  label: {}, // a nested style rule
});

const Navigation = props => {

  const style = useStyles()

  return (
    <nav>
      <ul>
        <li><Button className={style.root} variant="contained">Nos Produits</Button></li>
        <li><Button variant="contained" href='/signup'>Inscription</Button></li>
        <li><Button variant="contained" href='/login'>Connexion</Button></li>
      </ul>
    </nav>
  );
};

export default Navigation;
