import { spacing } from "@mui/system";

export default {
  root: {
    paddingTop: "5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: spacing(2),
    width: "100%",
    //Css textField
    "& .MuiTextField-root": {
      width: "320px",
      margin: "10px",
      "@media (max-width: 380px)": {
        width: "100%",
      },
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
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "auto",
  },
  connexion: {
    fontSize: "1rem",
    "@media (max-width: 380px)": {
      fontSize: "0.8rem",
    }
  },
  span: {
    color: "green",
    fontWeight: "bold",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "25rem",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "2%",
    borderRadius: "15px",
    padding: "1rem",
    background: "#f5f5f5",
    "@media (max-width: 380px)": {
      width: "90%",
    },
  },
  invalidFeedback: {
    color: "red",
  },
  inscriptionButton: {
    "@media (max-width: 380px)": {
      margin: "0.5rem 0",
      padding: "0.5rem 0.7rem",
      fontSize: "0.6rem",
    },
  }
}