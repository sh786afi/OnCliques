import React from "react";
import ServiceCardImage from "./ServiceCardImage/ServiceCardImage";
import serviceImg from "../../assets/images/service.jpg";
import ServiceCardGrid from "./ServiceCardGrid/ServiceCardGrid";
import classes from "./ServiceCard.module.css";
import serviceItem from "../../assets/images/foot.png";
const serviceCard = props => {
  return (
    <div className={classes.ServiceCard}>
      <ServiceCardImage
        ServiceCardImage={serviceImg}
        ServiceName="Saloon At Home"
      />
      <div className={classes.ServiceCardGrid}>
        <ServiceCardGrid serviceItem={serviceItem} ServiceName="Foot Massage" />
        <ServiceCardGrid serviceItem={serviceItem} ServiceName="Foot Massage" />
        <ServiceCardGrid serviceItem={serviceItem} ServiceName="Foot Massage" />
        <ServiceCardGrid serviceItem={serviceItem} ServiceName="Foot Massage" />
        <ServiceCardGrid serviceItem={serviceItem} ServiceName="Foot Massage" />
        <ServiceCardGrid serviceItem={serviceItem} ServiceName="Foot Massage" />
      </div>
    </div>
  );
};

export default serviceCard;
