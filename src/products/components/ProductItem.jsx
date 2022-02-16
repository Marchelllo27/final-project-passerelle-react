import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Paper, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

import classes from "./ProductItem.module.css";
import ProductItemStyles from "./ProductItemStyles";
import AuthContext from "../../shared/context/auth-context";
import Modal from "../../shared/UIElements/Modal";

const useStyles = makeStyles(ProductItemStyles);

const ProductItem = props => {
  const authCtx = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  const { _id: id, name, image, weight, price } = props.product;

  // ADD PRODUCT TO THE BASKET
  const addProductHandler = event => {
    event.preventDefault();

  };

  const onDeleteHandler = event => {
    event.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  }

  const onUpdateHandler = event => {
    event.preventDefault();
    console.log(id);
  };

  const style = useStyles();


  

  return (
    <>
      <Grid item xs={12} sm={6} md={3}>
      {showModal && <Modal show={showModal} closeModal={closeModal} BackdropProps={{productId: id}}/>}
        <Link to={`/${props.forWichProduct}/${id}`}>
          <Paper
            className={style.productItem}
            sx={{ overflow: "hidden" }}
            elevation={3}
          >
            <article>
              {/* ADMIN BUTTONS */}
              {authCtx.isAdmin && (
                <div className={style.adminButtons} id={id}>
                  <DeleteIcon
                    className={style.deleteButton}
                    onClick={onDeleteHandler}
                  />
                  <ChangeCircleIcon
                    className={style.updateButton}
                    onClick={onUpdateHandler}
                  />
                </div>
              )}
              <div className={classes.gram}>{`${weight}g`}</div>
              <img
                src={`https://final-project-la-passerelle.herokuapp.com/uploads/images/${props.forWichProduct}/${image}`}
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
                  <span className={classes.price}>{price}€</span>
                  <Tooltip title="Ajouter au panier" arrow>
                    <div className={style.addToBasketBox}>
                      <ShoppingCartIcon onClick={addProductHandler} />
                    </div>
                  </Tooltip>
                </div>
              </div>
            </article>
          </Paper>
        </Link>
      </Grid>
    </>
  );
};

export default ProductItem;
