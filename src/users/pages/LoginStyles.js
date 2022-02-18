import { spacing } from "@mui/system";

export default {
  root: {
    //Css textField
    "& .MuiTextField-root": {
      margin: spacing(1),
      width: "400px",
      marginTop: "10%",
    },
    //text in green when click to write
    "& label.Mui-focused": {
      color: "green",
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
  liItem: {
    color: "white",
    fontWeight: "bold",
    width: "100%",
    justifyContent: "center",
    transition: "0.5",
  },
  paper: {
    borderRadius: "15px",
    padding: "1.5rem",
    background: "#f5f5f5",
    maxWidth: "23rem ",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  link: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "1rem",
    color: "black",
  },
  span: {
    color: "green",
    fontWeight: "bold",
  },
}