import React, { useContext } from 'react'
import { EcommerContext } from '../context/EcommerceProvider'
import ItemCount from './ItemCount'

const CartContainer = () => {
    const { carrito, deleteCart } = useContext(EcommerContext)

    return (
        <div className='container-fluid d-flex p-3'>
            {!carrito.length ? <h1>El carrito esta vacio</h1> : carrito.map(({ name, price, count,version, image,id }) => (
                <>
                    <div className="card mx-2" style={{ width: "18rem" }}>

                        <img src={image} className="card-img-top w-50 h-50 mx-auto" alt="celu-image" />
                        <span>{name}</span>
                        <span>{version}</span>
                        <span>$ {price}</span>
                        <span>X {count}</span>
                        <span></span>
                        {/*<ItemCount cantidad={count} withoutButton={true}/>*/}
                        <button onClick={()=>deleteCart(id)} className='btn btn-danger'>Eliminar</button>
                    </div>
                </>
            ))}
        </div>

    )
}

export default CartContainer