import { margin, spacing } from "@mui/system";

export default {
  root: {
    paddingTop: "5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: spacing(2),
    //Css textField
    "& .MuiTextField-root": {
      width: "100%",
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
    width: "25rem",
    maxWidth: "100%",
    marginTop: "2%",
    borderRadius: "15px",
    padding: "1.5rem",
    background: "#f5f5f5",
    "@media (max-width: 380px)": {
      width: "100%",
    },
  },
  invalidFeedback: {
    marginBottom: "2rem",
    marginTop: "-0.5rem",
    color: "red",
  },
  submitButton: {
    "@media (max-width: 380px)": {
      margin: "0.5rem 0",
      padding: "0.5rem 0.7rem",
      fontSize: "0.6rem",
    },
  }
};
