import React, { useContext } from 'react'
import { EcommerContext } from '../context/EcommerceProvider'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'

const ItemDetail = () => {
    const{id}= useParams()
    const {products}=useContext(EcommerContext)
    
    const producto = products.find((producto)=>producto.id===id)
  return (
    <div>
        <Card {...producto} noButton={true}/>
    </div>
  )
}

export default ItemDetail