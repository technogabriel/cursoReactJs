import React, {useEffect,useState} from 'react';
import { equipos } from '../data';
import Cart from './Cart/Cart';


const ProductContainer = () => {
  

  const [datos,setDatos ]= useState(equipos)
  const [click,setClick] =useState(false)
/*
  useEffect(() => {
    //cuando el componente esta listo(Mount)
    
    console.log('se cargo completamente el componente')
  
    return () => {  
      //Cuando el componente se destruye (Dismount)
      console.log('se destruyo el componente')
    }
    //en los corchetes, es el (change), los cambios
  }, [click, datos])

  console.log('Se ejecuto este console.log pero el html no cargo')
  */

    return (
           <>
            {datos.map(({id,img,titulo,descripcion,lugar})=>(
              <Cart 
                    id={id}
                    key={id} 
                    img={img} 
                    title={titulo}
                    description={descripcion}
                    lugar={lugar}
                    buttonName={'Mas Info'}
                    buttonClassName={titulo === 'Real Madrid' ? 'btn btn-outline-success' : 'btn btn-outline-danger'}
              />
            ))}
           {/* <button onClick={()=> setClick(!click)}>click</button>*/}
           </>

    );
}

export default ProductContainer;
