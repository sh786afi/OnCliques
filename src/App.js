import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import ServiceContainer from "./containers/ServiceContainer/ServiceContainer";
import classes from "./App.module.css";
class App extends Component {
  render() {
    return (
      <div>
        <Layout />
        <ServiceContainer />
      </div>
    );
  }
}

export default App;
