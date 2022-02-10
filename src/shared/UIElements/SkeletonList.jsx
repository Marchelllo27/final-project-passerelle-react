import * as React from "react";

import { Container, Grid } from "@mui/material";

import SkeletonItem from "./SkeletonItem";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const SkeletonList = () => {
  return (
    <Container>
      <Grid container marginTop={0} spacing={3}>
        {array.map((item, index) => (
          <SkeletonItem key={index} />
        ))}
      </Grid>
    </Container>
  );
};

export default SkeletonList;
