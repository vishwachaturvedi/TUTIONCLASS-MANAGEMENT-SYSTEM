import React from 'react'
import { Link } from 'react-router-dom'

const Work_with_us = () => {
  return (
    <>
    <div>
      <div className="container-fluid pt-5">
    <div className="container">
      <div className="text-center pb-2">
        <p className="section-title px-5"><span className="px-2">Our Teachers</span></p>
        <h1 className="mb-4">Meet Our Teachers</h1>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-3 text-center team mb-5">
          <div className="position-relative overflow-hidden mb-4" style={{borderRadius: '100%'}}>
            <img className="img-fluid w-100" src="img/team-1.jpg" alt />
            <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
              <a className="btn btn-outline-light text-center mr-2 px-0" style={{width: 38, height: 38}} href="#"><i className="fab fa-twitter" /></a>
              <a className="btn btn-outline-light text-center mr-2 px-0" style={{width: 38, height: 38}} href="#"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-outline-light text-center px-0" style={{width: 38, height: 38}} href="#"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <h4>Julia Smith</h4>
          <i>Music Teacher</i>
        </div>
        <div className="col-md-6 col-lg-3 text-center team mb-5">
          <div className="position-relative overflow-hidden mb-4" style={{borderRadius: '100%'}}>
            <img className="img-fluid w-100" src="img/team-2.jpg" alt />
            <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
              <a className="btn btn-outline-light text-center mr-2 px-0" style={{width: 38, height: 38}} href="#"><i className="fab fa-twitter" /></a>
              <a className="btn btn-outline-light text-center mr-2 px-0" style={{width: 38, height: 38}} href="#"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-outline-light text-center px-0" style={{width: 38, height: 38}} href="#"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <h4>Jhon Doe</h4>
          <i>Language Teacher</i>
        </div>
        <div className="col-md-6 col-lg-3 text-center team mb-5">
          <div className="position-relative overflow-hidden mb-4" style={{borderRadius: '100%'}}>
            <img className="img-fluid w-100" src="img/team-3.jpg" alt />
            <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
              <a className="btn btn-outline-light text-center mr-2 px-0" style={{width: 38, height: 38}} href="#"><i className="fab fa-twitter" /></a>
              <a className="btn btn-outline-light text-center mr-2 px-0" style={{width: 38, height: 38}} href="#"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-outline-light text-center px-0" style={{width: 38, height: 38}} href="#"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <h4>Mollie Ross</h4>
          <i>Dance Teacher</i>
        </div>
        <div className="col-md-6 col-lg-3 text-center team mb-5">
          <div className="position-relative overflow-hidden mb-4" style={{borderRadius: '100%'}}>
            <img className="img-fluid w-100" src="img/team-4.jpg" alt />
            <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
              <a className="btn btn-outline-light text-center mr-2 px-0" style={{width: 38, height: 38}} href="#"><i className="fab fa-twitter" /></a>
              <a className="btn btn-outline-light text-center mr-2 px-0" style={{width: 38, height: 38}} href="#"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-outline-light text-center px-0" style={{width: 38, height: 38}} href="#"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <h4>Donald John</h4>
          <i>Art Teacher</i>
        </div>
      </div>
    </div>
  </div>
<center>
  <Link to="/FacultyRegistration" className="btn btn-primary px-4">REGISTER HERE</Link>
  </center>
</div>
    </>
  )
}

export default Work_with_us
