import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

const MainLayoutRoutes = (props) => {
    const {user} = props
  return (
    <>
    <Navbar 
        nombreItems={[
            {nombre:'Home',path:'/'},
            {nombre:'nosotros', path:'/nosotros'},
            {nombre:'contacto', path:'/contacto'}
        ]} />

        {!user&& <Navigate to='/login' />}
        {user && <Outlet />}

        
    </>
  )
}

export default MainLayoutRoutes