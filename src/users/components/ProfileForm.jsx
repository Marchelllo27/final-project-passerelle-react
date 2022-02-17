import React from "react";

import { useForm } from "react-hook-form";

import { Button, Container, Box, Paper, Input } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProfileStyles from "./ProfileStyles";

const useStyles = makeStyles(ProfileStyles);

const ProfileForm = props => {
  const classes = useStyles();

  const { register, handleSubmit } = useForm({
    defaultValues: props.preloadedValues,
  });

  const onSubmitHandler = data => {
    //TODO: SUBMIT LOGIC 
    console.log(data);
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
            <Input
              {...register("firstName")}
              name="firstName"
              id="firstName"
              label="Votre prénom"
              variant="outlined"
              required
            />

            <Input
              {...register("lastName")}
              name="lastName"
              id="lastName"
              label="Votre nom"
              variant="outlined"
              required
            />

            <Input
              {...register("email")}
              name="email"
              id="email"
              type="email"
              required
              label="Votre email"
              variant="outlined"
            />

            <Input
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
            <Input
              {...register("street")}
              name="street"
              id="street"
              required
              label="Nom et Numéro de rue"
              variant="outlined"
            />

            <Input
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

            <Input
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
