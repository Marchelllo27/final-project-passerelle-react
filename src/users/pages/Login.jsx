import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
//import CssBaseline from '@mui/material/CssBaseline';
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
//import Card from "@mui/material/Card";

import Paper from "@mui/material/Paper";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

import { spacing } from "@mui/system";

const useStyles = makeStyles({
  root: {
    //Css textField
    "& .MuiTextField-root": {
      margin: spacing(1),
      width: "400px",
      marginTop: "10%",
    },
    // "& .MuiButtonBase-root": {
    //   margin: spacing(1),
    // },

    //text in green when click to write
    "& label.Mui-focused": {
      color: "green",
    },
    // "& .MuiInput-underline:after": {
    //   borderBottomColor: "green",
    // },
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
    padding: "5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  liItem: {
    color: "white",
    fontWeight: "bold",
    width: "100%",
    justifyContent: "center",
    transition: "0.5",
  },
  paper: {
    //marginTop: "50%",
    borderRadius: "15px",
    padding: "1.5rem",
    background: "#f5f5f5",
    width: "500px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  grid: {
    justifyContent: "center",
  },
  link: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "1rem",
    color: "black",
  },
  span: {
    color: "green",
    fontWeight: "bold",
  },
  // inputLabel: {},
});

export default function SignIn() {
  const theme = createTheme();
  const classes = useStyles();

  const [values, setValues] = useState("");

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <ThemeProvider theme={theme}>
      <Container component="div" maxWidth="xs" className={classes.container}>
        <Paper
          elevation="24"
          className={classes.paper}
          sx={{
            // marginTop: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "green" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Connexion
          </Typography>
          <Box
            className={classes.root}
            // component="form"
            // onSubmit={handleSubmit}
            // noValidate
            sx={{ mt: 1 }}
          >
            <Box className={classes.form}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Votre email "
                name="email"
                autoComplete="email"
                autoFocus
              />
              {/* sx={{ width: "400px" }} variant="outlined" */}
              <FormControl
                sx={{ width: "400px" }}
                variant="outlined"
                id="validation-outlined-input"
              >
                <InputLabel className={classes.inputLabel}>
                  Mot de passe
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  // with label"Mot de passe" take the necessary place
                  label="Mot de passe"
                />
              </FormControl>
              <Button
                className={classes.liItem}
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="success"
              >
                Connexion
              </Button>
              <Grid container className={classes.grid}>
                <Grid item>
                  <Link
                    href="/signup"
                    variant="body2"
                    underline="hover"
                    className={classes.link}
                  >
                    Vous n'avez pas encore de compte ?
                    <span className={classes.span}> Inscription</span>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
