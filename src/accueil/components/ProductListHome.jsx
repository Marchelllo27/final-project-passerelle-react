import * as React from "react";
import { useState, useEffect } from "react";

import ProductItem from "./ProductItemHome";
import { Container, Grid } from "@mui/material";
import SkeletonList from "../../shared/UIElements/SkeletonList";
import ErrorAlert from "../../shared/UIElements/ErrorAlert";
import sendHttpRequest from "../../utils/sendHttpRequest";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  grid: {
    display: "flex",
    justifyContent: "center",
  },
});

const ProductsList = props => {
  const classes = useStyles();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchProducts = async () => {
      const responseData = await sendHttpRequest(
        `${process.env.REACT_APP_URL_API}/products/${props.product}`
      );
      const homeData = responseData.slice(0, 4);
      setProducts(homeData);
      setIsLoading(false);
    };

    fetchProducts().catch(error => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [props.product]);

  return (
    <Container sx={{ "@media (max-width: 20rem)": { padding: "0" } }}>
      {/* // SHOW WHEN LOADING FROM DATABASE */}
      {isLoading && <SkeletonList />}
      {/* // SHOW WHEN ERROR OCCUR */}
      {httpError && <ErrorAlert message={httpError} />}

      <Grid className={classes.grid} container marginTop={0} spacing={8}>
        {products.map(product => (
          <ProductItem
            key={product._id}
            product={product}
            pluralProductWord={props.pluralProductWord}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsList;
