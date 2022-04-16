import React from 'react'
import { Link } from 'react-router-dom'

const New_or_reg = () => {

 
  return (
    <div className='img' >
     <center>
  <style dangerouslySetInnerHTML={{__html: "\n.btn-group button {\n  background-color: #6495ED; /* blue background */\n  border: 9px solid blue; /* blue border */\n  color: white; /* White text */\n  padding: 50px 64px; /* Some padding */\n  cursor: pointer; /* Pointer/hand icon */\n  float: left; /* Float the buttons side by side */\n}\n\n/* Clear floats (clearfix hack) */\n.btn-group:after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n.btn-group button:not(:last-child) {\n  border-right: none; /* Prevent double borders */\n}\n\n/* Add a background color on hover */\n.btn-group button:hover {\n  background-color: #BA55D3;\n}\n" }} />
  <h1>Welcome To VS1 Tuition classes </h1>
  <><br /></>
  <h2>Start Your Bright Future  </h2>
<><br /></>
  
  <br></br>

  <div class="row">
      <div class="col-sm-6"><div className="card" style={{width: '18rem',marginLeft:"50%"}}>
  <img src="img/login.jpg" className="card-img-top" alt="..."  style={{width: '10rem', marginLeft:'80px'}}  />
  <div className="card-body">
    <h5 className="card-title">Journy to your bright Future</h5>
    <p className="card-text">Login to your profile.</p>
    <Link to="/login" className="btn btn-primary">Login </Link>
  </div>
</div></div>
      <div class="col-sm-6"><div className="card" style={{width: '18rem',marginRight:"50%"}}>
  <img src="img/regis.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title"> Kick Start Your Journy </h5>
    <p className="card-text">Register Your Self To Get Started.</p>
    <Link to="/register" className="btn btn-primary">New Admission</Link>
  </div>
</div></div>
    </div>
  




</center>

</div>

  
    
  

    
  )
}

export default New_or_reg
