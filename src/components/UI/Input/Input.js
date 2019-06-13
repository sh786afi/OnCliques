import React from "react";
import classes from "./Input.module.css";

const input = props => {
  return (
    <div>
      <input
        className={classes.Input}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.changed}
      />
    </div>
  );
};

export default input;
