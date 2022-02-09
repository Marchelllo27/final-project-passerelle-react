import { useState, useEffect } from "react";

import ProductItem from "./ProductItem";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import classes from "./ProductList.module.css";
import SkeletonList from "../../shared/UIElements/SkeletonList";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_URL_API}/products/all-dishes`
      );

      if (!response.ok) {
        console.log(response);
        throw new Error("Malheureusement, une erreur s'est produite lors du chargement des données. Esseyez plus tard");
      }

      const responseData = await response.json();

      setProducts(responseData);
      setIsLoading(false);
    };

    fetchProducts().catch(error => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  // SHOW WHEN LOADING FROM DATABASE
  if (isLoading) {
    return <SkeletonList/>
  }
  
  // SHOW WHEN ERROR OCCUR
  if (httpError) {
    return (
      <section className={classes.httpError}>
        <p>{httpError}</p>
      </section>
    );
  }

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
