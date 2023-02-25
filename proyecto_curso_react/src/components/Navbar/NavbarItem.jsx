/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const NavbarItem = (props) => {
  const {nombreItem} = props
    return (
        <li className="nav-item">
          <a className="nav-link" href="#">{nombreItem}</a>
        </li>
    );
}

export default NavbarItem;
