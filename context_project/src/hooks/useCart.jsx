import React, { useState } from 'react'

const useCart = () => {
    const [carrito, setCarrito] =useState([])
    const addToCart = (producto)=> setCarrito([...carrito, producto])
    const deleteCart = (id)=> setCarrito(carrito.filter((item)=> item.id !== id))

   // const isCart = (id)=>carrito.includes(id)
   const isCart = (id)=>carrito.some((item) => item.id ===id)



  return {
    carrito,
    addToCart,
    deleteCart,
    isCart

  }
}

export default useCart