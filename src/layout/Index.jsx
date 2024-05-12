import React, {useState } from 'react'
import SideBar from './SideBar'
import NavBar from './NavBar'
const Layout = ({ children }) => {

  return (
    <>
    <SideBar/>
      <div className="sm:ml-64 ">
        <NavBar />
        {children}
      </div>
    </>
  )
}

export default Layout