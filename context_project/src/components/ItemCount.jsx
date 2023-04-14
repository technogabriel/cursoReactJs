import React, { useContext } from 'react'
import { EcommerContext } from '../context/EcommerceProvider'
import useCounter from '../hooks/useCounter'

const ItemCount = (props) => {
    const {addToCart, isCart} = useContext(EcommerContext)

    const {producto,withoutButton,cantidad} = props
    
    const {count,handleSum,handleRes, handleRedirect} = useCounter(cantidad)


    return (
        <div>
            <div className='container d-flex justify-content-between'>
                <button onClick={handleRes} className='btn btn-warning fs-6'>-1</button>
                <h6 className='fs-3'>{count}</h6>
                <button onClick={handleSum} className='btn btn-warning fs-6'>+1</button>
            </div>
            {!withoutButton && !isCart(producto.id) && (
            <button  
                className='btn btn-primary mx-auto my-4' 
                onClick={()=> addToCart({...producto,count})}
                >
                    Agregar al Carrito
            </button>
            )}

            {isCart(producto.id) && (
            <button onClick={handleRedirect} className='btn btn-success mx-auto my-4'>
                Terminar la Compra
            </button>
            )}

        </div>
    )
}

export default ItemCount