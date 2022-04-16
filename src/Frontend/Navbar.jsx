import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    
  <div className="container-fluid bg-light position-relative shadow">
  <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
    <a href className="navbar-brand font-weight-bold text-secondary" style={{fontSize: 50}}>
      <i className="flaticon-043-teddy-bear" />
      <span className="text-primary">VS1 TUITIONS</span>
    </a>
    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
      <div className="navbar-nav font-weight-bold mx-auto py-0">
        <Link to="/" className="nav-item nav-link active">Home</Link>
        <Link to="About_us" className="nav-item nav-link">About Us</Link>
        <Link to="Work_with_us" className="nav-item nav-link">Teach With Us  </Link>
        <Link to="Extra_facilities" className="nav-item nav-link">Extra Facilities</Link>
        <Link to="Our_courses" className="nav-item nav-link">Our Courses</Link>


        <div className="nav-item dropdown">
       

        </div>
        <Link to="Contact_us" className="nav-item nav-link">Contact Us</Link>
      
       

      </div>
      
      <Link to="New_or_reg" className="btn btn-primary px-4">Join Class</Link>
    </div>
  </nav>
</div>

    </div>
  )
}

export default Navbar
