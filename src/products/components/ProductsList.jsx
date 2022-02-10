import { useState, useEffect } from "react";

import ProductItem from "./ProductItem";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import * as React from "react";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    const fetchProducts = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_URL_API}/products/all-dishes`
      );

      setProducts(responseData);
      setIsLoading(false)
    };

    fetchProducts().catch(error => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  return (
    <Container>
      <Grid container marginTop={0} spacing={3}>
        {products.map(product => (
          <ProductItem key={product._id} product={product} />
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsList;