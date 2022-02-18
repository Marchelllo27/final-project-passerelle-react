import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "@mui/material/Backdrop";

export default function SimpleBackdrop(props) {
  // const handleClose = () => {
  //   props.onBackdropClick();
  // };

  return ReactDOM.createPortal(
    <Backdrop
      sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1}}
      open={true}
      onClick={props.onClick}
    />,
    document.getElementById("backdrop")
  );
}
