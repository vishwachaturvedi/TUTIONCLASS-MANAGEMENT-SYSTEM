import React from 'react'

const AddFaculty = () => {
  return (
    <div>
      
      <div>
      <div className="container-fluid py-11">
    <div className="container p-5">
      <div className="text-center pb-2">
        <h1>FACULTY REGISTRATION Details</h1>
       
      </div>
    </div>
  </div>
 <div className="offset-sm-1">
  <div className="container p-8">
    <div className="row align-items-center">
     
      <div className="col-lg-8">
        <div className="card border-0">
          <div className="card-header bg-secondary text-center p-8">
            <h1 className="text-white m-0">Add Faculty Details</h1>
          </div>
          <div className="card-body rounded-bottom bg-primary p-14">
            <form>
              <div className="form-group">
                <label> Your Full Name</label>
                <input type="text" className="form-control border-0 p-4" placeholder="Your Name" required="required" />
              </div>
              <div className="form-group">
              <label> Email id</label>
                <input type="email" className="form-control border-0 p-4" placeholder="Your Email" required="required" />
              </div>

              <div className="form-group">
                <label> Gender</label><br/>
                <label> MALE</label><input type="radio"  required="required"/> <br/>
                <label> FEMALE</label><input type="radio"  required="required"/>
                </div>

                <div className="form-group">
                <label> Qualification</label>
                <input type="text" className="form-control border-0 p-4" placeholder="Your Qualification" required="required" />
              </div>

              <div className="form-group">
              <label> Your Area Of Interest</label>
                <select className="custom-select border-0 px-4" style={{height: 47}}>
                  <option selected>Area Of Intrest</option>
                  <option value={1}>Science</option>
                  <option value={2}>Maths </option>
                  <option value={3}>Languages </option>
                  <option value={4}>Business Studies</option>
                </select>
              </div>

              <div className="form-group">
                <label> Experience</label>
                <input type="text" className="form-control border-0 p-4" placeholder="Your Experience in teaching field" required="required" />
              </div>



              <div className="form-group">
                <label> Address</label>
                <input type="textarea" className="form-control border-0 p-4" placeholder="Your Address" required="required" />
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
    </div>
  )
}

export default AddFaculty
