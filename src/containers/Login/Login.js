import React, { Component } from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import LoginModal from "../../components/LoginModal/LoginModal";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
class Login extends Component {
  state = {
    showLogin: false
  };
  onClickLoginButton = () => {
    this.setState({ showLogin: true });
  };
  onClickCancelButton = () => {
    this.setState({ showLogin: false });
  };
  render() {
    const showModal = this.state.showLogin ? (
      <LoginModal btnCancel={this.onClickCancelButton} />
    ) : null;
    const showBackdrop = this.state.showLogin ? (
      <Backdrop
        show={this.onClickCancelButton}
        clicked={this.onClickCancelButton}
      />
    ) : null;
    return (
      <div>
        <Toolbar loginClick={this.onClickLoginButton} />
        {showModal}
        {showBackdrop}
      </div>
    );
  }
}

export default Login;
