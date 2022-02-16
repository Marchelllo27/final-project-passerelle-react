import * as React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
// import { useForm } from '../../shared/hooks/form-hook';
//UI
import { TextField, Button, Container, Box, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import classes from "./Signup.module.css";
import { spacing } from "@mui/system";
//For Update
import AuthContext from "./../../shared/context/auth-context";
import useHttpUser from "./../../shared/hooks/http-hook";
//validation password
import { useForm } from "./../../shared/hooks/form-hook";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

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
  const { isLoading, error, sendRequest, clearError } = useHttpUser();
  const [loadedUser,setLoadedUser]=useState();
  const { id}=useParams();
  console.log(id)
  const history = useHistory();
  
  //Submit
    // const { register, handleSubmit, reset, formState } = useForm(validationOpt);
  //Validation
  // const validationOpt = { resolver: yupResolver(formSchema) };

  // const { errors } = formState;
  const [formState, inputHandler, setFormData] = useForm(
    {
      initialValues: {
        firstName: {
          value: "",
          isValid: false,
        },
        lastName: {
          value: "",
          isValid: false,
        },
        email: {
          value: "",
          isValid: false,
        },
        phoneNumber: {
          value: "",
          isValid: false,
        },
        password: {
          value: "",
          isValid: false,
        },
        confirmPassword: {
          value: "",
          isValid: false,
        },
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
    false
  );
       
     
  useEffect(() => {
    const fetchUser = async()=>{
      try{
        const responseData = await sendRequest(
          // `${process.env.REACT_APP_URL_API}/admin/user/${userid}`
          `${process.env.REACT_APP_URL_API}/auth-user/${id}`
        );
        console.log(responseData);
        setLoadedUser(responseData.user);
        setFormData({
         firstName: {
            value: responseData.user.firstName,
            isValid: false,
          },
          lastName: {
            value: responseData.user.lastName,
            isValid: false,
          },

          email: {
            value: responseData.user.email,
            isValid: false,
          },

          phoneNumber: {
            value: responseData.user.phoneNumber,
            isValid: false,
          },

          street: {
            value: responseData.user.street,
            isValid: false,
          },

          postalCode: {
            value: responseData.user.postalCode,
            isValid: false,
          },

          city: {
            value: responseData.user.city,
            isValid: false,
          },

      },true);
      }catch(err){

      }
    };
    fetchUser();
  }, [sendRequest, id, setFormData]);

  // function onFormSubmit(data) {
  //   console.log(JSON.stringify(data, null, 4));
  //   return false;
  // }
  const userUpdateSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        `${process.env.REACT_APP_URL_API}/auth-user/update/${id}`,
        `PUT`,
        JSON.stringify({
          // password: formState.inputs.password.value,
        }),
        {
          "content-type": "application/json",
        }
      );
      history.put("/" + auth.userid + "/update");
    } catch (err) {}
  };
  
  //Validation password
  // const formSchema = Yup.object().shape({
  //   password: Yup.string()
  //     .required("Veuillez entrer votre mot de passe")
  //     .min(4, "Le mot de passe doit contenir au moins 4 caractéres"),
  //   passwordConfirm: Yup.string()
  //     .required("La confirmation de votre mot de passe est requise")
  //     .oneOf(
  //       [Yup.ref("password")],
  //       "La validation du mot de passe est incorrecte"
  //     ),
  // });

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
          {!isLoading && loadedUser && (
            <form className={classes.root} onSubmit={userUpdateSubmitHandler}>
              <TextField
                component={"div"}
                initialValue={loadedUser.firstName}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                name="firstName"
                id="firstName"
                label="Votre prénom"
                variant="outlined"
                required
              />
              {/* {formik.touched.firstName && formik.errors.firstName && (
              <small className={classes.invalidFeedback}>
                {formik.errors.firstName}
              </small>
            )} */}
              <TextField
                initialValue={loadedUser.lastName}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                name="lastName"
                id="lastName"
                label="Votre nom"
                variant="outlined"
                required
              />
              {/* {formik.touched.lastName && formik.errors.lastName && (
              <small className={classes.invalidFeedback}>
                {formik.errors.lastName}
              </small>
            )} */}
              <TextField
                initialValue={loadedUser.email}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                name="email"
                id="email"
                type="email"
                required
                label="Votre email"
                variant="outlined"
              />
              {/* {formik.touched.email && formik.errors.email && (
              <small className={classes.invalidFeedback}>
                {formik.errors.email}
              </small>
            )} */}
              <TextField
                initialValue={loadedUser.phoneNumber}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
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
              {/* {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <small className={classes.invalidFeedback}>
                {formik.errors.phoneNumber}
              </small>
            )} */}

              <span className={classes.span}>Votre adresse</span>
              <TextField
                initialValue={loadedUser.street}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                name="street"
                id="street"
                required
                label="Nom et Numéro de rue"
                variant="outlined"
              />
              {/* {formik.touched.street && formik.errors.street && (
              <small className={classes.invalidFeedback}>
                {formik.errors.street}
              </small>
            )} */}
              <TextField
                initialValue={loadedUser.postalCode}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
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
              {/* {formik.touched.postalCode && formik.errors.postalCode && (
              <small className={classes.invalidFeedback}>
                {formik.errors.postalCode}
              </small>
            )} */}
              <TextField
                initialValue={loadedUser.city}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                name="city"
                id="city"
                required
                label="Ville"
                variant="outlined"
              />
              {/* {formik.touched.city && formik.errors.city && (
              <small className={classes.invalidFeedback}>
                {formik.errors.city}
              </small>
            )} */}
              <Button
                color="success"
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Inscription
              </Button>
            </form>
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default Profile;
