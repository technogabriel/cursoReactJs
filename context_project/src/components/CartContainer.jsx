import React, { useContext } from 'react'
import { EcommerContext } from '../context/EcommerceProvider'

const CartContainer = () => {
    const { carrito } = useContext(EcommerContext)

    return (
        <div className='container'>
            {!carrito.length ? <h1>El carrito esta vacio</h1> : carrito.map(({ name, price, count,version }) => (
                <>
                    <div className='d-flex card'>
                        <span>{name}</span>
                        <span>{version}</span>
                        <span>$ {price}</span>
                        <span>X {count}</span>
                        <button className='btn btn-danger'>Eliminar</button>
                    </div>
                </>
            ))}
        </div>

    )
}

export default CartContainer