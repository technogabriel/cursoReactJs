import React, { useContext } from 'react'
import { EcommerContext } from '../context/EcommerceProvider'
import Card from './Card'

const ProductsContainer = () => {
    const {products} = useContext(EcommerContext)

  return (
    <div className='container-fluid d-flex p-3'>
        {products.map((productos)=>(
            <Card
            key={productos.id} 
            {...productos}
           // noButton={true}
            />
        ))}

    </div>
  )
}

export default ProductsContainer