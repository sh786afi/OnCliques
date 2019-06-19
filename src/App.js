import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import ServiceContainer from "./containers/ServiceContainer/ServiceContainer";
import classes from "./App.module.css";
import ServiceGridContainer from "./containers/ServiceGridContainer/ServiceGridContainer";
import Login from "./containers/Login/Login";
class App extends Component {
  render() {
    return (
      <div>
        <Login />
        <Layout />
        <ServiceContainer />
        <ServiceGridContainer />
      </div>
    );
  }
}

export default App;
