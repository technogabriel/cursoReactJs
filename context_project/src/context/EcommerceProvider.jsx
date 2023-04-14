import React, { createContext, useState } from 'react'
import useCart from '../hooks/useCart'

export const EcommerContext = createContext('')

const EcommerceProvider = ({children}) => {
    const {carrito, addToCart,deleteCart,isCart} = useCart()

const products =[{
    id:"1",
    image:'https://http2.mlstatic.com/D_NQ_NP_912054-MLA53354557227_012023-O.webp',
    name:'Iphone',
    version:'13 Pro Max',
    price:400000,
    year:2022
},
{
    id:"2",
    image:'https://http2.mlstatic.com/D_NQ_NP_2X_873385-MLM51559384419_092022-F.webp',
    name:'Iphone',
    version:'14 Pro Max',
    price:500000,
    year:2023 
},
{
    id:"3",
    image:'https://http2.mlstatic.com/D_NQ_NP_679726-MLA53452158591_012023-O.webp',
    name:'Samsung',
    version:'Galaxy S23 ',
    price:450000,
    year:2021 
},
{
    id:"4",
    image:'https://http2.mlstatic.com/D_NQ_NP_681526-MLA53162776022_012023-O.webp',
    name:'Motorola',
    version:'Moto G200 ',
    price:300000,
    year:2023
}
]


    
  return (
    <EcommerContext.Provider value={{
        products,
        addToCart,
        carrito,
        deleteCart,
        isCart
    }}>
        {children}
    </EcommerContext.Provider>
  )
}

export default EcommerceProvider