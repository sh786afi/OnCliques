import React, { Component } from "react";
import { serviceData } from "../../serviceData";
import Services from "../../components/Services/Services";
import classes from "./ServiceContainer.module.css";
import axios from "axios";

class ServiceContainer extends Component {
  state = {
    services: []
  };
  componentDidMount() {
    this.setState({ services: serviceData });
  }
  render() {
    return (
      <div className={classes.ServiceContainer}>
        {this.state.services.map(service => {
          return (
            <Services
              imagePath={service.img}
              serviceName={service.serviceName}
              key={service.id}
              link={service.link}
            />
          );
        })}
      </div>
    );
  }
}

export default ServiceContainer;
