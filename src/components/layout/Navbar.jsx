import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { user } = props;
  // console.log(auth);
  const links = user && user.firstname!="?" ? <SignedInLinks user={user} /> : <SignedOutLinks />;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
  <a className="navbar-brand" href="#">Sweeter</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      {links}
    </div>
  </div>
</nav>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: null,
    user: state.auth.user,
  }
}

export default connect(mapStateToProps)(Navbar)
