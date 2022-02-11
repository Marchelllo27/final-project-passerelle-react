//wad in product

import * as React from "react";

//Theme & Style
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
//Icon
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
//Components
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import stylesDescription from "./ProductDescriptionStyles";

const useStyles = makeStyles(stylesDescription);
export default function ProductDescription() {
  const { id } = useParams();
  console.log(id)

  //Styles
  const classes = useStyles();

  //Add & substract
  const [itemCount, setItemCount] = useState(1);
  const [productData, setProductData] = useState(null);
  const [httpError, sethttpError] = useState(null);


  useEffect(() => {
    const fetchproductData = async () => {
     const response = await fetch(`${process.env.REACT_APP_URL_API}/products/dish/${id}`);

      if (!response.ok) {
        throw new Error("Something went wrong")
      }

      const responseData = await response.json();
      setProductData(responseData)

      console.log(responseData)
    };

      
      fetchproductData().catch(error => {
        console.log(error)
        sethttpError(error.message)
      });;

  }, [id]);

  console.log(productData)

  return (
    <Container className={classes.container}>

      {httpError && <p>Error</p>}

    {productData && 
      <Card sx={{ maxWidth: 1200 }} className={classes.card}>
        <Paper className={classes.paperImage}>
          <img
            className={classes.image}
            src={`${process.env.REACT_APP_URL_API}/uploads/images/dishes/${productData.image}`}
            alt={productData.name}
          />
        </Paper>
        <Paper className={classes.main} elevation={20}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom component="div" className={classes.title}>
              Titre de du Produit
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className={classes.description}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
              architecto quidem minus natus est rem voluptatem, facere neque
              temporibus omnis dicta nesciunt rerum, odit, voluptas ad veritatis
              vel culpa laudantium?
            </Typography>
            <div className={classes.composants}>
              <Typography
                variant="body2"
                component="div"
                color="text.secondary"
              >
                <ul>
                  <strong className={classes.nutrientsList}>
                    Ingredients :
                  </strong>

                  <li className={classes.nutrientsList}>
                    Lorem ipsum dolor sit,
                  </li>
                  <li className={classes.nutrientsList}>
                    Lorem ipsum dolor sit,
                  </li>
                  <li className={classes.nutrientsList}>
                    Lorem ipsum dolor sit,
                  </li>
                </ul>
              </Typography>
              <Typography
                variant="body2"
                component="div"
                color="text.secondary"
              >
                <ul>
                  <strong className={classes.nutrientsList}>
                    Nutriments :
                  </strong>
                  <li className={classes.nutrientsList}>Vitamine C</li>
                  <li className={classes.nutrientsList}>Vitamine C</li>
                  <li className={classes.nutrientsList}>Vitamine C</li>
                </ul>
              </Typography>
            </div>
            <div className={classes.priceWeight}>
              <Typography>Prix : 7 $</Typography>
              <Typography>Poids : 250 Gr</Typography>
            </div>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <div>
              <div className={classes.buttonGroup}>
                <Button
                  variant="outlined"
                  className={classes.button}
                  onClick={() => {
                    setItemCount(Math.max(itemCount - 1, 0));
                  }}
                >
                  {" "}
                  <RemoveIcon fontSize="small" />
                </Button>
                <Badge className={classes.number} badgeContent={itemCount}>
                  <ShoppingBasketIcon color="action" />{" "}
                </Badge>

                <Button
                  className={classes.button}
                  variant="outlined"
                  onClick={() => {
                    setItemCount(itemCount + 1);
                  }}
                >
                  {" "}
                  <AddIcon fontSize="small" />
                </Button>
              </div>
            </div>
            <Button
              className={classes.button}
              variant="outlined"
              startIcon={<AddShoppingCartIcon color="action" />}
            >
              Ajouter au panier
            </Button>
          </CardActions>
          {/* <CardContent></CardContent> */}
        </Paper>
      </Card>
      }
    </Container>
  );
}
