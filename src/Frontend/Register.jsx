import React from 'react'
import { Link } from 'react-router-dom'

const register = () => {
  return (
    <div>
        
         <div className="container">
  <form className="well form-horizontal" action=" " method="post" id="contact_form">
    <fieldset>
        
      {/* Form Name */}
      <legend><center><h2><b>Registration Form</b></h2></center></legend><br />
      {/* Text input*/}
      <div className="form-group">
        <label className="col-md-4 control-label">Full Name</label>  
        <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
            <input name="first_name" placeholder="First Name" className="form-control" type="text" />
          </div>
        </div>
      </div>
       {/* Text input*/}
       <div className="form-group">
        <label className="col-md-4 control-label">E-Mail</label>  
        <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope" /></span>
            <input name="email" placeholder="E-Mail Address" className="form-control" type="text" />
          </div>
        </div>
      </div>
      {/* Text input*/}
      <div className="form-group">
        <label className="col-md-4 control-label"> Contact No.</label>  
        <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-earphone" /></span>
            <input name="contact_no" placeholder="(+91)" className="form-control" type="text" />
          </div>
        </div>
      </div>

       {/* Text input*/}
       <div className="form-group">
        <label className="col-md-4 control-label">Address</label>  
        <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-earphone" /></span>
            <input name="contact_no" placeholder="" className="form-control" type="textarea" />
          </div>
        </div>
      </div>

       {/* Text input*/}
       <div className="form-group">
        <label className="col-md-4 control-label">Date Of Birth</label>  
        <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-earphone" /></span>
            <input name="contact_no" placeholder="" className="form-control" type="date" />
          </div>
        </div>
      </div>
     
      <div className="form-group"> 
        <label className="col-md-4 control-label">Select Your Course</label>
        <div className="col-md-4 selectContainer">
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-list" /></span>
            <select name="department" className="form-control selectpicker">
              <option value>Select your Course</option>
              <option>Standard 5</option>
              <option>Standard 6</option>
              <option>Standard 7</option>
              <option>Standard 8</option>
              <option>Standard 9</option>
              <option>Standard 10</option>
              <option>Science</option>
              <option>Commerce</option>
              <option>Basic Coading</option>
            </select>
          </div>
        </div>
      </div>
     
      {/* Text input*/}
      <div className="form-group">
        <label className="col-md-4 control-label">Create Password</label> 
        <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
            <input name="user_password" placeholder="Password" className="form-control" type="password" />
          </div>
        </div>
      </div>
      {/* Text input*/}
      <div className="form-group">
        <label className="col-md-4 control-label">Confirm Password</label> 
        <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
            <input name="confirm_password" placeholder="Confirm Password" className="form-control" type="password" />
          </div>
        </div>
      </div>
     
      {/* Select Basic */}
      {/* Button */}
      <div className="form-group">
        <label className="col-md-4 control-label" />
        <div className="col-md-4"><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" className="btn btn-warning">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SUBMIT <span className="glyphicon glyphicon-send" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
        </div>
      </div>
    </fieldset>
  </form>
</div>
{/* /.container */}





    </div>
  )
}

export default register
