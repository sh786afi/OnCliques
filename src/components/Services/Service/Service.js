import React from "react";

import classes from "./Service.module.css";

const service = props => {
  return (
    <div className={classes.Service}>
      <div className={classes.ServiceImg}>
        <img src={props.imagePath} alt="serviceImage" />
        <p className={classes.ServiceText}>{props.serviceName}</p>
      </div>
    </div>
  );
};

export default service;
