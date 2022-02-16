//react
import * as React from "react";

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import imagePlat from "./salade-de-concombres-creme.jpeg";
import imageDessert from "./opera.jpg";
import imageBoisson from "./jus-de-pamplemousse-a-base-de-concentre.jpeg";

//mui
import Carousel from "react-material-ui-carousel";
import {
  Link,
  Button,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
//Theme & Style
import { makeStyles } from "@mui/styles";
// import stylesDescription from "./ImageSlideCss"

const useStyle = makeStyles({
  container: {
    paddingTop: "2rem",
  },
  slider: {
    width: "100%",
    height: "500px",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#a6b585b0",
  },
  image: {
    width: "70rem ! important",
    height: "20rem ! important",
    borderRadius: "1rem",
  },
  button: {
    background: "#a6b585b0",
  },
});

const ImageSlider = (props) => {
  //Styles
  const classes = useStyle();

  //Add & substract
  // const [productData, setProductData] = useState(null);
  // const [ingredient, setIngredient] = useState(null);
  // const [httpError, sethttpError] = useState(null);
  // const { id } = useParams();

  // //state
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const response = await fetch(
  //       `${process.env.REACT_APP_URL_API}/products/${props.productInUrl}/${id}`
  //     );
  //     if (!response.ok) {
  //       throw new Error("Error !");
  //     }
  //     const resData = await response.json();
  //     setProductData(resData);

  //     //  console.log(productData);
  //   };
  //   fetchProduct().catch((err) => {
  //     return sethttpError(err.message);
  //   });
  // }, [id, props.productInUrl]);
  // //state for productData changes
  // useEffect(() => {
  //   if (productData) {
  //     console.log(productData.nutrients);
  //     console.log(productData.ingredients);
  //   }
  // }, [productData]);

  let items = [
    {
      name: "Nos plat",
      description: "Goutez à la santé",
      image: imagePlat,
      redirect:"dishes"
    },
    {
      name: "Nos desserts",
      description: "Votre moment douceur",
      image: imageDessert,
    },
    {
      name: "Nos boisson",
      description: "Votre moment fraicheur",
      image: imageBoisson,
    },
  ];
  function Item(props) {
    return (
      // <Paper className={classes.paper}>
      //   <h2>{props.item.name}</h2>
      //   <p>{props.item.description}</p>
      //   <img src={`${props.item.image}`} />
      //   {/* <p>{`${process.env.REACT_APP_URL_API}/uploads/images/${props.imgUrl}/${productData.image}`}</p> */}

      //   <Button className="CheckButton">Voir plus ...</Button>
      // </Paper>

      //+++++++ImageListItem
      <ImageList
        className={classes.paper}
        // sx={{ width: 500, height: 450 }}
      >
        <ImageListItem key={props.item.image}>
          <Button href="{props.item.redirect}"></Button>
          <img
            className={classes.image}
            src={`${props.item.image}?w=248&fit=crop&auto=format`}
            srcSet={`${props.item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={props.item.name}
            loading="lazy"
          />
          <Link
            // href={`/${props.item.redirect}`}
            // href="/dishes"
          >

          <ImageListItemBar
            className={classes.item}
            title={props.item.name}
            // subtitle={item.author}
            // actionIcon={
            //   <IconButton
            //     sx={{ color: "rgba(255, 255, 255, 0.54)" }}
            //     aria-label={`info about ${props.item.name}`}
            //   >
            //     <InfoIcon />
            //   </IconButton>
            // }
          />
          </Link>
        </ImageListItem>
      </ImageList>
    );
    
  }
  return (
    <Container className={classes.container}>
      {/* {httpError && <p>Error</p>}
      {productData && (
        <> */}
      <Carousel
        className={classes.slide}
        // NextIcon={<RandomIcon />}
        // PrevIcon={<RandomIcon />}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      {/* </>
      )} */}
    </Container>
  );
}
export default ImageSlider;
