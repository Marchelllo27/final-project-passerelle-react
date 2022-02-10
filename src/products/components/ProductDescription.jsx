//wad in product

import * as React from "react";

//Theme & Style
import { createTheme, ThemeProvider } from "@mui/material/styles";
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

import stylesDescription from "./ProductDescription"

const useStyles = makeStyles(stylesDescription);
export default function ProductDescription() {
  //Styles
  const theme = createTheme();
  const classes = useStyles(theme);

  //Add & substract
  const [itemCount, setItemCount] = React.useState(1);
  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.container}>
        <Card sx={{ maxWidth: 1200 }} className={classes.card}>
          <Paper className={classes.paperImage}>
            <img
              className={classes.image}
              src="./../../../users/pages/Publication Facebook 940x788  px.png"
              alt=""
            />
          </Paper>
          <Paper className={classes.main} elevation={20}>
            <CardContent className={classes.cardContent}>
              <Typography
                gutterBottom
                component="div"
                className={classes.title}
              >
                Titre de du Produit
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className={classes.description}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                architecto quidem minus natus est rem voluptatem, facere neque
                temporibus omnis dicta nesciunt rerum, odit, voluptas ad
                veritatis vel culpa laudantium?
              </Typography>
              <div className={classes.composants}>
                <Typography variant="body2" color="text.secondary">
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
                <Typography variant="body2" color="text.secondary">
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
                  <Badge
                    className={classes.number}
                    
                    badgeContent={itemCount}
                  >
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
            <CardContent></CardContent>
          </Paper>
        </Card>
      </Container>
    </ThemeProvider>
  );
}
