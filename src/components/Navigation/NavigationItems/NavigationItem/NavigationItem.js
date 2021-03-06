import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.css";
const navigationItem = props => {
  return (
    <ul>
      <li className={classes.NavigationItem}>
        <NavLink to={props.link} exact>
          {props.children}
        </NavLink>
      </li>
    </ul>
  );
};

export default navigationItem;
