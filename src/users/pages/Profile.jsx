import * as React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
// import { useForm } from '../../shared/hooks/form-hook';
//UI
import { TextField, Button, Container, Box, Paper, Input } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BackDropSpinner from "../../shared/UIElements/BackDropSpinner";

// import classes from "./Signup.module.css";
import { spacing } from "@mui/system";
//For Update
import AuthContext from "../../shared/context/auth-context";
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
  //Update
  const auth = useContext(AuthContext);
  // const { sendRequest } = sendHttpRequest();
  // console.log(sendRequest);
  const [loadedUser, setLoadedUser] = useState();
  const { isLoading, setIsLoading } = useState();
  // const { street, setStreet } = useState();
  const changeStreetHandler = (event) => {
    console.log(event.target.value);
  };

  const { userId } = useParams();
  const history = useHistory();

  //Submit
  // const { register, handleSubmit, reset, formState } = useForm(validationOpt);
  //Validation
  // const validationOpt = { resolver: yupResolver(formSchema) };

  // const { errors } = formState;
  const [formState, inputHandler, setFormData] = useForm(
    {
      placeholders: {
        firstName: {
          value: "",
          isValid: false,
        },
        lastName: {
          value: "",
          isValid: false,
        },
        // email: {
        //   value: "",
        //   isValid: false,
        // },
        phoneNumber: {
          value: "",
          isValid: false,
        },
        // password: {
        //   value: "",
        //   isValid: false,
        // },
        // confirmPassword: {
        //   value: "",
        //   isValid: false,
        // },
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
      // console.log(token);
      try {
        const responseData = await sendHttpRequest(
          // `${process.env.REACT_APP_URL_API}/admin/user/${userId}`
          `${process.env.REACT_APP_URL_API}/auth-user/user-info`,
          "GET",
          null,
          { Authorization: "Bearer " + token }
        );
        // const string =JSON.stringify(responseData);

        // console.log(responseData);
        // console.log(responseData.address.city);
        setLoadedUser(responseData);
        // setLoadedUser(responseData.user);
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
      } catch (err) {
        // console.log(err);
      }
    };
    fetchUser();
  }, [userId, setFormData]);

  // function onFormSubmit(data) {
  //   console.log(JSON.stringify(data, null, 4));
  //   return false;
  // }
  const userUpdateSubmitHandler = async (event) => {
    event.preventDefault();
    const { token } = JSON.parse(localStorage.getItem("userData"));
    // console.log(token);
    try {
      const sendData = await fetch(
        `${process.env.REACT_APP_URL_API}/auth-user/update/`,
        {
          method: `PUT`,

          body: JSON.stringify({
            //  firstName: formState.firstName.value,
            //  lastName: formState.lastName.value,
            //  email: formState.email.value,
            //  phoneNumber: formState.phoneNumber.value,
            //  street: formState.street.value,
            //  postalCode: formState.postalCode.value,
            //  city: formState.city.value,

            firstName: formState.Inputs.firstName.value,
            //  lastName: formState.inputs.lastName.value,
            // //  email: formState.inputs.email.value,
            //  phoneNumber: formState.inputs.phoneNumber.value,
            // //  street: event.target.value,
            //  postalCode: formState.inputs.postalCode.value,
            //  city: formState.inputs.city.value,
          }),

          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      // console.log("datasent : ",{firstName: formState.Inputs.firstName.value});

      console.log({
        firstName: formState.inputs.firstName.value,
        lastName: formState.inputs.lastName.value,
        phoneNumber: formState.inputs.phoneNumber.value,
        street: formState.inputs.street.value,
        postalCode: formState.inputs.postalCode.value,
        city: formState.inputs.city.value,
      });
      console.log(formState);
      // history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  // if (isLoading) {
  //   return (
  //     <div className="">
  //       <BackDropSpinner />
  //     </div>
  //   );
  // }
  // if (!loadedPlace && !error) {
  //   return (
  //     <div className="">
  //       <Card>
  //         <h2>Utilisateur introuvable</h2>
  //       </Card>
  //     </div>
  //   );
  // }
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

        <Paper elevation={24} className={classes.paper}>
          {loadedUser && (
            <form className={classes.root} onSubmit={userUpdateSubmitHandler}>
              <Input
                component={"div"}
                defaultValue={loadedUser.firstName}
                name="firstName"
                id="firstName"
                label="Votre prénom"
                variant="outlined"
                required
                onInput={inputHandler}
              />

              <Input
                defaultValue={loadedUser.lastName}
                name="lastName"
                id="lastName"
                label="Votre nom"
                variant="outlined"
                required
                onInput={inputHandler}
              />

              <Input
                defaultValue={loadedUser.email}
                name="email"
                id="email"
                type="email"
                required
                label="Votre email"
                variant="outlined"
                onInput={inputHandler}
              />

              <Input
                defaultValue={loadedUser.phoneNumber}
                name="phoneNumber"
                id="phoneNumber"
                required
                label="Votre numéro de téléphone"
                variant="outlined"
                onInput={inputHandler}
                inputProps={{
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  minLength: 10,
                  maxLength: 10,
                }}
              />

              <span className={classes.span}>Votre adresse</span>
              <Input
                defaultValue={loadedUser.address.street}
                name="street"
                id="street"
                required
                label="Nom et Numéro de rue"
                variant="outlined"
                onInput={inputHandler}
                // onChange={changeStreetHandler}
              />

              <Input
                defaultValue={loadedUser.address.postalCode}
                name="postalCode"
                id="postalCode"
                required
                label="Code Postal"
                variant="outlined"
                onInput={inputHandler}
                inputProps={{
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  minLength: 5,
                  maxLength: 5,
                }}
              />

              <Input
                defaultValue={loadedUser.address.city}
                onInput={inputHandler}
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
