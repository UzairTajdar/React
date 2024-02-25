import React from 'react'
import { Header,Footer } from './components'
import { Outlet } from 'react-router-dom'
import './App.css'


function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout