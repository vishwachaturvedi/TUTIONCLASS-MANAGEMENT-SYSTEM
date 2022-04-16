import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>

<div className="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5">
  
  <div className="container-fluid pt-5" style={{borderTop: '1px solid rgba(23, 162, 184, .2)'}}>
    <p className="m-0 text-center text-white">
     VS1 Tuitions © <Link className="text-primary font-weight-bold" to="VS1 Tuitions"></Link>.All Rights Reserved. Designed
      by vishwa  .
      
    </p>
  </div>
</div>

</div>
  )
}

export default Footer