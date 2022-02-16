import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

// MUI IMPORTS
import { TextField, Button, Paper, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

import signupStyles from "./SignupStyles";
import sendHttpRequest from "../../utils/sendHttpRequest";
import { signupValidation } from "../../utils/validation";
import ErrorAlert from "../../shared/UIElements/ErrorAlert";
import BackDropSpinner from "../../shared/UIElements/BackDropSpinner";

import AuthContext from "../../shared/context/auth-context";

const useStyles = makeStyles(signupStyles);

const Signup = () => {
  const authCtx = useContext(AuthContext);
  const classes = useStyles();
  const history = useHistory();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      street: "",
      postalCode: "",
      city: "",
    },
    // INPUT VALIDATION
    validationSchema: signupValidation,
    // SUBMIT HANDLER
    onSubmit: async values => {
      setIsLoading(true);
      try {
        await sendHttpRequest(
          `${process.env.REACT_APP_URL_API}/signup`,
          "POST",
          JSON.stringify(values),
          {
            "Content-Type": "application/json",
          }
        );
        setIsLoading(false);
        authCtx.showSuccessModal();
        history.replace("/login");
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    },
  });

  return (
    <>
      {isLoading && <BackDropSpinner />}

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
        {error && <ErrorAlert message={error} />}

        <form className={classes.root} onSubmit={formik.handleSubmit}>
          <TextField
            initialValue={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="firstName"
            id="firstName"
            label="Votre prénom"
            variant="outlined"
            required
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <small className={classes.invalidFeedback}>
              {formik.errors.firstName}
            </small>
          )}
          <TextField
            initialValue={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="lastName"
            id="lastName"
            label="Votre nom"
            variant="outlined"
            required
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <small className={classes.invalidFeedback}>
              {formik.errors.lastName}
            </small>
          )}
          <TextField
            initialValue={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="email"
            id="email"
            type="email"
            required
            label="Votre email"
            variant="outlined"
          />
          {formik.touched.email && formik.errors.email && (
            <small className={classes.invalidFeedback}>
              {formik.errors.email}
            </small>
          )}
          <TextField
            initialValue={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="phoneNumber"
            id="phoneNumber"
            required
            label="Votre numéro de téléphone"
            variant="outlined"
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
              minLength: 10,
              maxLength: 10,
            }}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <small className={classes.invalidFeedback}>
              {formik.errors.phoneNumber}
            </small>
          )}

          <TextField
            initialValue={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="password"
            id="password"
            type="password"
            required
            label="Mot de passe"
            inputProps={{ minLength: 5 }}
            className={`form-control`}
          />
          {formik.touched.password && formik.errors.password && (
            <small className={classes.invalidFeedback}>
              {formik.errors.password}
            </small>
          )}
          <TextField
            initialValue={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            required
            label="Confirmez votre Mot de passe"
            inputProps={{ minLength: 5 }}
            className={`form-control`}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <small className={classes.invalidFeedback}>
              {formik.errors.confirmPassword}
            </small>
          )}
          <span className={classes.span}>Votre adresse</span>
          <TextField
            initialValue={formik.values.street}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="street"
            id="street"
            required
            label="Nom et Numéro de rue"
            variant="outlined"
          />
          {formik.touched.street && formik.errors.street && (
            <small className={classes.invalidFeedback}>
              {formik.errors.street}
            </small>
          )}
          <TextField
            initialValue={formik.values.postalCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="postalCode"
            id="postalCode"
            required
            label="Code Postal"
            variant="outlined"
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
              minLength: 5,
              maxLength: 5,
            }}
          />
          {formik.touched.postalCode && formik.errors.postalCode && (
            <small className={classes.invalidFeedback}>
              {formik.errors.postalCode}
            </small>
          )}
          <TextField
            initialValue={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="city"
            id="city"
            required
            label="Ville"
            variant="outlined"
          />
          {formik.touched.city && formik.errors.city && (
            <small className={classes.invalidFeedback}>
              {formik.errors.city}
            </small>
          )}
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
