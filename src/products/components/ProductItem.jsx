import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { Paper, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

import classes from "./ProductItem.module.css";
import ProductItemStyles from "./ProductItemStyles";
import Modal from "../../shared/UIElements/Modal";
import AuthContext from "../../shared/context/auth-context";
import BasketContext from "../../shared/context/basket-context";

const useStyles = makeStyles(ProductItemStyles);

const ProductItem = props => {
  const authCtx = useContext(AuthContext);
  const basketCtx = useContext(BasketContext);
  const [showModal, setShowModal] = useState(false);

  const history = useHistory();

  const { _id: id, name, image, weight, price } = props.product;

  // ADD PRODUCT TO THE BASKET
  const addProductHandler = event => {
    event.preventDefault();
    basketCtx.addProduct({ id, name, price, quantity: 1 });
  };

  const onDeleteHandler = event => {
    event.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onUpdateHandler = event => {
    event.preventDefault();
    history.push(`/admin/product/update/${id}`)
    console.log(id);
  };

  const style = useStyles();

  return (
    <>
    {/* ----- MODAL FOR DELETE PRODUCT */}
      {showModal && (
        <Modal
          show={showModal}
          closeModal={closeModal}
          BackdropProps={{ productId: id }}
          typeOfProduct={props.singularProductWord}
          refreshProducts={props.onRefreshProducts}
        />
      )}
     
      {/* PRODUCT ITEM */}
      <Grid item xs={12} sm={6} md={3}>
        <Link to={`/${props.pluralProductWord}/${id}`}>
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
                src={`${process.env.REACT_APP_URL_API}/uploads/images/${props.pluralProductWord}/${image}`}
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
                  <span className={classes.price}>{price.toFixed(2)}€</span>
                  <Tooltip title="Ajouter au panier" arrow>
                    <div
                      className={style.addToBasketBox}
                      onClick={addProductHandler}
                    >
                      <ShoppingCartIcon />
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
