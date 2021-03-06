import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => {
  return (
    <div className={classes.NavigationItems}>
      <NavigationItem link="/orders">My Orders</NavigationItem>
      <NavigationItem link="/logout">Logout</NavigationItem>
      <NavigationItem link="/cart">
        <span>
          <i className="fas fa-cart-plus" />
        </span>
      </NavigationItem>
    </div>
  );
};

export default navigationItems;
