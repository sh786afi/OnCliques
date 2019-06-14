import React, { Component } from "react";
import { serviceData } from "../../serviceData";
import Services from "../../components/Services/Services";
import classes from "./ServiceContainer.module.css";

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
            />
          );
        })}
      </div>
    );
  }
}

export default ServiceContainer;
