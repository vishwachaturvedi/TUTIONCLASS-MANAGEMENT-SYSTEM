import React from 'react';
import './App.css';
import {Routes, Route } from "react-router-dom";
import Frontend from './Frontend/Frontend';
import Landing from './Frontend/Landing';
import Login from './Frontend/Login';
import New_or_reg from './Frontend/New_or_reg';
import Register from './Frontend/Register';
import About_us from './Frontend/About_us';
import Contact_us from './Frontend/Contact_us';
import Extra_facilities from './Frontend/Extra_facilities';
import Work_with_us from './Frontend/Work_with_us';
import Our_courses from './Frontend/Our_courses';
import Admindemo from './Admin/Admindemo';
import AdminDesk from './Admin/AdminDesk';
import Studentdemo from './Student/Studentdemo';
import StudentDesk from './Student/StudentDesk';
import Facultydemo from './Faculty/Facultydemo';
import FacultyDesk from './Faculty/FacultyDesk';
import ShowFaculty from './Admin/ShowFaculty';
import AddCourse from './Admin/AddCourse';
import FacultyRegistration from './Frontend/FacultyRegistration';
import AddSubject from './Admin/AddSubject';
import ShowSubject from './Admin/ShowSubject';

function App() {
  return (
      <>
      <div className="App">
      <Routes>
        <Route path="/" element={<Frontend />}>
          <Route index element={<Landing />} />
          <Route path="Login" element={< Login />} />
          <Route path="New_or_reg" element={< New_or_reg />} />
          <Route path="Register" element={< Register />} />
          <Route path="About_us" element={< About_us />} />
          <Route path="Contact_us" element={< Contact_us />} />
          <Route path="Extra_facilities" element={< Extra_facilities />} />
          <Route path="Work_with_us" element={< Work_with_us />} />
          <Route path="Our_courses" element={< Our_courses />} />
          <Route path="FacultyRegistration" element={< FacultyRegistration />} />
        </Route>

        <Route path="/Admindemo" element={<Admindemo />}>
           <Route index element={<AdminDesk />} />
           <Route path="ShowFaculty" element={< ShowFaculty />} />
           <Route path="AddCourse" element={< AddCourse />} />
           <Route path="AddSubject" element={< AddSubject />} />
           <Route path="ShowSubject" element={< ShowSubject />} />

        </Route>
        <Route path="/Studentdemo" element={<Studentdemo />}>
           <Route index element={<StudentDesk />} />
        </Route>
        <Route path="/Facultydemo" element={<Facultydemo />}>
           <Route index element={<FacultyDesk />} />
        </Route>
        {/*<Route path="*" element={<Error/>}></Route>*/}

      </Routes> 
      </div>
      </>
  )
}

export default App;