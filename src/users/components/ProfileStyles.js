import { spacing } from "@mui/system";

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
      minWidth: "300px",
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
}