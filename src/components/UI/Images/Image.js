import React from "react";
import classes from "./Image.module.css";
import SlideImage1 from "../../../assets/images/slideImage1.jpg";
const image = () => {
  return (
    <div className={classes.SlideImage1}>
      <img src={SlideImage1} alt="image1" />
    </div>
  );
};

export default image;
