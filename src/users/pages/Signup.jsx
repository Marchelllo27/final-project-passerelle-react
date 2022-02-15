import * as React from "react";
import { useForm } from "react-hook-form";

import { TextField, Button, Paper, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
//validation password
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import signupStyles from "./SignupStyles";

const useStyles = makeStyles(signupStyles);

const Signup = () => {
  const classes = useStyles();

  //Validation password
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Veuillez entrer votre mot de passe")
      .min(5, "Le mot de passe doit contenir au moins 5 caractéres"),
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

  const { register, handleSubmit, formState } = useForm(validationOpt);

  const { errors } = formState;

  function onFormSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    return false;
  }

  const onBlurName = () => {

  }

  const onSubmitHandler = () => {
    console.log("submitted")
  }

  return (
    <>
      <Link
        href="/login"
        variant="body2"
        underline="hover"
        className={classes.connexion}
      >
        Vous avez déja un compte?
        <span className={classes.span}> Connectez vous</span>
      </Link>

      <Paper elevation={24} className={classes.paper}>
        <Avatar sx={{ m: 1, bgcolor: "green" }}>
          <AccountBoxIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Inscription
        </Typography>

        <form className={classes.root} onSubmit={handleSubmit(onFormSubmit)}>
          <TextField label="Votre prénom" variant="outlined" name="firstName" required />
          <TextField label="Votre nom" variant="outlined" name="lastName" required />
          <TextField
            label="Votre email"
            variant="outlined"
            name="email"
            type="email"
            required
          />
          <TextField
            label="Votre numéro de téléphone"
            name="phoneNumber"
            variant="outlined"
            required
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*",  minLength: 10,
            maxLength: 10, }}
          />

          <TextField
            label="Mot de passe"
            name="password"
            type="password"
            inputProps={{ minLength: 5 }}
            {...register("password")}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          {/* <div severity="error" className={classes.invalidFeedback}>
            {errors.password?.message}
          </div> */}
          <TextField
            label="Confirmez votre Mot de passe"
            name="confirmPassword"
            type="password"
            inputProps={{ minLength: 5 }}
            {...register("passwordConfirm")}
            className={`form-control ${
              errors.passwordConfirm ? "is-invalid" : ""
            }`}
          />
          {/* <div className={classes.invalidFeedback}>
            {errors.passwordConfirm?.message}
          </div> */}

          <span className={classes.span}>Votre adresse</span>
          <TextField label="Nom et Numéro de rue" name="street" variant="outlined" required />
          <TextField
            label="Code Postal"
            name="postalCode"
            variant="outlined"
            required
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
              minLength: 5,
              maxLength: 5,
            }}
          />
          <TextField label="Ville" name="city" variant="outlined" required />
          <Button
            color="success"
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Inscription
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default Signup;
