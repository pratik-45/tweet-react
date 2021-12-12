import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    name: '',
    gender: '',
    dob: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { user, authError } = this.props;
    if (user) return <Redirect to='/' /> 
    return (
      <div className="container">
        <div className="account-create">
        <h3 id="title">Join Sweeter today.</h3>
        <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
        <br />
        <form method="post" onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
            placeholder="Full Name"
          />
          <br />
          <input
            className="form-control form"
            type="text"
            name="username"
            id="username"
            onChange={this.handleChange}
            placeholder="Username"
          />
          <br />
          <input
            className="form-control form"
            type="email"
            name="email"
            id="email"
            onChange={this.handleChange}
            placeholder="Email"
          />
          <br />
          <input
            className="form-control"
            type="password"
            name="pass"
            id="pass"
            onChange={this.handleChange}
            placeholder="Password"
          />
          <br />
          <label htmlFor="dob">DOB</label>
          <input
            className="form-control"
            type="date"
            name="dob"
            id="dob"
          />
          <br />
          <label htmlFor="gender">Gender</label>
          <select
            className="form-control"
            v-model="accountInfo.gender"
            name="gender"
            onChange={this.handleChange}
            id="gender"
          > 
            <option value="0">male</option>
            <option value="1">female</option>
            <option value="2">other</option>
          </select>
          <br />
          <input
            type="button"
            className="form-control"
            id="btn"
            value="Sign up"
            onClick={this.handleSubmit}
          />
          <p>
            By Signing up you agree to the
            <b className="red-color">Terms of Service</b> and
            <b className="red-color"> Privacy Policy.</b>
            <br />
            Others will be able to find you by email or phone number when
            provided.
          </p>
        </form>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
