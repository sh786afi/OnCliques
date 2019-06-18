import React from "react";
import classes from "./ServiceCardImage.module.css";

const serviceCardImage = props => {
  return (
    <div className={classes.ServiceCardImage}>
      <h2>{props.ServiceName}</h2>
      <img src={props.ServiceCardImage} />
    </div>
  );
};

export default serviceCardImage;
