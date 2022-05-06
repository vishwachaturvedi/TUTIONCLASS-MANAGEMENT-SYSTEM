import React from 'react'

const Package = () => {
  return (
    <div>
      <center>
      <div className="container-fluid">
    <div className="container">
      <div className="text-center ">
      
        <h1 className="mb-4">ADD PACKAGE</h1>
      </div>
    </div>
  </div>

  <div className="container" >
    <div className="row align-items-center">
     
      <div className="">
        <div className="card border-0">
          <div className="card-header bg-secondary text-center p-4">
            
          </div>
          <div className="card-body rounded-bottom bg-primary p-5">
            <form>
              <div className="form-group">
                <label> Package Name</label>
                <input type="text" className="form-control border-0 p-4" placeholder="Package Name" required="required" />
              </div>
             

              <div className="form-group">
              <label> Subject ID  </label>
                <select className="custom-select border-0 px-4" style={{height: 47}}>
                  <option selected>Subject-id</option>
                  <option value={1}> 5</option>
                  <option value={2}> 6 </option>
                  <option value={3}> 7 </option>
                  <option value={4}> 8</option>
                  <option value={5}> 9</option>
                  <option value={6}> 10</option>
                  <option value={7}> 11</option>
                  <option value={8}> 12</option>
                </select>
              </div>
              <div className="form-group">
                <label> Package Description</label>
                <input type="textarea" className="form-control border-0 p-4" placeholder="Your Package Description" required="required" />
              </div>

              <div className="form-group">
                <label> Duration</label>
                <input type="number" className="form-control border-0 p-4" placeholder="Package Duration" required="required" />
              </div>

              <div className="form-group">
                <label> Fees:</label>
                <input type="number" className="form-control border-0 p-4" placeholder="Fees" required="required" />
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

  </center>
    </div>
  )
}

export default Package
