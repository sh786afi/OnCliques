import React from "react";
import classes from "./Logo.module.css";
import onCliquesLogo from "../../../assets/images/OnCliques-Logo.png";
import Aux from "../../../hoc/Aux/Aux";
const logo = () => {
  return (
    <Aux>
      <div className={classes.Logo}>
        <h1>
          <span className={classes.highlight}>On</span>Cliques
        </h1>
      </div>
    </Aux>
  );
};

export default logo;
