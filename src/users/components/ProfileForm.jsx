import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { Button, Container, Box, Paper, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProfileStyles from "./ProfileStyles";
import sendHttpRequest from "../../utils/sendHttpRequest";

const useStyles = makeStyles(ProfileStyles);

const ProfileForm = props => {
  const classes = useStyles();
  const history = useHistory();

  const { register, handleSubmit } = useForm({
    defaultValues: props.preloadedValues,
  });

  const onSubmitHandler = updatedUserData => {
    const { token } = JSON.parse(localStorage.getItem("userData"));

    const updateUserData = async () => {
      await sendHttpRequest(
        `${process.env.REACT_APP_URL_API}/auth-user/update`,
        "PUT",
        JSON.stringify(updatedUserData),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        }
      );
    };

    updateUserData()
      .then(() => {
        history.push("/");
        console.log("USER FINALLY UPDATED!");
      })
      .catch(err => {
        console.log("hey there")
        alert(err);
      });
  };

  return (
    <Container className={classes.container}>
      <Box className={classes.box}>
        <span className={classes.span}>Informations personnels</span>

        <Paper elevation={24} className={classes.paper}>
          <form
            className={classes.root}
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <TextField
              {...register("firstName")}
              name="firstName"
              id="firstName"
              label="Votre prénom"
              variant="outlined"
              required
            />

            <TextField
              {...register("lastName")}
              name="lastName"
              id="lastName"
              label="Votre nom"
              variant="outlined"
              required
            />

            <TextField
              {...register("email")}
              name="email"
              id="email"
              type="email"
              required
              label="Votre email"
              variant="outlined"
            />

            <TextField
              {...register("phoneNumber")}
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

            <span className={classes.span}>Votre adresse</span>
            <TextField
              {...register("street")}
              name="street"
              id="street"
              required
              label="Nom et Numéro de rue"
              variant="outlined"
            />

            <TextField
              {...register("postalCode")}
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

            <TextField
              {...register("city")}
              name="city"
              id="city"
              required
              label="Ville"
              variant="outlined"
            />

            <Button
              color="success"
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className={classes.submitButton}
            >
              Soumettre
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default ProfileForm;
