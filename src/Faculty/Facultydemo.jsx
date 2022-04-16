import React from 'react'
import { Outlet } from 'react-router-dom'
import  FacultyBar  from "./FacultyBar"

const Facultydemo = () => {
  return (
      <>
    <FacultyBar/>
    <Outlet/>
    </>
  )
}

export default Facultydemo