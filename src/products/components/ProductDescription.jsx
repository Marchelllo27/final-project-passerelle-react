//wad in product

import * as React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Theme & Style
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import stylesDescription from "./ProductDescriptionStyles";
//Icon
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
//Components
// import Link from "@mui/material/Link";
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




const useStyles = makeStyles(stylesDescription);
export default function ProductDescription(props) {
  const { id } = useParams();

  //Styles
  const classes = useStyles();

  //Add & substract
  const [itemCount, setItemCount] = useState(1);
  const [productData, setProductData] = useState(null);
  const [httpError, sethttpError] = useState(null);

  //Accordion

  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }

//Translation
const { t } = useTranslation("nutrients");

//state
useEffect(() => {
  const fetchProduct = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_URL_API}/products/${props.productInUrl}/${id}`
    );
    if (!response.ok) {
      throw new Error("Error !");
    }
    const resData = await response.json();
    setProductData(resData);

    //  console.log(productData);
    }
    fetchProduct().catch((err)=>{ return sethttpError(err.message)});
  },[id, props.productInUrl])
  
  //state for productData changes
  useEffect(()=>{
    if(productData){
      
      console.log(productData.nutrients);
      console.log(productData.ingredients);
  }
},[productData]);



  // console.log(productData);

  return (
    <div>
      <Button
        className={classes.backButton}
        startIcon={<ArrowBackIosIcon color="action" />}
      >
        <Link
          to={`/${props.imgUrl}`}
          // underline="hover"
        >
          Retour à la page précédente
        </Link>
      </Button>
      <Container
        // className={classes.container}
        fixed
      >
        {httpError && <p>Error</p>}
        {productData && (
          <Card sx={{ maxWidth: 1200 }} className={classes.card}>
            {/* <Paper  
             className={classes.paperImage} 
             > */}
            <img
              className={classes.image}
              src={`${process.env.REACT_APP_URL_API}/uploads/images/${props.imgUrl}/${productData.image}`}
              alt={productData.name}
            />
            {/* </Paper>   */}
            <Paper className={classes.main} elevation={20}>
              <CardContent className={classes.cardContent}>
                <Typography  className={classes.title}>
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
                  <Accordion onChange={handleChange("panel1")}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      // aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      {/* <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      Nutriments :
                    </Typography> */}
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
                              <TableCell align="right">Pour 100g </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {productData.nutrients.map((nutrient) => (
                              // let nutrientNAme =()=>{
                              //    if(nutrient.name){
                              //   let name = nutrient.name;
                              //   t(name) }
                              //                           }
                              <TableRow
                                kkey={nutrient._id}
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
        )}
      </Container>
    </div>
  );
}
