import { TextField, Button, Container,Box } from "@mui/material";
import Grid from "@mui/material/Grid";
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
      margin: spacing(1),
      width: "400px",
      margin: "15px",
    },
    "& .MuiButtonBase-root": {
      margin: spacing(2),
    },

    //text in green when click to write
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
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

    // palette: {
    //   primary: "lightGreen",
    //   secondary: "green",
    // },
  },
  container: {
    background: "",
    paddingTop: "1rem"
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "auto",
  },
  connexion: {
    justifyContent: "center",
  },
  span: {
    color: "green",
    fontWeight: "bold",
  },
});
const Signup = () => {
  const classes = useStyles();
  
  return (
    <Container className={classes.container}>
      <Box className={classes.box}>
     
        
        {/* <Grid item xs={8} className={classes.gridRight}> */}
          <div className={classes.connexion}>
            Vous avez déja un compte ? <span className={classes.span}>Connectez vous</span>
          </div>
          <form
            className={classes.root}
            // sx={{
            //   width: 500,
            //   maxWidth: "100%",
            // }}
          >
            <TextField
              //sx={{ paddingTop: 2 }}
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
              label="Rue"
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

            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Insciption
            </Button>
          </form>
        {/* </Grid>
      </Grid> */}
      </Box>
    </Container>
  );
};

export default Signup;
