import React, { useContext } from 'react'
import { productContext } from '../../context/ProductProvider'



const Container = () => {

    const {productos, loading} = useContext(productContext) 
  return (
    <div>Container</div>
  )
}

export default Container