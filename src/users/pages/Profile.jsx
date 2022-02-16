import * as React from "react";

import {
  TextField,
  Button,
  Container,
  Box,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
// import classes from "./Signup.module.css";
import { spacing } from "@mui/system";

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

const Profile = (props) => {
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

  const validationOpt = { resolver: yupResolver(formSchema) };

  const { register, handleSubmit, reset, formState } = useForm(validationOpt);

  const { errors } = formState;

  function onFormSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    return false;
  }
  return (
    <Container className={classes.container}>
      <Box className={classes.box}>
        {/* <Link
          href="/login"
          variant="body2"
          underline="hover"
          className={classes.connexion}
        > */}
        <span className={classes.span}>Informations personnels</span>
        {/* </Link> */}

        <Paper elevation="24" className={classes.paper}>
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

            <TextField
              label="Veuillez rentrer votre mot de passe pour valider vos modifications"
              name="password"
              type="password"
            />
            <Button
              color="success"
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Mettre à jour
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default Profile;
