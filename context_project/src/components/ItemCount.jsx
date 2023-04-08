import React, { useContext, useState } from 'react'
import { EcommerContext } from '../context/EcommerceProvider'

const ItemCount = (props) => {
    const {producto} = props
    const {addToCart} = useContext(EcommerContext)
    
    
    const [count, setCount] = useState(1)

    const handleSum = () => {
        setCount(count + 1)
    }

    const handleRes = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    return (
        <div>
            <div className='container d-flex justify-content-between'>
                <button onClick={handleRes} className='btn btn-warning fs-6'>-1</button>
                <h6 className='fs-3'>{count}</h6>
                <button onClick={handleSum} className='btn btn-warning fs-6'>+1</button>
            </div>
            <button  className='btn btn-primary mx-auto my-4' onClick={()=> addToCart({...producto,count})}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount