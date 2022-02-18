//react
import * as React from "react";

import imagePlat from "./salade-de-concombres-creme.jpeg";
import imageDessert from "./opera.jpg";
import imageBoisson from "./jus-de-pamplemousse-a-base-de-concentre.jpeg";

//mui
import Carousel from "react-material-ui-carousel";
import {
  Button,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
//Theme & Style
import { makeStyles } from "@mui/styles";

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

      //+++++++ImageListItem
      <ImageList
        className={classes.paper}
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
         
          <ImageListItemBar
            className={classes.item}
            title={props.item.name}
          />
        
        </ImageListItem>
      </ImageList>
    );
    
  }
  return (
    <Container className={classes.container}>
      <Carousel
        className={classes.slide}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Container>
  );
}
export default ImageSlider;
