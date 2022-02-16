//react
import * as React from "react";
import ProductsListHome from "./../components/ProductListHome";
//Mui
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import ImageSlider from "../components/ImageSlider";
import { Button,Container } from "@mui/material";
//Icons
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import Filter7Icon from "@mui/icons-material/Filter7";
//Theme & Style
import { makeStyles } from "@mui/styles";
import frame from "./separateur-1-1-e1560496517774.png";
import img from "./item-slider.png";
import "animate.css";

const useStyles = makeStyles({
  container: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "100%",
  },

  slider1: {
    display: "flex",
    flexDirection: "row-reverse",
    paddingTop: "1rem",
    paddingRight: "1rem",
    background: "#98fb9847",
  },
  img: {
    width: "30%",
    animation:
      "backInRight" /* referring directly to the animation's @keyframe declaration */,
    animationDuration: "2s" /* don't forget to set a duration! */,
  },
  slider1Content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "1rem",
    margin: "0 0.5rem",
    animation:
      "backInLeft" /* referring directly to the animation's @keyframe declaration */,
    animationDuration: "2s" /* don't forget to set a duration! */,
  },
  serviceLayout: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingTop: "3rem",
  },
  serviceLayoutContain: {
    width: "33%",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",

    animation:
      "backInUp" /* referring directly to the animation's @keyframe declaration */,
    animationDuration: "2s" /* don't forget to set a duration! */,
  },
  card: {
    display: "flex",
    padding: "1rem",
  },
  blocks: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: "1rem",
    alignItems: "center",
    background: "linear-gradient( #deebdd75 0%, #bbdbbe 74%)",
    animation:
      "flipInX" /* referring directly to the animation's @keyframe declaration */,
    animationDuration: "2s" /* don't forget to set a duration! */,
  },
  aboutUs: {
    width: "70%",
    margin: "1rem",
    padding: "1rem",
    fontFamily: "inherit",
  },
  productList: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "3rem",
  },
  // benefits: {
  //   width: "150px",
  //   background: "linear-gradient(#dfec51,#459522)",
  // },
  textAlign: {
    texAalign: "center",
  },
  frame: {
    // height:"150px",
  },
  seeMore: {
    fontSize: "larger",
    paddingTop: "2rem",
  },
});

const Accueil = props => {
  //Styles
  const classes = useStyles();

  return (
    <>
      <Container className={classes.container}>
        <Card className={classes.slider1}>
          <img src={img} alt="fruit orange" className={classes.img} />
          <div className={classes.slider1Content}>
            <Typography variant="h4">Goutez à la qualité supérieur </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              nulla delectus autem facilis blanditiis doloremque. Adipisci
              doloribus odio autem. Illum dicta porro accusamus ipsa iusto
              quaerat laborum sapiente quasi corporis?
            </Typography>
          </div>
        </Card>
        <div sx={{ minWidth: 275 }} className={classes.serviceLayout}>
          <CardContent className={classes.serviceLayoutContain}>
            <CreditScoreIcon />
            <Typography align="center" variant="h5">
              Paiement sécurisé
            </Typography>
          </CardContent>
          <CardContent className={classes.serviceLayoutContain}>
            <LocalShippingIcon />
            <Typography align="center" variant="h5">
              Livraison gartuite
            </Typography>
          </CardContent>
          <CardContent className={classes.serviceLayoutContain}>
            <Filter7Icon />
            <Typography align="center" variant="h5" component="div">
              Ouvert 7j/7
            </Typography>
          </CardContent>
        </div>

        <ImageSlider />

        <div className={classes.blocks}>
          <Typography component="div" className={classes.aboutUs}>
            <p align="center">CUISINE DU JOUR BONJOUR</p>
            <p align="center">
              Oui comme des poules au plein air, c’est à l’aube qu’on
              sélectionne les produits qui viendront composer vos plats ou nos
              jus pressés à froid.
            </p>
          </Typography>
          <Typography align="center" className={classes.aboutUs}>
            Parce qu’on sait que votre humeur dépend un peu de ce repas, nos
            plats sont pensés pour tous les fans du manger sain. Ceux qui
            comptent dessus pour continuer leur journée rassasié, énergique et
            léger : c’est d’ailleurs ce qui nous a inspiré. Et après, s’il vous
            en reste, partagez ou conservez, on vous le garantit c’est frais.
          </Typography>

          <Typography align="center" className={classes.aboutUs}>
            Tous nos déchets alimentaires sont compostés et recyclés pour
            fertiliser les sols d’Ile-de-France{" "}
            <span role="img" aria-label="tree leaf">
              🌱
            </span>
          </Typography>
          <img src={frame} className={classes.frame} alt="separation line" />
          <Box>
            <div className={classes.productList}>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                align="center"
              >
                Nos Plats
              </Typography>
              <ProductsListHome
                alignItems="center"
                product="all-dishes"
                forWichProduct="dishes"
              />
              <Button href="/dishes" className={classes.seeMore}>
                Voir plus ...
              </Button>

              <img
                src={frame}
                className={classes.frame}
                alt="separation line"
              />
            </div>
            <div className={classes.productList}>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                align="center"
              >
                Nos Desserts
              </Typography>
              <ProductsListHome
                product="all-desserts"
                forWichProduct="desserts"
              />
              <Button href="/desserts" className={classes.seeMore}>
                Voir plus ...
              </Button>
              <img
                src={frame}
                className={classes.frame}
                alt="separation line"
              />
            </div>

            <div className={classes.productList}>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                align="center"
              >
                Nos Boissons
              </Typography>
              <ProductsListHome product="all-drinks" forWichProduct="drinks" />
              <Button href="/drinks" className={classes.seeMore}>
                Voir plus ...
              </Button>
            </div>
          </Box>
        </div>
      </Container>
    </>
  );
};

export default Accueil;
