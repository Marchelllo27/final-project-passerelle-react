import React from "react";
// import {Slide} from "react-slideshow-image";

import classes from "./SlideShow.module.css";
// import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "/salade-concombres.jpeg",
    caption: "Nos Plats",
  },
  {
    url: "/opera.jpg",
    caption: "Nos Desserts",
  },
  {
    url: "/pamplemousse.jpeg",
    caption: "Nos Boissons",
  },
];

const Slideshow = () => {
  return (
    <div className={classes.containerSlide}>
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className={classes.eachSlide} key={index}>
              <img src={slideImage.url} alt="dish" />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;