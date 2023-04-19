import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Spinner from '../../components/spinner/Spinner'


const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <Spinner/>
    <Outlet/>
    </div>
  )
}

export default MainLayout