
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
//import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";

import { spacing } from "@mui/system";

const useStyles = makeStyles({
  root: {
    "& .MuiTextField-root": {
      margin: spacing(1),
      width: "400px",
      marginTop: "10%",
    },
    "& .MuiButtonBase-root": {
      margin: spacing(1),
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
  },
  container: {
    padding: "5%",
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
    background: "#eeeeee",
    width: "500px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  grid:{
    justifyContent: "center",
  },
  link: {
    display:"flex",
    justifyContent: "center",
    fontSize: "1rem",
  },
  span: {
    color: "green",
    fontWeight: "bold",
  },
});


const theme = createTheme();

export default function SignIn() {

 const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="div" maxWidth="xs" className={classes.container}>
        <Paper elevation="24" className={classes.paper}>
          <Box
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
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
              />

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
                  <Link href="/signup" variant="body2" underline="hover" className={classes.link}>
                    Vous n'avez pas encore de compte?  
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
