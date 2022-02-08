import ProductItem from "./ProductItem";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const ProductsList = () => {
  return (
    <Container>
      <Grid container marginTop={0} spacing={3}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </Grid>
    </Container>
  );
};

export default ProductsList;
