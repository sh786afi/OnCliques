import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../Navigation/Logo/Logo";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
const toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <Logo />
      <Input type="text" placeholder="Search Services Here" />
      <Button btnType="Login">Login</Button>
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
