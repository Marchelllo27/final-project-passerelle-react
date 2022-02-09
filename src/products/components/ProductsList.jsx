import { useState, useEffect } from "react";

import ProductItem from "./ProductItem";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_HOST}/products/all-dishes`
      );

      const responseData = await response.json();

      setProducts(responseData);
    };
    fetchProducts();
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

// const DUMMY_DATABASE = [{_id: "61f58403cbdc09d76c95eb71" ,name: "Salade composée avec viande",
// ingredients: ["Jambon blanc,poulet,rôti de veau,vinaigre,moutarde,échalote,oignon,ail,cornichons,fines herbes,sel et poivre"],
// image: "https://cdn.cnn.com/cnnnext/dam/assets/160929101749-essential-spanish-dish-paella-phaidon-full-169.jpg",
// weight: 250,
// description: "Cette salade vous est proposée par le docteur Benchetrit, fondateur de la Méthode Le Diet. La salade est nourrissante",
// type: "",
// price: 25},
// {_id: "61f58403cbdc09d76c95eb72", name: "Salade composée avec viande",
// ingredients: ["Jambon blanc,poulet,rôti de veau,vinaigre,moutarde,échalote,oignon,ail,cornichons,fines herbes,sel et poivre"],
// image: "https://cdn.cnn.com/cnnnext/dam/assets/160929101749-essential-spanish-dish-paella-phaidon-full-169.jpg",
// weight: 250,
// description: "Cette salade vous est proposée par le docteur Benchetrit, fondateur de la Méthode Le Diet. La salade est nourrissante",
// type: "",
// price: 25},
// {_id: "61f58403cbdc09d76c95eb70" ,name: "Salade composée avec viande",
// ingredients: ["Jambon blanc,poulet,rôti de veau,vinaigre,moutarde,échalote,oignon,ail,cornichons,fines herbes,sel et poivre"],
// image: "https://cdn.cnn.com/cnnnext/dam/assets/160929101749-essential-spanish-dish-paella-phaidon-full-169.jpg",
// weight: 250,
// description: "Cette salade vous est proposée par le docteur Benchetrit, fondateur de la Méthode Le Diet. La salade est nourrissante",
// type: "",
// price: 25},
// {_id: "61f58403cbdc09d76c95eb75", name: "Salade composée avec viande",
// ingredients: ["Jambon blanc,poulet,rôti de veau,vinaigre,moutarde,échalote,oignon,ail,cornichons,fines herbes,sel et poivre"],
// image: "https://cdn.cnn.com/cnnnext/dam/assets/160929101749-essential-spanish-dish-paella-phaidon-full-169.jpg",
// weight: 250,
// description: "Cette salade vous est proposée par le docteur Benchetrit, fondateur de la Méthode Le Diet. La salade est nourrissante",
// type: "",
// price: 25},
// ]
