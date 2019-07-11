import React from "react";
import Modal from "../UI/Modal/Modal";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import classes from "./LoginModal.module.css";
const loginModal = props => {
  return (
    <div className={classes.LoginModal}>
      <Modal>
        <h1>Login/Signup</h1>
        <br />
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <Input type="text" placeholder="Enter Username" />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <Input type="password" placeholder="Enter Password" />
        <Button btnType="Success">Login</Button>
        <Button btnType="Danger" clicked={props.btnCancel}>
          Cancel
        </Button>
      </Modal>
    </div>
  );
};

export default loginModal;
