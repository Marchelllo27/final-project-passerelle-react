import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useForm } from '../../shared/hooks/form-hook';
//UI
import { Button, Container, Box, Paper, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BackDropSpinner from "../../shared/UIElements/BackDropSpinner";

// import classes from "./Signup.module.css";
import { spacing } from "@mui/system";
//For Update
import sendHttpRequest from "../../utils/sendHttpRequest";
//validation password
import { useForm } from "../../shared/hooks/form-hook";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";

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
 
  
  const [loadedUser, setLoadedUser] = useState();
  const { isLoading, setIsLoading } = useState();
  // const changeStreetHandler = (event) => {
  //   console.log(event.target.value);
  // };

  const { userId } = useParams();


  const [formState, inputHandler, setFormData] = useForm(
    {
      values: {
        firstName: {
          value: "",
          isValid: false,
        },
        lastName: {
          value: "",
          isValid: false,
        },
        phoneNumber: {
          value: "",
          isValid: false,
        },
        addres: {
          street: {
            value: "",
            isValid: false,
          },
          postalCode: {
            value: "",
            isValid: false,
          },
          city: {
            value: "",
            isValid: false,
          },
        },
      },
    },
    false
  );

  useEffect(() => {
    const fetchUser = async () => {
      const { token } = JSON.parse(localStorage.getItem("userData"));
      try {
        const responseData = await sendHttpRequest(
          // `${process.env.REACT_APP_URL_API}/admin/user/${userId}`
          `${process.env.REACT_APP_URL_API}/auth-user/user-info`,
          "GET",
          null,
          { Authorization: "Bearer " + token }
        );

        setLoadedUser(responseData);
        setFormData(
          {
            firstName: {
              value: responseData.firstName,
              isValid: true,
            },
            lastName: {
              value: responseData.lastName,
              isValid: true,
            },

            email: {
              value: responseData.email,
              isValid: true,
            },

            phoneNumber: {
              value: responseData.phoneNumber,
              isValid: true,
            },
            address: {
              street: {
                value: responseData.street,
                isValid: true,
              },

              postalCode: {
                value: responseData.postalCode,
                isValid: true,
              },

              city: {
                value: responseData.city,
                isValid: true,
              },
            },
          },
          true
        );
      } catch (err) {}
    };
    fetchUser();
  }, [setIsLoading,userId, setFormData]);

 
  const userUpdateSubmitHandler = async (event) => {
    event.preventDefault();
    const { token } = JSON.parse(localStorage.getItem("userData"));
    try {
      const sendData = await fetch(
        `${process.env.REACT_APP_URL_API}/auth-user/update/`,
        {
          method: `PUT`,

          body: JSON.stringify({
            firstName: formState.Inputs.firstName.value,
            lastName: formState.inputs.lastName.value,
            phoneNumber: formState.inputs.phoneNumber.value,
            street: formState.inputs.street.value,
            postalCode: formState.inputs.postalCode.value,
            city: formState.inputs.city.value,
          }),

          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
        sendData();
      console.log({
        firstName: formState.inputs.firstName.value,
       
      });
      console.log(formState);
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return (
      <div className="">
        <BackDropSpinner />
      </div>
    );
  }
 
  return (
    <Container className={classes.container}>
      <Box className={classes.box}>
        <span className={classes.span}>Informations personnels</span>

        <Paper elevation={24} className={classes.paper}>
          {!isLoading && loadedUser && (
            <form className={classes.root} onSubmit={userUpdateSubmitHandler}>
              <TextField
                component={"div"}
                defaultValue={loadedUser.firstName}
                name="firstName"
                id="firstName"
                label="Votre prénom"
                variant="outlined"
                required
                onChange={inputHandler}
              />

              <TextField
                defaultValue={loadedUser.lastName}
                name="lastName"
                id="lastName"
                label="Votre nom"
                variant="outlined"
                required
                onChange={inputHandler}
              />

              <TextField
                defaultValue={loadedUser.email}
                name="email"
                id="email"
                type="email"
                required
                label="Votre email"
                variant="outlined"
                onChange={inputHandler}
              />

              <TextField
                defaultValue={loadedUser.phoneNumber}
                name="phoneNumber"
                id="phoneNumber"
                required
                label="Votre numéro de téléphone"
                variant="outlined"
                onChange={inputHandler}
                
              />

              <span className={classes.span}>Votre adresse</span>
              <TextField
                defaultValue={loadedUser.address.street}
                name="street"
                id="street"
                required
                label="Nom et Numéro de rue"
                variant="outlined"
                onChange={inputHandler}
              />

              <TextField
                defaultValue={loadedUser.address.postalCode}
                name="postalCode"
                id="postalCode"
                required
                label="Code Postal"
                variant="outlined"
                onChange={inputHandler}
                
              />

              <TextField
                defaultValue={loadedUser.address.city}
                onChange={inputHandler}
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
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default Profile;
