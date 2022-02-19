import React, { useContext } from "react";
import ProductsListHome from "./../components/ProductListHome";
//Mui
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import SlideShow from "../components/SlideShow";
import { Button, Container } from "@mui/material";
//Icons
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import Filter7Icon from "@mui/icons-material/Filter7";
//Theme & Style
import { makeStyles } from "@mui/styles";
import "animate.css";
import AccueilStyles from "./AccueilStyles";

import AuthContext from "../../shared/context/auth-context";
import SuccessSnackbar from "../../shared/UIElements/SuccessSnackbar";

const useStyles = makeStyles(AccueilStyles);

const Accueil = props => {
  const authCtx = useContext(AuthContext);

  const classes = useStyles();

  const closeSuccess = data => {
    authCtx.hideSuccessModal();
  };

  return (
    <>
      {authCtx.showSuccess && (
        <SuccessSnackbar
          message="Votre commande a été transmise"
          closeModal={closeSuccess}
        />
      )}
      <Container className={classes.container}>
        <Card className={classes.slider1}>
          <div className={classes.slider1Content}>
            <Typography variant="h4">Goutez à la qualité supérieur </Typography>
            <Typography>
              Des œufs de poules élevées en plein air, pour assurer le bien-être
              animal Un saumon label ASC, pour une méthode d'élevage durable
              Bœuf, agneau, et poulet origine France, pour soutenir nos éleveurs
              bleu-blanc-rouge
              <br /> LIVRAISON ÉTHIQUE Ne sont-ils pas beaux nos vélos et
              triporteurs électriques , sillonnant Paris ? Nous, on les adore et
              nos employés aussi. Car oui, nos livreurs sont salariés et nous en
              sommes fiers.
            </Typography>
          </div>
          <div className={classes.imgContainer}>
            <img
              src="/item-slider.png"
              alt="fruit orange"
              className={classes.img}
            />
          </div>
        </Card>

        <div className={classes.serviceLayout}>
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

        <SlideShow />

        <div className={classes.blocks}>
          <Typography component="div" className={classes.aboutUs}>
            <p align="center">CUISINE DU JOUR BONJOUR</p>
            <p align="center">
              Oui comme des poules au plein air, c'est à l'aube qu'on
              sélectionne les produits qui viendront composer vos plats ou nos
              jus pressés à froid.
            </p>
          </Typography>
          <Typography align="center" className={classes.aboutUs}>
            Parce qu'on sait que votre humeur dépend un peu de ce repas, nos
            plats sont pensés pour tous les fans du manger sain. Ceux qui
            comptent dessus pour continuer leur journée rassasié, énergique et
            léger : c'est d'ailleurs ce qui nous a inspiré. Et après, s'il vous
            en reste, partagez ou conservez, on vous le garantit c'est frais.
          </Typography>

          <Typography align="center" className={classes.aboutUs}>
            Tous nos déchets alimentaires sont compostés et recyclés pour
            fertiliser les sols d'Ile-de-France
            <span role="img" aria-label="tree leaf">
              🌱
            </span>
          </Typography>
          <img src="/frame.png" alt="separation line" />
          <Box sx={{width: "100%"}}>
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
                src="/frame.png"
                style={{width: "100%"}}
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
                src="/frame.png"
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
