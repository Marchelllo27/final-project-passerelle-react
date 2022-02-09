import { Paper, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

import classes from "./ProductItem.module.css";
const useStyles = makeStyles({
  productItem: {
    transition: "all 0.2s linear",
    outline: "6px solid transparent",
    outlineOffset: "-4px",
    "&:hover": {
      transform: "scale(1.1)",
      outline: "6px solid #78bf35",
      // outlineOffset: "-2px",
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

const ProductItem = props => {
  const addProductHandler = event => {
    event.preventDefault();
    console.log("hello there");
  };

  const style = useStyles();

  const {
    _id: id,
    name,
    ingredients,
    nutrients,
    image,
    weight,
    description,
    type,
    price,
  } = props.product;

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Link to={`/product/${id}`}>
        <Paper
          className={style.productItem}
          sx={{ overflow: "hidden" }}
          elevation={3}
        >
          <article>
            <div className={classes.gram}>{`${weight}g`}</div>
            <img
              src={`https://final-project-la-passerelle.herokuapp.com/uploads/images/dishes/${image}`}
              alt={name}
              className={classes.productImage}
            />
            <div className={classes.description}>
              <div className={classes.productTitle}>
                <h3>{name}</h3>
              </div>

              <div className={classes.actionControl}>
                <span className={classes.price}>{price}€</span>
                <div className={style.addToBasketBox}>
                  <Tooltip title="Ajouter au panier" arrow>
                    <ShoppingCartIcon onClick={addProductHandler} />
                  </Tooltip>
                </div>
              </div>
            </div>
          </article>
        </Paper>
      </Link>
    </Grid>
  );
};

export default ProductItem;