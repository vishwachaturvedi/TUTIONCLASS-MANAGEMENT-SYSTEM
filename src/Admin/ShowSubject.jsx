import React from 'react'

const ShowSubject = () => {
  return (
    <div>
      <div className="container-sm">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Course Name</th>
              <th scope="col">Standard</th>
              <th scope="col">Seats</th>
              <th scope="col">Description</th>
              <th scope="col">Starting Date</th>
              <th scope="col">Ending Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          
             
                  <button type="submit" className="btn btn-outline-primary">
                    {" "}
                    Info
                  </button>
               
      
        
        </table>
      </div>

    </div>
  )
}

export default ShowSubject
