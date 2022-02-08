import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

import classes from "./ProductItem.module.css";

const ProductItem = () => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Paper sx={{ overflow: "hidden" }} elevation={3}>
        <img
          src="https://cdn.cnn.com/cnnnext/dam/assets/160929101749-essential-spanish-dish-paella-phaidon-full-169.jpg"
          alt="img of dish"
          className={classes.productImage}
        />
        <Typography sx={{color: "#585858", textAlign: "center"}} variant="h6" component="h2">
          Name of product
        </Typography>
        <Typography sx={{color: "#78bf35", textAlign: "center"}} variant="h5" component="h3">
          $65
        </Typography>
      </Paper>
    </Grid>
  );
};

export default ProductItem;
