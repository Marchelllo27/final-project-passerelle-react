import * as React from "react";
import { useState, useEffect } from "react";

import ProductItem from "./ProductItem";
import { Container, Grid } from "@mui/material";
import SkeletonList from "../../shared/UIElements/SkeletonList";
import ErrorAlert from "../../shared/UIElements/ErrorAlert";
import sendHttpRequest from "../../utils/sendHttpRequest";
import ProductFilter from "./ProductFilter";

const ProductsList = props => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("");

  const getFilterValue = data => {
    setSelectedFilter(data);
  };

  useEffect(() => {
    setIsLoading(true);

    const fetchProducts = async () => {
      const responseData = await sendHttpRequest(
        `${process.env.REACT_APP_URL_API}/products/${props.product}`
      );

      setProducts(responseData);
      setIsLoading(false);
    };

    fetchProducts().catch(error => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [props.product]);

  useEffect(() => {
    setHttpError(false);
    setIsLoading(true);
    const fetchProducts = async () => {
      const responseData = await sendHttpRequest(
        `${process.env.REACT_APP_URL_API}/products/${props.forWichProduct}?filters[]=${selectedFilter}`
      );
      setProducts(responseData);
      setIsLoading(false);
    };

    fetchProducts().catch(error => {
      setIsLoading(false);
      setHttpError(error.message);
      setProducts([])
    });
  }, [selectedFilter, props.forWichProduct]);

  return (
    <Container>
      <ProductFilter onGetFilterValue={getFilterValue} category={props.forWichProduct}/>

      {/* // SHOW WHEN LOADING FROM DATABASE */}
      {isLoading && <SkeletonList />}
      {/* // SHOW WHEN ERROR OCCUR */}
      {httpError && <ErrorAlert message={httpError}/>}

      <Grid container marginTop={0} spacing={3}>
        {products.map(product => (
          <ProductItem
            key={product._id}
            product={product}
            forWichProduct={props.forWichProduct}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsList;
