import React from 'react'

const About_us = () => {
  return (
    <div>
     <div className="container-fluid py-5">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-5">
        <img className="img-fluid rounded mb-5 mb-lg-0" src="img/about-1.jpg" alt />
      </div>
      <div className="col-lg-7">
        <p className="section-title pr-5"><span className="pr-2">Learn About Us</span></p>
       
        <p>xyz</p>
        <div className="row pt-2 pb-4">
          <div className="col-6 col-md-4">
            <img className="img-fluid rounded" src="img/about-2.jpg" alt />
          </div>
          <div className="col-6 col-md-8">
            <ul className="list-inline m-0">
              <li className="py-2 border-top border-bottom"><i className="fa fa-check text-primary mr-3" />xyz 1</li>
              <li className="py-2 border-bottom"><i className="fa fa-check text-primary mr-3" />xyz 2</li>
              <li className="py-2 border-bottom"><i className="fa fa-check text-primary mr-3" />xyz3</li>
            </ul>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default About_us
