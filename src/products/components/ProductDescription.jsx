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
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

const useStyles = makeStyles({
  root: {},
  container: {
    display: "flex",
    alignItems: "center",
    justifyContente: "Center",
    paddingTop: "2rem",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    marginBottom: "2rem",
    borderRadius: "30px",

    background: "#f5f5f5",
  },
  image: {
    position: "absolute",
    top: "0",
    right: "0",
    background: "var(--main-color)",
    padding: "0.5rem 1rem",
    borderBottomLeftRadius: "10px",
  },
  paperImage: {
    width: "500px",
    height: "300px",
    margin: "5%",
    borderRadius: "15px",
    padding: "1.5rem",
    // background: "#f5f5f5",
    border: "solid 3px #78bf35",
    transition: "all 0.2s linear",
    outline: "6px solid transparent",
    outlineOffset: "-4px",
    "&:hover": {
      transform: "scale(1.1)",
      outline: "3px solid #78bf35",
    },
  },
  main: {
    borderRadius: "15px",
    // height:"40rem",

    transition: "all 0.2s linear",
    outline: "6px solid transparent",
    outlineOffset: "-4px",
    "&:hover": {
      transform: "scale(1.01)",
      outline: "4px solid #616161",
    },
  },
  cardContent: {
    fontSize: "1rem",
    height: "300px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    fontSize: "1.5rem",
    padding: "1rem",
    fontWeight: "bold",
    color: "#616161",
    alignSelf: "center",
  },
  description: {
    fontSize: "1.2rem",
  },
  cardActions: {
    // padding: "1rem",
    paddingTop: "6rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    background: "#f5f5f5",
    // width: "550px",
    background: "white",
  },
  composants: {
    padding: "1rem",
    paddingTop: "2rem",
  },
  nutrientsList: {
    padding: "5px",
    fontSize: "1.1rem",
  },
  priceWeight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    color: "#78bf35",
    fontWeight: "bold",
    fontSize: "1rem",
    alignSelf: "flex-end",
    paddingRight: "1rem",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    width: "180px",
    alignItems: "flex-end",
    color: "#616161",
  },
  button: {
    // borderRightColor: "green",
    marginTop: "1rem",
    color: "#78bf35",
    borderColor: "#78bf35",
    "&:hover ": {
      borderColor: "#78bf35",
      background: "#eeeeee",
    },
    number: {
      color: "green",
      background: "green",
    },
  },
});
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
                {/* <Badge color="secondary" badgeContent={itemCount}>
                    <ShoppingCartIcon />{" "}
                  </Badge> */}

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
                    // color="secondary"
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
