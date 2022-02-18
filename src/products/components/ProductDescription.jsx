import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";

//Theme & Style
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import stylesDescription from "./ProductDescriptionStyles";
//Icon
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
//Components
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
//Accordion
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//Tabel
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
//Translation
import { useTranslation } from "react-i18next";

import BasketContext from "../../shared/context/basket-context";
import ErrorAlert from "../../shared/UIElements/ErrorAlert"

const useStyles = makeStyles(stylesDescription);


export default function ProductDescription(props) {
  const basketCtx = useContext(BasketContext);
  const { id } = useParams();
  const classes = useStyles();
  //Translation
  const { t } = useTranslation("nutrients");

  //Add & substract
  const [itemCount, setItemCount] = useState(1);
  const [productData, setProductData] = useState(null);
  const [httpError, sethttpError] = useState(null);


  const onAddProductButton = () => {
    basketCtx.addProduct({
      id: productData._id, 
      name: productData.name, 
      price: productData.price, 
      quantity: +itemCount, 
    })
  }


  //FETCH PRODUCT FROM API
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_URL_API}/products/${props.productInUrl}/${id}`
      );
      if (!response.ok) {
        throw new Error("Une erreur s'est produite lors du chargement de la description du produit!");
      }
      const resData = await response.json();
      setProductData(resData);
    };
    fetchProduct().catch(err => {
      return sethttpError(err.message);
    });
  }, [id, props.productInUrl]);

  return (
    <div>
      <Button
        className={classes.backButton}
        startIcon={<ArrowBackIosIcon color="action" />}
      >
        <Link to={`/${props.imgUrl}`}>Retour à la page précédente</Link>
      </Button>
      <Container fixed>
        {httpError && <ErrorAlert message={httpError}/>}
        {productData && (
          <div sx={{ maxWidth: 1200 }} 
          // className={classes.card}
          >
            <img
              className={classes.image}
              src={`${process.env.REACT_APP_URL_API}/uploads/images/${props.imgUrl}/${productData.image}`}
              alt={productData.name}
            />
            <Paper className={classes.main} elevation={20}>
              <CardContent className={classes.cardContent}>
                <Typography className={classes.title}>
                  {productData.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className={classes.description}
                >
                  {productData.description}
                </Typography>
                <div className={classes.composants}>
                  {/* *******Ingredients***** */}
                  <Typography
                    className={classes.ingredientsTypo}
                    variant="body2"
                    component="div"
                    color="text.secondary"
                  >
                    <strong className={classes.ingredientsList}>
                      Compositions :
                    </strong>

                    <p>{productData.ingredients}</p>
                  </Typography>

                  {/* Accodion for nutriments */}
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      id="panel1bh-header"
                    >
                      <Typography sx={{ color: "success" }}>
                        <strong className={classes.ingredientsList}>
                          Nutriments
                        </strong>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell>Nutriments</TableCell>
                              <TableCell align="right">mg Pour 100g </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {productData.nutrients.map(nutrient => (
                              <TableRow
                                key={nutrient._id}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell component="th" scope="row">
                                  {t(nutrient.name)}
                                </TableCell>
                                <TableCell align="right">
                                  {nutrient.quantity}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className={classes.priceWeight}>
                  <Typography className={classes.price}>
                    <strong className={classes.stPriceWeight}>Prix :</strong>{" "}
                    {productData.price} €
                  </Typography>
                  <Typography className={classes.weight}>
                    <strong className={classes.stPriceWeight}>Poids :</strong>{" "}
                    {productData.weight} g
                  </Typography>
                </div>
              </CardContent>
              <CardActions className={classes.cardActions}>
                <div>
                  <div className={classes.buttonGroup}>
                    <Button
                      variant="outlined"
                      className={classes.button}
                      onClick={() => {
                        if (itemCount === 1) return;
                        setItemCount(prevCount => prevCount - 1);
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Badge className={classes.number} badgeContent={itemCount}>
                      <ShoppingBasketIcon color="action" />
                    </Badge>

                    <Button
                      className={classes.button}
                      variant="outlined"
                      onClick={() => {
                        setItemCount(prevCount => prevCount + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </div>
                </div>
                <Button
                  className={classes.button}
                  variant="outlined"
                  startIcon={<AddShoppingCartIcon color="action" />}
                  onClick={onAddProductButton}
                >
                  Ajouter au panier
                </Button>
              </CardActions>
            </Paper>
          </div>
        )}
      </Container>
    </div>
  );
}
