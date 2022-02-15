import * as React from "react";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

const ErrorAlert = (props) => {
  return (
    <Stack sx={{ width: "100%", maxWidth: "40rem", marginLeft: "auto", marginRight: "auto", marginTop: "1rem", "& .MuiPaper-root": {justifyContent: "center"}}}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {props.message}
      </Alert>
    </Stack>
  );
};

export default ErrorAlert;
