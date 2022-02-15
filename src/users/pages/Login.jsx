import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

// MUI IMPORT
import {
  Avatar,
  Button,
  TextField,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import sendHttpRequest from "../../utils/sendHttpRequest";
import loginStyles from "./LoginStyles";
import AuthContext from "../../shared/context/auth-context";

const useStyles = makeStyles(loginStyles);

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const authContext = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleClickShowPassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const changePasswordHandler = event => {
    setPassword(event.target.value);
  };

  const changeEmailHandler = event => {
    setEmail(event.target.value);
  };



  // ON SUBMIT
  const onSubmitHandler = async event => {
    event.preventDefault();

    try {
      const response = await sendHttpRequest(
        `${process.env.REACT_APP_URL_API}/login`,
        "POST",
        JSON.stringify({ email, password }),
        { "Content-Type": "application/json" }
      );

      setEmail("");
      setPassword("");

      authContext.login(response.token);
      if (response.role === "ADMIN") {
        authContext.setAdmin();
      }

      history.replace("/");
    } catch (error) {
      setError("Login ou mot de passe invalide, veuillez réessayer");
    }
  };

  return (
    <Paper
      elevation={24}
      className={classes.paper}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "600px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "green" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Connexion
      </Typography>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Votre email "
          name="email"
          autoComplete="email"
          autoFocus
          sx={{ marginBottom: "1rem" }}
          value={email}
          onChange={changeEmailHandler}
        />
        <FormControl
          sx={{ width: "400px" }}
          variant="outlined"
          id="validation-outlined-input"
        >
          <InputLabel className={classes.inputLabel}>Mot de passe</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            required
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={changePasswordHandler}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Mot de passe"
          />
        </FormControl>

        {/* IF ERROR WHILE FETCH CREDENTIALS */}
        {error && (
          <small
            style={{ textAlign: "center", color: "red", marginTop: "1rem" }}
          >
            {error}
          </small>
        )}

        <Button
          className={classes.liItem}
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          color="success"
        >
          Connexion
        </Button>
      </form>
      <Link
        href="/signup"
        variant="body2"
        underline="hover"
        className={classes.link}
      >
        Vous n'avez pas encore de compte ?
        <span className={classes.span}> Inscription</span>
      </Link>
    </Paper>
  );
}
