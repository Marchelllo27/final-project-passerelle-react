import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Link, Card,CardContent ,OutlinedInput,InputLabel,TextField,FormControl,InputAdornment} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";

import FormHelperText from "@mui/material/FormHelperText";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";



const Login = (props) => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

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
  

  return (
    <Card >
      <CardContent>
        <Box sx={{ display: "flex", mx: "auto", width: 200 }}>
          <div>
            <TextField
              label="Entrez votre Email"
              id="email"
              sx={{ m: 1, width: "35ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Email : </InputAdornment>
                ),
              }}
            />

            <FormControl
              sx={{ m: 1, width: "35ch", display: "flex" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="password"
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
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button>Se connecter</Button>
          </div>
        </Box>

        <div>
          <Link path="/signup">Vous n'avez pas encore de compte ?</Link>
        </div>
      </CardContent>
    </Card>
  );
};
export default Login;
