import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Footer from './Footer/Footer'
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
    

  )
}

export default Layout