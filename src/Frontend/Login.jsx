import React from 'react' 
import { Link } from 'react-router-dom'

const login = () => {
  return (
    <div>
  
  

    <div class="container-fluid pt-5">
        <div class="container">
            <div class="text-center pb-2">
                <p class="section-title px-5"><span class="px-2">Login here</span></p>
                
                
            </div>
            <center>
            <div class="row">
                <div class="col-lg-7 mb-5">
                    <div class="contact-form">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div class="control-group">
                            <label className="col-md-4 control-label"> USERNAME</label>
                                <input type="text" class="form-control" id="name" placeholder="UserName" required="required" data-validation-required-message="Please enter your name" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                            <label className="col-md-4 control-label">PASSWORD </label>
                                <input type="email" class="form-control" id="pass" placeholder="Password" required="required" data-validation-required-message="Please enter your password " />
                                <p class="help-block text-danger"></p>
                            </div>
                           
                           
                            <div>
                                <button class="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
               
            </div>
            </center>
        </div>
    </div>
    

</div>

  )
}

export default login
