//wad in product

import * as React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

//Theme & Style
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import stylesDescription from "./ProductDescriptionStyles";
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

//Accordion

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }

useEffect(()=>{

  const fetchProduct = async()=>{
    const response = await fetch(`${process.env.REACT_APP_URL_API}/products/dish/${id}`);
    if(!response.ok){
      throw new Error("Error !")
    }
     const resData = await response.json();
     setProductData(resData);
     
    //  console.log(productData);
    }
    fetchProduct().catch((err)=>{ return sethttpError(err.message)});
  },[id])
  
  useEffect(()=>{
    if(productData){
      
      console.log(productData.nutrients);
      console.log(productData.ingredients);
  }
},[productData]);


  // useEffect(() => {
  //   const fetchproductData = async () => {
  //    const response = await fetch(`${process.env.REACT_APP_URL_API}/products/dish/${id}`);

  //     if (!response.ok) {
  //       throw new Error("Something went wrong")
  //     }

  //     const responseData = await response.json();
  //     setProductData(responseData)

  //     console.log(responseData)
  //   };

      
  //     fetchproductData().catch(error => {
  //       console.log(error)
  //       sethttpError(error.message)
  //     });;

  // }, [id]);

  console.log(productData)

  return (
    // <div>
    //     <Button>Retrou à la page précédente</Button>
    <Container className={classes.container}>
      {httpError && <p>Error</p>}
      {productData && (
        <Card sx={{ maxWidth: 1200 }} className={classes.card}>
          {/* <Paper  */}
          {/* className={classes.paperImage} */}
          {/* > */}
          <img
            className={classes.image}
            src={`${process.env.REACT_APP_URL_API}/uploads/images/dishes/${productData.image}`}
            alt={productData.name}
          />
          {/* </Paper> */}
          <Paper className={classes.main} elevation={20}>
            <CardContent className={classes.cardContent}>
              <Typography
                // gutterBottom
                component="div"
                className={classes.title}
              >
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
                  variant="body2"
                  component="div"
                  color="text.secondary"
                >
                  <strong className={classes.nutrientsList}>
                    Compositions :
                  </strong>

                  <p className={classes.nutrientsList}>
                    {productData.ingredients} ,
                  </p>
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
                      <strong>Nutriments</strong>
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
                            <TableRow
                              kkey={nutrient._id}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {nutrient.name}
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
                <Typography>Prix : {productData.price}$</Typography>
                <Typography>
                  Poids :{productData.weight}
                  Gr
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
    // </div>
  );
}
