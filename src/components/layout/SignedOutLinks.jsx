import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <>
        <NavLink className="nav-item nav-link" to='/createAccount'>Signup</NavLink>
      <NavLink className="nav-item nav-link" to="/">Login</NavLink>
    </>
  )
}

export default SignedOutLinks