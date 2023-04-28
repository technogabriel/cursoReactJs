import React from 'react'
import Formulario from '../components/Formulario/Formulario'



const Producto = () => {

  const initialState ={
    nombre:"",
    marca:"",
    modelo:"",
    precio:"",
  };

  return (
    <div className='container d-flex flex-column align-items-center my-5'>
    <Formulario initialState={initialState} buttonText={'agregar'} />
    </div>
  )
}

export default Producto