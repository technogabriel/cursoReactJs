import React from 'react'
import { navLinks } from './config'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {navLinks.map(({nombre,path},index)=>(
            <NavLink key={index} className={'nav-link'} to ={path}>{nombre}</NavLink>
        ))}
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar