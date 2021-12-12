import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import icon from './red-tweet.png';

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const {authError,user} = this.props;
    if (user) return <Redirect to="/home" />;
    return (
      <div>
      <div className="container">
        <img src={icon} alt="" width="50" height="50" />
        <h3 id="title">Login in to Sweeter</h3>
        <form onSubmit={this.handleSubmit}>
        <div className="center red-text">
              {authError ? <p>{authError}</p> : null}
            </div>
          <br />
          <input
            className="form-control"
            type="text"
            name="username"
            id="email"
            placeholder="Email or username"
            onChange={this.handleChange}
          />
          <br />
          <input
            className="form-control"
            type="password"
            placeholder="password"
            name="pass"
            id="password"
            onChange={this.handleChange}
            v-model="loginInfo.pass"
          />
          <br />
          <input
            type="button"
            className="form-control"
            onClick={this.handleSubmit}
            value="Log in"
            id="btn"
          />
        </form>
      </div>
      <div className="options">
        <a className="option" href="#">Forgot password?</a>
        <a className="option" href="/createAccount">Sign up for Sweeter</a>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
