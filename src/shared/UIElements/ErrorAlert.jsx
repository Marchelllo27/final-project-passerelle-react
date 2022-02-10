import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

const ErrorAlert = props => {
  return (
    <Stack sx={{ width: "80%", marginLeft: "auto", marginRight: "auto"}}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {props.message}
      </Alert>
    </Stack>
  );
};

export default ErrorAlert;
