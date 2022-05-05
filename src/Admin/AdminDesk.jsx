import React from 'react'
import { Link } from 'react-router-dom'
const AdminDesk = () => {
  return (
    <div>
      <div>
      <center>
  <div style={{backgroundColor: 'darkseagreen', display: 'block' ,width:'100%',marginLeft:'250%',fontStyle:'oblique',fontSize:'30px'}}>ADMIN DESK</div>
  </center>
      </div>
      <br></br>
      <center>
  <div style={{ display: 'block' ,width:'100%',marginLeft:'250%',fontSize:'30px'}}>FACULTY REQUEST</div>
  </center>
      
      <div>
  <style dangerouslySetInnerHTML={{__html: "\n.card {\n  box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2);\n  transition: 0.3s;\n  width: 80%;\n}\n\n.card:hover {\n  box-shadow: 0 12px 20px 0 rgba(0,0,0,0.2);\n}\n\n.container {\n  padding: 8px 20px;\n}\n" }} />
  
  <div className="card">
    <img src="img/img_avatar.jpg" alt="Avatar" style={{width: '100%'}} />
    <div className="container">
      <h4><b>vishwa chaturvedi</b></h4> 
      <p>Architect &amp; Engineer</p> 
     
      <center>
      <Link to="/FacultyRequest" className="btn btn-primary">VIEW</Link>
      </center>


    </div>
  </div>
</div>



    </div>
  )
}

export default AdminDesk