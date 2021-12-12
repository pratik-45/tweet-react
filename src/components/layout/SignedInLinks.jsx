import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = (props) => {
  return (
    <>
      <NavLink className="nav-item nav-link" to="/home">Home</NavLink>
      <NavLink className="nav-item nav-link" to="/tweet">Create Tweet</NavLink>
      <NavLink className="nav-item nav-link" to="#" onClick={props.signOut} >Logout</NavLink>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
