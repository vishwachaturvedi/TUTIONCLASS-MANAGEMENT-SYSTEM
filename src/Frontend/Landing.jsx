import React from 'react'
import { Link } from 'react-router-dom'

const landing = () => {
  return (
    <div>
  <div className="container-fluid bg-primary px-0 px-md-5 mb-5">
  <div className="row align-items-center px-3">
    <div className="col-lg-6 text-center text-lg-left">
      <h4 className="text-white mb-4 mt-5 mt-lg-0"> Your Learning Center</h4>
      <h1 className="display-3 font-weight-bold text-white">New Approach to Education</h1>
      <p className="text-white mb-4"> Let's innovate to educate</p>
      <Link to="/register" className="btn btn-secondary mt-1 py-3 px-5">Register</Link>
    </div>
    <div className="col-lg-6 text-center text-lg-right">
      { <img className="img-fluid mt-5" src="img/header.png" alt /> }
    </div>
  </div>
</div>

    </div>
  )
}

export default landing
