import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const CartDetail = (props) => {
  const {img, nombre}= props
  const navigate = useNavigate()
  return (
    <div>
      <button className='btn btn-danger' onClick={()=>navigate(-1)}>Volver atras</button>
        <div>
            <img src={img} alt="" />
        </div>
        <div>
            <h1>{nombre}</h1>
        </div>
    </div>
  )
}

export default CartDetail