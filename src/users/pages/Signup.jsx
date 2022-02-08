import { TextField, Button, Container,Box ,Paper,Link} from "@mui/material";
import { makeStyles } from "@mui/styles";
// import classes from "./Signup.module.css";
 import { spacing } from "@mui/system";
const useStyles = makeStyles({
  root: {
    paddingTop: "5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: spacing(2),
    "& .MuiTextField-root": {
      width: "400px",
      margin: "10px",
    },
    "& .MuiButtonBase-root": {
      margin: spacing(2),
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "green",
      },
      //border Green
      "&:hover fieldset": {
        borderColor: "green",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
  container: {
    background: "",
    paddingTop: "1rem",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "auto",
  },
  connexion: {
    justifyContent: "center",
    fontSize:"1rem"
  },
  span: {
    color: "green",
    fontWeight: "bold",
  },
  paper: {
    marginTop: "2%",
    borderRadius: "15px",
    padding: "1rem",
    background: "#f5f5f5",
  },
});
const Signup = () => {
  const classes = useStyles();
  
  return (
    <Container className={classes.container}>
      <Box className={classes.box}>
        <Link
          href="/login"
          variant="body2"
          underline="hover"
          className={classes.connexion}
        >
          Vous avez déja un compte?
          <span className={classes.span}> Connectez vous</span>
        </Link>

        <Paper elevation="24" className={classes.paper}>
          <form
            className={classes.root} 
          >
            <TextField
              label="Votre prénom"
              id="outlined-basic"
              variant="outlined"
              required
            />
            <TextField
              label="Votre nom"
              id="outlined-basic"
              variant="outlined"
              required
            />
            <TextField
              label="Votre email"
              id="outlined-basic"
              variant="outlined"
              type="email"
              required
            />

            <TextField
              label="Votre numéro de téléphone"
              id="outlined-basic"
              variant="outlined"
              required
            />
            <TextField
              label="Mot de passe"
              id="outlined-basic"
              variant="outlined"
              type="password"
              required
            />
            <TextField
              label="Confirmez votre Mot de passe"
              id="outlined-basic"
              variant="outlined"
              type="Password"
              required
            />
            <span className={classes.span}>Votre adresse</span>
            <TextField
              label="Nom et Numéro de rue"
              id="outlined-basic"
              variant="outlined"
              required
            />
            <TextField
              label="Code Postal"
              vid="outlined-basic"
              variant="outlined"
              required
            />
            <TextField
              label="Ville"
              id="outlined-basic"
              variant="outlined"
              required
            />

            <Button
              color="success"
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Insciption
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default Signup;
