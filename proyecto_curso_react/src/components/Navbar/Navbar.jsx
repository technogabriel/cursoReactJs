/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import DropDownNavbar from './DropDownNavbar';
import NavbarItem from './NavbarItem';
import SearchBar from './SearchBar';


const Navbar = (props) => {
  
  const {nombreLogo,nombreItems, search_bar,show_dropdown,dropdown_list, dropdown_name} = props

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{nombreLogo}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {nombreItems.map((nombre)=>(
          <NavbarItem nombreItem={nombre}/>
        ))}
     {show_dropdown && <DropDownNavbar list_arr={dropdown_list} dropName={dropdown_name}/>}
      </ul>
      {search_bar && <SearchBar/>}
      
    </div>
  </div>
</nav>
    );
}

export default Navbar;
