import React, { Component } from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import classes from "./ServiceGridContainer.module.css";
class ServiceGridContainer extends Component {
  render() {
    return (
      <div className={classes.ServiceGridContainer}>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    );
  }
}

export default ServiceGridContainer;
