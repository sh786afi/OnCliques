import React, { Component } from "react";
import Aux from "../Aux/Aux";
import Toolbar from "../../components/Toolbar/Toolbar";
import Image from "../../components/UI/Images/Image";
class Layout extends Component {
  render() {
    return (
      <Aux>
        <Toolbar />
        <Image />
      </Aux>
    );
  }
}

export default Layout;
