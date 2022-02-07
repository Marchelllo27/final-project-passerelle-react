import { TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import classes from "./Signup.module.css";
 import { spacing } from "@mui/system";
const useStyles = makeStyles({
  root: {
    paddingTop:"5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: spacing(2),
    "& .MuiTextField-root": {
      margin: spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: spacing(2),
    },
  },
});
const Signup = (props) => {
  const classes = useStyles();
  
  return (
    <form className={classes.root}>
      <TextField
        //sx={{ paddingTop: 2 }}
        label="Votre prénom"
        variant="filled"
        required
      />
      <TextField label="Votre nom" variant="filled" required />
      <TextField label="Votre email" variant="filled" type="email" required />

      <TextField label="Votre numéro de téléphone" variant="filled" required />
      <TextField
        label="Mot de passe"
        variant="filled"
        type="password"
        required
      />
      <TextField
        label="Confirmez votre Mot de passe"
        variant="filled"
        type="Password"
        required
      />
      <p>Votre adresse</p>
      <TextField label="Rue" variant="filled" required />
      <TextField label="Code Postal" variant="filled" required />
      <TextField label="Ville" variant="filled" required />

      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
        Insciption
      </Button>
    </form>
  );
};

export default Signup;
