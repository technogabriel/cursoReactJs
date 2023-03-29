/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {NavLink} from 'react-router-dom'

const NavbarItem = (props) => {
  const {nombreItem, path} = props

  const activeStyle={color:'red'}

    return (
        <li className="nav-item">
         { /*<a className="nav-link" href="#">{nombreItem}</a>*/}
         <NavLink className={'nav-link'} style={({isActive})=>isActive? activeStyle:null } to={path}>{nombreItem}</NavLink>
        </li>
    );
}

export default NavbarItem;
