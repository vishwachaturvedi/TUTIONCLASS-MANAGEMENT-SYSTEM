import React from 'react' 
import { Link } from 'react-router-dom'
import ForgotPass from './ForgotPass'

const login = () => {
  return (
    <div>
  
  
  <div className="container-fluid py-5">
    <div className="container p-0">
      <div className="text-center pb-2">
        <p className="section-title px-5"><span className="px-2">Login In To Your Profile</span></p>
        
      </div>
    </div>
  </div>

  <div className="container"  >
     <div className="offset-sm-4">
        <div className="row align-items-center">
     
      <div className="col-lg-5">
        <div className="card border-0">
          <div className="card-header bg-secondary text-center p-4">
            <h1 className="text-white m-0">Login</h1>
          </div>
          <div className="card-body rounded-bottom bg-primary p-9">
            <form>
              <div className="form-group">
                <label> UserName</label>
                <input type="text" className="form-control border-0 p-4" required="required" />
              </div>
              <div className="form-group">
              <label> Password</label>
                <input type="password" className="form-control border-0 p-4"  required="required" />
              </div>
              <div>
                <button className="btn btn-secondary btn-block border-0 py-3" type="submit">Submit</button>
              </div>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  

</div>

  )
}

export default login
