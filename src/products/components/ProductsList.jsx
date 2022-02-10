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

      console.log(process.env.REACT_APP_URL_API);
      const responseData = await response.json();

      setProducts(responseData);
      setIsLoading(false)
    };
    fetchProducts();

  // fetch(`${process.env.REACT_APP_URL_API}/products/all-dishes`)
  //       .then((response) => {
  //         return response.json;
  //       })
  //       .then((data) => {
  //         setIsLoading(false);
  //         setProducts(data);
  //       });
 


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