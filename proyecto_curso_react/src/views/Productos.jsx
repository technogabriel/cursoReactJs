import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const Productos = () => {
    const nombreItem = ["Home","Link","Disabled"]
    const dropdownList = ["XBOX","PS5","NINTENDO DS","PC"]
    return (
        <Navbar nombreLogo={'Mercado Libre'} 
                nombreItems ={nombreItem} 
                search_bar={true} 
                show_dropdown={true} 
                dropdown_list={dropdownList} 
                dropdown_name={'Consolas'}/>
    );
}

export default Productos;
