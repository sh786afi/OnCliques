import React from "react";
import classes from "./ServiceCardGrid.module.css";
import ServiceCardImage from "../ServiceCardImage/ServiceCardImage";
const serviceCardGrid = props => {
  return (
    <div className={classes.ServiceItem}>
      <ServiceCardImage ServiceCardImage={props.serviceItem} />
      <p className={classes.ServiceItemText}>{props.ServiceName}</p>
    </div>
  );
};

export default serviceCardGrid;
