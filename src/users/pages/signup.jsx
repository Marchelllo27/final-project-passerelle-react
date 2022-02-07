import { TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import classes from "./Signup.module.css";
 import { spacing } from "@mui/system";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: spacing(20),
    "& .MuiTextField-root": {
      margin: spacing(11),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: spacing(20),
    },
  },
});
const Signup = (props) => {
  const classes = useStyles();
  
  return (
    <form  className={classes.root}>
      <TextField
        //sx={{ paddingTop: 2 }}
        label="Votre prénom"
        variant="filled"
        required
      />
      <TextField label="Votre nom" variant="filled" required />
      <TextField label="Votre email" variant="filled" type="email" required />

      <TextField label="Votre numéro de téléphone" variant="filled" required />
      <p>Votre adresse</p>
      <TextField label="Rue" variant="filled" required />
      <TextField label="Code Postal" variant="filled" type="number" required />
      <TextField label="Ville" variant="filled" required />

      <TextField
        label="Mot de passe"
        variant="filled"
        type="password"
        required
      />
      <TextField
        label="confirmer votre Mot de passe"
        variant="filled"
        type="Password"
        required
      />
      <div>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
  );
};

export default Signup;
