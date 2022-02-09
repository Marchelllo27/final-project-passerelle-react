import {
  TextField,
  Button,
  Container,
  Box,
  Paper,
  Link,
  Alert,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
// import classes from "./Signup.module.css";
import { spacing } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
//validation password
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const useStyles = makeStyles({
  root: {
    paddingTop: "5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: spacing(2),
    //Css textField
    "& .MuiTextField-root": {
      width: "400px",
      margin: "10px",
    },
    "& .MuiButtonBase-root": {
      margin: spacing(2),
    },

    "& .MuiOutlinedInput-root": {
      //border Green
      "& fieldset": {
        borderColor: "green",
      },
      //border Green when mouse in the box
      "&:hover fieldset": {
        borderColor: "green",
      },
      //border Green when mouse out the box
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },

  container: {
    paddingTop: "1rem",
    paddingBottom: "2rem",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "auto",
  },
  connexion: {
    justifyContent: "center",
    fontSize: "1rem",
  },
  span: {
    color: "green",
    fontWeight: "bold",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    marginTop: "2%",
    borderRadius: "15px",
    padding: "1rem",
    background: "#f5f5f5",
  },
  invalidFeedback: {
    marginBottom: "2rem",
    marginTop: "-0.5rem",
    color: "red",
  },
});

const Signup = () => {
  const classes = useStyles();

  //Validation password
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Veuillez entrer votre mot de passe")
      .min(4, "Le mot de passe doit contenir au moins 4 caractéres"),
    passwordConfirm: Yup.string()
      .required("La confirmation de votre mot de passe est requise")
      .oneOf(
        [Yup.ref("password")],
        "La validation du mot de passe est incorrecte"
      ),
  });

  const validationOpt = {
    resolver: yupResolver(formSchema),
  };

  const { register, handleSubmit, reset, formState } = useForm(validationOpt);

  const { errors } = formState;

  function onFormSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    return false;
  }
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
          <Avatar sx={{ m: 1, bgcolor: "green" }}>
            <AccountBoxIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Inscription
          </Typography>

          <form className={classes.root} onSubmit={handleSubmit(onFormSubmit)}>
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
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />

            <TextField
              label="Mot de passe"
              name="password"
              type="password"
              {...register("password")}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
            />
            {/* <div className={classes.invalidFeedback}>
              <Alert severity="error">{errors.password?.message}</Alert>
            </div> */}
            <div severity="error" className={classes.invalidFeedback}>
              {errors.password?.message}
            </div>
            <TextField
              label="Confirmez votre Mot de passe"
              name="passwordConfirm"
              type="password"
              {...register("passwordConfirm")}
              className={`form-control ${
                errors.passwordConfirm ? "is-invalid" : ""
              }`}
            />
            <div className={classes.invalidFeedback}>
              {errors.passwordConfirm?.message}
              {/* <Alert severity="error">{errors.passwordConfirm?.message}</Alert> */}
            </div>

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
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
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
