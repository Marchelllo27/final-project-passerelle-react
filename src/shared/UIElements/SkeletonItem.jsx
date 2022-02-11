import * as React from "react";

import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";
// import { height } from "@mui/system";

const useStyles = makeStyles({
  skeleton: {
    height: "20rem",
    width: "100%",
    display: "flex",
    "flex-direction": "column",
  },
});

const SkeletonItem = () => {
  const style = useStyles();

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Stack spacing={1} className={style.skeleton}>
        <Skeleton variant="rectangular" width="100%" height="12rem" />
        <Skeleton variant="text" height="4rem" />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="circular" width={40} height={40} />
        </div>
      </Stack>
    </Grid>
  );
};

export default SkeletonItem;
