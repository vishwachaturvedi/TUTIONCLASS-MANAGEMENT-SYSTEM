import React from 'react'

const AddSubject = () => {
  return (
    <div>
      
      <div className="container-fluid">
    <div className="container">
      <div className="text-center ">
      
        <h1 className="mb-4">ADD NEW SUBJECT</h1>
      </div>
    </div>
  </div>

  <div className="container" >
    <div className="row align-items-center">
     
      <div className="">
        <div className="card border-0">
          <div className="card-header bg-secondary text-center p-4">
            <h1 className="text-white m-0">Add Subject Details</h1>
          </div>
          <div className="card-body rounded-bottom bg-primary p-5">
            <form>
              <div className="form-group">
                <label> subject Name</label>
                <input type="text" className="form-control border-0 p-4" placeholder="Subject Name" required="required" />
              </div>
             

              <div className="form-group">
              <label> Add In Course </label>
                <select className="custom-select border-0 px-4" style={{height: 47}}>
                  <option selected>STANDARD</option>
                  <option value={1}>STANDARD 5</option>
                  <option value={2}>STANDARD 6 </option>
                  <option value={3}>STANDARD 7 </option>
                  <option value={4}>STANDARD 8</option>
                  <option value={5}>STANDARD 9</option>
                  <option value={6}>STANDARD 10</option>
                  <option value={7}>STANDARD 11</option>
                  <option value={8}>STANDARD 12</option>
                </select>
              </div>
              <div className="form-group">
                <label> Subject Description</label>
                <input type="textarea" className="form-control border-0 p-4" placeholder="Your Subject Description" required="required" />
              </div>

              <div className="form-group">
                <label> Fees per Subject</label>
                <input type="number" className="form-control border-0 p-4" placeholder="no. of seats" required="required" />
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
  )
}

export default AddSubject
