import React from 'react'

const ShowSubject = () => {
  return (
    <div>
      <div className="container-sm">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Subject Name</th>
              <th scope="col">Standard</th>
              <th scope="col">Seats</th>
              <th scope="col"> Subjet Description</th>
              <th scope="col">Fees </th>
              <th scope="col">Taught By</th>
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
