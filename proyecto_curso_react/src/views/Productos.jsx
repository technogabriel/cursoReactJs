import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import ProductContainer from '../components/ProductContainer';
import Container from '../layout/Container';

const Productos = () => {
    const nombreItem = ["Home","Link","Disabled"]
    const listDropDown = ["Real Madrid","Barcelona","PSG","Roma","Boca Juniors"]
    return (
        <>
            <Navbar nombreLogo={'Futbol'} 
                nombreItems ={nombreItem} 
                search_bar={true} 
                show_dropdown={true} 
                dropdown_list={listDropDown} 
                dropdown_name={'equipos'}
            />
            <Container dFlex >
                <ProductContainer/>
            </Container>    

        </>
    );
}

export default Productos;
