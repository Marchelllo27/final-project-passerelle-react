import * as React from "react";

import { Paper, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

import classes from "./ProductItemHome.module.css";
const useStyles = makeStyles({
   
  productItem: {
    transition: "all 0.2s linear",
    outline: "6px solid transparent",
    outlineOffset: "-4px",
    "&:hover": {
      transform: "scale(1.1)",
      outline: "6px solid #78bf35",
    },
  },
  addToBasketBox: {
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    width: "40px",
    height: "40px",
    "border-radius": "50%",
    border: "1px solid var(--main-color)",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#78bf35",
    },
    "& svg": {
      color: "#78bf35",
      "font-size": "1.2rem",
    },
    "&:hover svg": {
      color: "#fff",
    },
  },
});

const ProductItem = (props) => {
  const style = useStyles();

  const { _id: id, name, image } = props.product;

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Link to={`/${props.pluralProductWord}/${id}`}>
        <Paper
          className={style.productItem}
          sx={{ overflow: "hidden" }}
          elevation={3}
        >
          <article >
            <img
              src={`https://final-project-la-passerelle.herokuapp.com/uploads/images/${props.pluralProductWord}/${image}`}
              alt={name}
              className={classes.productImage}
            />
            <div className={classes.description}>
              {/* name of product */}
              <div className={classes.productTitle}>
                <h3>{name}</h3>
              </div>
              {/* price and add button */}
              <div className={classes.actionControl}>
              </div>
            </div>
          </article>
        </Paper>
      </Link>
    </Grid>
  );
};

export default ProductItem;
