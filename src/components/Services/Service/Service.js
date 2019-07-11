import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Service.module.css";

const service = props => {
  return (
    <div className={classes.Service}>
      <div className={classes.ServiceImg}>
        <NavLink to={props.link} exact>
          <img src={props.imagePath} alt="serviceImage" />
          <p className={classes.ServiceText}>{props.serviceName}</p>
        </NavLink>
      </div>
    </div>
  );
};

export default service;
