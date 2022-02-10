import * as React from "react";

import { useState, useEffect } from "react";

import ProductItem from "./ProductItem";
import { Container, Grid } from "@mui/material";
import SkeletonList from "../../shared/UIElements/SkeletonList";
import ErrorAlert from "../../shared/UIElements/ErrorAlert";
import sendHttpRequest from "../../utils/sendHttpRequest";
import ProductFilter from "./ProductFilter";


const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchProducts = async () => {
      const responseData = await sendHttpRequest(
        `${process.env.REACT_APP_URL_API}/products/all-dishes`
      );

      setProducts(responseData);
      setIsLoading(false);
    };

    fetchProducts().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  // SHOW WHEN LOADING FROM DATABASE
  if (isLoading) {
    return <SkeletonList />;
  }

  // SHOW WHEN ERROR OCCUR
  if (httpError) {
    return <ErrorAlert message={httpError} />;
  }

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>
        Choisissez les plats selon vos préférences
      </h1>
      <ProductFilter />
      <Grid container marginTop={0} spacing={3}>
        {products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsList;
