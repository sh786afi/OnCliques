import React from "react";
import Service from "./Service/Service";
import Service1 from "../../assets/images/service1.png";
import classes from "./Services.module.css";

const services = props => {
  return (
    <div className={classes.Services}>
      <Service imagePath={props.imagePath} serviceName={props.serviceName} />
    </div>
  );
};

export default services;
