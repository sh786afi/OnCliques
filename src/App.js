import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import ServiceContainer from "./containers/ServiceContainer/ServiceContainer";
import classes from "./App.module.css";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import ServiceGridContainer from "./containers/ServiceGridContainer/ServiceGridContainer";
import Login from "./containers/Login/Login";
import ProductContainer from "./containers/ProductContainer/ProductContainer";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route to="/" exact component={Login} />
        </Switch>
        <Layout />
        <ServiceContainer />
        <ServiceGridContainer />
      </div>
    );
  }
}

export default App;
