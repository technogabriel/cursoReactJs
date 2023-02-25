import React from 'react'
import NavbarItem from './NavbarItem'

const DropDownNavbar = (props) => {
    const {list_arr,dropName} = props
  return (
    <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="www.google.com" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      {dropName}
    </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
      {list_arr?.length>0 && list_arr.map((nombre)=>(
        <NavbarItem nombreItem ={nombre}/>
        ))}
    </ul>
  </li>
  )
}

export default DropDownNavbar