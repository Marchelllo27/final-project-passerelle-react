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
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "auto",
  },
  connexion: {
    fontSize: "1rem",
  },
  span: {
    color: "green",
    fontWeight: "bold",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "30rem",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "2%",
    borderRadius: "15px",
    padding: "1rem",
    background: "#f5f5f5",
  },
  invalidFeedback: {
    color: "red",
  },
}