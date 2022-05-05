import React from 'react'

const FacultyRequest = () => {
  return (
   <div>

<div>
      
      <div className="container-fluid pt-5">
  <div className="container">
    <div className="text-center pb-2">
    
      <h1 className="mb-4">Faculty Details To Appove </h1>
    </div>
    <div className="row">
      <div className="col-lg-4 mb-5">
        <div className="card border-0 bg-light shadow-sm pb-2">
        
          <div className="card-body text-center">
            <h4 className="card-title">Faculty Information</h4>
           
          </div>
          <div className="card-footer bg-transparent py-4 px-5">
            <div className="row border-bottom">
              <div className="col-6 py-1 text-right border-right"><strong>FName</strong></div>
              <div className="col-6 py-1">Vishwa</div>
            </div>
            <div className="row border-bottom">
              <div className="col-6 py-1 text-right border-right"><strong>MName</strong></div>
              <div className="col-6 py-1">Chaturvedi</div>
            </div>
           
            <div className="row">
              <div className="col-6 py-1 text-right border-right"><strong>LName</strong></div>
              <div className="col-6 py-1">Mehulbhai</div>
            </div>
          </div>

          <div className="row">
              <div className="col-6 py-1 text-right border-right"><strong>Email</strong></div>
              <div className="col-6 py-1">18bmiit127@gmail.com</div>
            </div>
          </div>

          <div className="row">
              <div className="col-6 py-1 text-right border-right"><strong>Contact</strong></div>
              <div className="col-6 py-1">9974530278</div>
            </div>

            <div className="row">
              <div className="col-6 py-1 text-right border-right"><strong>Address</strong></div>
              <div className="col-6 py-1">RAJHANS TOWER - SURAT</div>
            </div>

            <div className="row">
              <div className="col-6 py-1 text-right border-right"><strong>DateOfBirth</strong></div>
              <div className="col-6 py-1">13-02-2000</div>
            </div>

            <div className="row">
              <div className="col-6 py-1 text-right border-right"><strong>Experience</strong></div>
              <div className="col-6 py-1">2 Years</div>
            </div>

            <div className="row">
              <div className="col-6 py-1 text-right border-right"><strong>RearPfInterese</strong></div>
              <div className="col-6 py-1">English</div>
            </div>

            <div className="row">
              <div className="col-6 py-1 text-right border-right"><strong>Qualification</strong></div>
              <div className="col-6 py-1">Msc.It</div>
            </div>
          </div>

          </div>
          
          <div>
          <button type="submit" className="btn btn-outline-primary">
                    {" "}
                    Accept
                  </button>
               
      
          </div>
          <div>
          <button type="submit" className="btn btn-outline-primary">
                    {" "}
                    Reject
                  </button>
               
      
          </div>
        </div>
      </div>
      
     
    

    </div>

   </div>  )
}

export default FacultyRequest
